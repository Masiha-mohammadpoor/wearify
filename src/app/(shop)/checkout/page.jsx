"use client";
import { useState, useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { useSession } from "@/lib/auth-client";
import {
  getCartData,
  removeProductFromCart,
  updateProductQuantity,
} from "@/services/cartServices";
import { BiDollar } from "react-icons/bi";
import { FaMinus, FaPlus, FaTrashCan } from "react-icons/fa6";
import { LuMapPin, LuPlus, LuTruck } from "react-icons/lu";
import ProfileInput from "@/components/ProfileInput";
import CountrySelect from "@/components/CountrySelect";
import StateSelect from "@/components/StateSelect";
import { useCountries } from "@/lib/useCountries";
import { getShippingOptions } from "@/services/shippingServices";

const addressSchema = yup
  .object({
    firstName: yup.string().required("First name is required"),
    lastName: yup.string().required("Last name is required"),
    phoneNumber: yup
      .string()
      .required("Phone number is required")
      .matches(/^\+[1-9]\d{7,14}$/, "Phone number must include country code"),
    country: yup.string().required("Country is required"),
    state: yup.string().nullable(),
    city: yup.string().required("City is required"),
    address: yup.string().required("Address is required"),
    postalCode: yup.string().required("Postal code is required"),
  })
  .required();

const CheckoutPage = () => {
  const { data: session, isPending } = useSession();
  const router = useRouter();
  const { countries } = useCountries();

  const [cartItems, setCartItems] = useState([]);
  const [loadingCart, setLoadingCart] = useState(true);
  const [updatingKey, setUpdatingKey] = useState(null);
  const [addressMode, setAddressMode] = useState("profile");
  const [stateError, setStateError] = useState("");

  const [shippingRates, setShippingRates] = useState([]);
  const [selectedRateId, setSelectedRateId] = useState(null);
  const [shippingLoading, setShippingLoading] = useState(false);
  const [shippingError, setShippingError] = useState("");

  const {
    register,
    handleSubmit,
    control,
    watch,
    trigger,
    getValues,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      firstName: "",
      lastName: "",
      phoneNumber: "",
      country: "",
      state: "",
      city: "",
      address: "",
      postalCode: "",
    },
    resolver: yupResolver(addressSchema),
    mode: "onTouched",
  });

  const selectedCountry = watch("country");
  const countryNeedsState = countries.find(
    (c) => c.code === selectedCountry,
  )?.states;

  useEffect(() => {
    if (!isPending && !session) {
      router.push("/login");
    }
  }, [isPending, session, router]);

  useEffect(() => {
    if (!session) return;
    fetchCart();
  }, [session]);

  const fetchCart = async () => {
    setLoadingCart(true);
    try {
      const res = await fetch("/api/cart");
      const data = await res.json();
      if (data.success) {
        setCartItems(data.data.items);
      }
    } catch (err) {
      console.error("Error fetching cart:", err);
    } finally {
      setLoadingCart(false);
    }
  };

  const updateQuantityHandler = async (item, newQuantity) => {
    if (newQuantity < 1) return;

    const itemKey = `${item.productId}-${item.variantId}`;
    setUpdatingKey(itemKey);

    try {
      await updateProductQuantity({
        productId: item.productId,
        variantId: item.variantId,
        quantity: newQuantity,
      });
      await fetchCart();
      resetShipping();
    } catch (err) {
      console.error(err);
    } finally {
      setUpdatingKey(null);
    }
  };

  const removeItemHandler = async (item) => {
    try {
      await removeProductFromCart({
        data: { productId: item.productId, variantId: item.variantId },
      });
      await fetchCart();
      resetShipping();
    } catch (err) {
      console.error(err);
    }
  };

  const resetShipping = () => {
    setShippingRates([]);
    setSelectedRateId(null);
    setShippingError("");
  };

  const subtotal = cartItems.reduce(
    (sum, item) => sum + Number(item.price || 0) * item.quantity,
    0,
  );
  const totalQuantity = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  const hasProfileAddress = Boolean(
    session?.user?.address &&
    session?.user?.city &&
    session?.user?.country &&
    session?.user?.postalCode &&
    session?.user?.phoneNumber,
  );

  const buildShippingItems = () => {
    const items = cartItems
      .filter((i) => i.catalogVariantId)
      .map((i) => ({ variant_id: i.catalogVariantId, quantity: i.quantity }));

    if (items.length !== cartItems.length) {
      console.warn("Some cart items are missing a catalog variant id");
    }
    return items;
  };

  const calculateShipping = async (address) => {
    setShippingLoading(true);
    setShippingError("");
    setShippingRates([]);
    setSelectedRateId(null);

    const dataToSend = {
      recipient: {
        country_code: address.country,
        state_code: address.state || undefined,
        city: address.city,
        zip: address.postalCode,
        address1: address.address1 || address.address,
        phone: address.phone || address.phoneNumber,
      },
      items: buildShippingItems(),
    };

    try {
      const result = await getShippingOptions(dataToSend);

      if (!result.success) {
        throw new Error(
          result.error || result.message || "Could not calculate shipping",
        );
      }

      setShippingRates(result.data);
      if (result.data.length > 0) {
        setSelectedRateId(result.data[0].id);
      }
    } catch (err) {
      setShippingError(err.message);
    } finally {
      setShippingLoading(false);
    }
  };

  useEffect(() => {
    if (
      addressMode === "profile" &&
      hasProfileAddress &&
      cartItems.length > 0
    ) {
      calculateShipping({
        country: session.user.country,
        state: session.user.state,
        city: session.user.city,
        postalCode: session.user.postalCode,
        address1: session.user.address || "",
        phone: session.user.phoneNumber || "",
      });
    } else if (addressMode === "profile") {
      resetShipping();
    }
  }, [addressMode, cartItems.length]);

  const handleCalculateNewAddressShipping = async () => {
    const valid = await trigger(["country", "state", "city", "postalCode"]);

    const values = getValues();

    if (countryNeedsState && !values.state) {
      setStateError("State/province is required for this country");
      return;
    }
    setStateError("");

    if (!valid) return;

    await calculateShipping({
      country: values.country,
      state: values.state,
      city: values.city,
      postalCode: values.postalCode,
      address1: values.address || "",
      phone: values.phoneNumber || "",
    });
  };

  const selectedRate = shippingRates.find((r) => r.id === selectedRateId);
  const shippingCost = selectedRate ? Number(selectedRate.rate) : 0;
  const total = subtotal + shippingCost;

  const onPlaceOrder = async (newAddressData) => {
    if (!selectedRateId) {
      setShippingError("Please calculate and select a shipping method first");
      return;
    }

    if (addressMode === "new" && countryNeedsState && !newAddressData.state) {
      setStateError("State/province is required for this country");
      return;
    }
    setStateError("");

    const shippingAddress =
      addressMode === "profile"
        ? {
            firstName: session.user.firstName,
            lastName: session.user.lastName,
            phoneNumber: session.user.phoneNumber,
            country: session.user.country,
            state: session.user.state || null,
            city: session.user.city,
            address: session.user.address,
            postalCode: session.user.postalCode,
          }
        : newAddressData;

    const orderPayload = {
      items: cartItems.map((item) => ({
        productId: item.productId,
        variantId: item.variantId,
        quantity: item.quantity,
      })),
      shippingAddress,
      shippingMethod: selectedRate,
      totalPrice: total,
    };

    console.log("Ready to send to payment gateway:", orderPayload);
  };

  if (isPending || loadingCart) {
    return (
      <main className="flex justify-center items-center min-h-scree">
        <p>Loading...</p>
      </main>
    );
  }

  if (cartItems.length === 0) {
    return (
      <main className="flex flex-col justify-center items-center min-h-screen gap-y-4">
        <h1 className="text-2xl font-semibold">Your cart is empty</h1>
        <Link href="/products" className="text-red-900 underline">
          Continue shopping
        </Link>
      </main>
    );
  }

  return (
    <main className="grid grid-cols-12 gap-8 mt-10 mx-20">
      <h1 className="col-span-12 text-xl font-semibold">
        Checkout ( <span className="text-red-900">{totalQuantity}</span> )
      </h1>

      <section className="col-span-8 flex flex-col gap-8">
        <div className="flex flex-col gap-y-5">
          {cartItems.map((item) => {
            const itemKey = `${item.productId}-${item.variantId}`;
            const isUpdating = updatingKey === itemKey;

            return (
              <article
                key={itemKey}
                className="w-full rounded-2xl bg-[#f4ece4] p-3 flex items-center justify-between"
              >
                <div className="flex items-center gap-x-5">
                  <div className="w-24 h-24 rounded-2xl relative bg-red-300 overflow-hidden">
                    <Image
                      src={item.image}
                      alt={`${item.name} image`}
                      fill
                      className="object-fill absolute"
                    />
                  </div>
                  <div className="flex flex-col justify-between h-24 py-1">
                    <h4 className="font-semibold text-lg">{item.name}</h4>
                    <span className="font-semibold flex items-center gap-x-0.5">
                      <BiDollar className="text-red-900 mb-1.5" />
                      {item.price}
                    </span>
                    <div className="flex items-center gap-x-3 text-sm">
                      <span>
                        size:
                        <span className="text-red-900">{item.size}</span>
                      </span>
                      <span className="flex items-center gap-x-1">
                        color:
                        <span className="text-sm">{item.color}</span>
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <div className="h-8 flex overflow-hidden rounded-xl">
                    <button
                      onClick={() =>
                        updateQuantityHandler(item, item.quantity - 1)
                      }
                      disabled={isUpdating || item.quantity <= 1}
                      className="w-8 flex justify-center items-center bg-red-800 hover:bg-red-900 transition duration-300 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaMinus size={12} />
                    </button>
                    <input
                      type="number"
                      min={1}
                      disabled={isUpdating}
                      onChange={(e) => {
                        const val =
                          e.target.value === "" ? 1 : Number(e.target.value);
                        updateQuantityHandler(item, Math.max(1, val));
                      }}
                      value={item.quantity}
                      className="outline-none border-2 border-red-800 w-12 text-center text-lg text-red-900 font-semibold"
                    />
                    <button
                      onClick={() =>
                        updateQuantityHandler(item, item.quantity + 1)
                      }
                      disabled={isUpdating}
                      className="w-8 flex justify-center items-center bg-red-800 hover:bg-red-900 transition duration-300 text-white cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      <FaPlus size={12} />
                    </button>
                  </div>

                  <button
                    onClick={() => removeItemHandler(item)}
                    className="text-lg px-2 cursor-pointer"
                  >
                    <FaTrashCan className="text-red-500 hover:text-red-800 transition duration-150" />
                  </button>
                </div>
              </article>
            );
          })}
        </div>

        <div className="rounded-xl bg-[#f4ece4] p-6 flex flex-col gap-y-5">
          <h3 className="text-lg font-semibold flex items-center gap-x-2">
            <LuMapPin className="mb-1 text-xl text-red-900" /> Shipping Address
          </h3>
          <div className="grid grid-cols-12 gap-4">
            {hasProfileAddress && (
              <label
                className={`bg-[#f4ece4] col-span-6 flex items-start gap-x-3 p-4 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                  addressMode === "profile"
                    ? "border-red-900"
                    : "border-transparent"
                }`}
              >
                <input
                  type="radio"
                  name="addressMode"
                  checked={addressMode === "profile"}
                  onChange={() => {
                    setAddressMode("profile");
                    resetShipping();
                  }}
                  className="mt-1 accent-red-900"
                />
                <div className="flex flex-col gap-y-1">
                  <p className="font-semibold">
                    {session.user.firstName} {session.user.lastName}
                  </p>
                  <div className="text-sm text-gray-600 flex flex-col gap-y-1">
                    <p>
                      <span className="text-red-900">address : </span>
                      {session.user.address.slice(0, 20) + "..."}
                    </p>
                    <p>
                      <span className="text-red-900">city : </span>
                      {session.user.city}
                    </p>
                    {session.user.state && (
                      <p>
                        <span className="text-red-900">state : </span>
                        {session.user.state}
                      </p>
                    )}
                    <p>
                      <span className="text-red-900">country : </span>
                      {session.user.country}
                    </p>
                    <p>
                      <span className="text-red-900">postal code : </span>
                      {session.user.postalCode}
                    </p>
                  </div>
                  <p className="text-gray-600 text-sm">
                    <span className="text-red-900">phone number : </span>
                    {session.user.phoneNumber}
                  </p>
                </div>
              </label>
            )}

            <label
              className={`bg-[#f4ece4] col-span-6 flex items-center gap-x-3 p-4 border-2  rounded-xl cursor-pointer transition-all duration-300 ${
                addressMode === "new" ? " border-red-900" : "border-transparent"
              }`}
            >
              <input
                type="radio"
                name="addressMode"
                checked={addressMode === "new"}
                onChange={() => {
                  setAddressMode("new");
                  resetShipping();
                }}
                className="accent-red-900"
              />
              <span className="flex items-center gap-x-2 font-semibold">
                <LuPlus /> Add new address
              </span>
            </label>
          </div>

          {addressMode === "new" && (
            <div className="grid grid-cols-12 gap-4 mt-2">
              <ProfileInput
                name="firstName"
                label="First Name"
                placeholder="John"
                style="col-span-6"
                register={register}
              />
              <ProfileInput
                name="lastName"
                label="Last Name"
                placeholder="Doe"
                style="col-span-6"
                register={register}
              />
              <ProfileInput
                name="phoneNumber"
                label="Phone Number"
                placeholder="+1234567890"
                style="col-span-6"
                register={register}
              />
              <ProfileInput
                name="postalCode"
                label="Postal Code"
                placeholder="1234567890"
                style="col-span-6"
                register={register}
              />

              <div className="col-span-6">
                <Controller
                  name="country"
                  control={control}
                  render={({ field }) => (
                    <CountrySelect
                      value={field.value}
                      onChange={field.onChange}
                      label="Country"
                    />
                  )}
                />
              </div>

              {countryNeedsState && (
                <div className="col-span-6">
                  <Controller
                    name="state"
                    control={control}
                    render={({ field }) => (
                      <StateSelect
                        countryCode={selectedCountry}
                        value={field.value}
                        onChange={field.onChange}
                        label="State"
                      />
                    )}
                  />
                </div>
              )}

              <ProfileInput
                name="city"
                label="City"
                placeholder="New York"
                style="col-span-6"
                register={register}
              />
              <div className="flex flex-col items-start col-span-12">
                <label
                  htmlFor="address"
                  className="text-sm font-semibold mb-2.5 pl-1"
                >
                  Address
                </label>
                <textarea
                  id="address"
                  placeholder="Enter Your Full Address"
                  autoComplete="off"
                  {...register("address")}
                  className="w-full resize-none h-32 outline-none rounded-xl border border-[#dfcec6] py-2 px-4 bg-[#FDF8F6] focus:border-red-900"
                />
              </div>

              <div className="col-span-12 flex justify-end mt-5">
                <button
                  type="button"
                  onClick={handleCalculateNewAddressShipping}
                  disabled={shippingLoading || !isValid}
                  className="cursor-pointer flex items-center gap-x-2 px-4 py-2 rounded-full border-2 border-red-900 text-red-900 font-semibold hover:bg-red-900 hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <LuTruck />
                  {shippingLoading
                    ? "Calculating..."
                    : "Calculate shipping cost"}
                </button>
              </div>
            </div>
          )}

          {shippingError && (
            <p className="text-red-600 text-sm text-center mt-10">
              {shippingError}
            </p>
          )}

          {shippingRates.length > 0 && (
            <div className="flex flex-col gap-y-2 mt-2">
              <p className="font-semibold text-sm mb-3">Shipping method:</p>
              {shippingRates.map((rate) => (
                <label
                  key={rate.id}
                  className={`flex items-center justify-between p-3 rounded-xl border-2 cursor-pointer transition-all duration-300 ${
                    selectedRateId === rate.id
                      ? "border-red-900 bg-[#FDF8F6]"
                      : "border-transparent bg-white/50"
                  }`}
                >
                  <span className="flex items-center gap-x-3">
                    <input
                      type="radio"
                      name="shippingRate"
                      checked={selectedRateId === rate.id}
                      onChange={() => setSelectedRateId(rate.id)}
                      className="accent-red-900"
                    />
                    <span>
                      <span className="font-medium">{rate.name}</span>
                      {rate.minDeliveryDays && (
                        <span className="text-sm text-gray-500 block">
                          {rate.minDeliveryDays}-{rate.maxDeliveryDays} days
                        </span>
                      )}
                    </span>
                  </span>
                  <span className="font-semibold flex items-center">
                    <BiDollar className="text-red-900" />
                    {rate.rate}
                  </span>
                </label>
              ))}
            </div>
          )}
        </div>
      </section>

      <section className="col-span-4 h-fit sticky top-20 rounded-2xl bg-[#f4ece4] p-6 flex flex-col gap-4">
        <h3 className="text-xl font-semibold">Order Summary</h3>

        <div className="flex justify-between text-gray-700">
          <span>Items ({totalQuantity})</span>
          <span className="flex items-center">
            <BiDollar className="text-red-900 mb-1" />
            {subtotal.toFixed(2)}
          </span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Total Quantity</span>
          <span className="font-semibold text-red-900">{totalQuantity}</span>
        </div>

        <div className="flex justify-between text-gray-700">
          <span>Shipping</span>
          <span className="flex items-center">
            {selectedRate ? (
              <>
                <BiDollar className="text-red-900 mb-1" />
                {shippingCost.toFixed(2)}
              </>
            ) : (
              <span className="text-sm">Not calculated yet</span>
            )}
          </span>
        </div>

        <hr className="border-red-900/20" />

        <div className="flex justify-between text-lg font-semibold">
          <span>Total</span>
          <span className="flex items-center">
            <BiDollar className="text-red-900 mb-1.5" />
            {total.toFixed(2)}
          </span>
        </div>

        <button
          onClick={
            addressMode === "profile"
              ? () => onPlaceOrder()
              : handleSubmit(onPlaceOrder)
          }
          disabled={(addressMode === "new" && !isValid) || !selectedRateId}
          className="w-full rounded-full text-white text-lg font-semibold bg-red-900 py-2 mt-2 transition-all duration-300 hover:bg-red-950 disabled:cursor-not-allowed disabled:opacity-45"
        >
          Proceed to Payment
        </button>
      </section>
    </main>
  );
};

export default CheckoutPage;

"use client";
import { useState, useEffect, useRef } from "react";
import AuthInput from "@/components/AuthInput";
import Image from "next/image";
import Link from "next/link";
import { FcGoogle } from "react-icons/fc";
import { HiHome } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { authClient } from "@/lib/auth-client";

const OTP_VALIDITY_SECONDS = 300;

const emailSchema = yup
  .object({
    email: yup
      .string()
      .required("email is required")
      .email("please enter a valid email"),
  })
  .required();

const otpSchema = yup
  .object({
    otp: yup
      .string()
      .required("code is required")
      .matches(/^\d{6}$/, "code must be 6 digits"),
  })
  .required();

const Login = () => {
  const [step, setStep] = useState("email"); // "email" | "otp"
  const [pendingEmail, setPendingEmail] = useState("");
  const [serverError, setServerError] = useState("");
  const [secondsLeft, setSecondsLeft] = useState(OTP_VALIDITY_SECONDS);
  const [resending, setResending] = useState(false);
  const intervalRef = useRef(null);

  const emailForm = useForm({
    defaultValues: { email: "" },
    resolver: yupResolver(emailSchema),
    mode: "onTouched",
  });

  const otpForm = useForm({
    defaultValues: { otp: "" },
    resolver: yupResolver(otpSchema),
    mode: "onTouched",
  });

  const startTimer = () => {
    clearInterval(intervalRef.current);
    setSecondsLeft(OTP_VALIDITY_SECONDS);
    intervalRef.current = setInterval(() => {
      setSecondsLeft((prev) => {
        if (prev <= 1) {
          clearInterval(intervalRef.current);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);
  };

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const onSubmitEmail = async (data) => {
    setServerError("");
    const { error } = await authClient.emailOtp.sendVerificationOtp({
      email: data.email,
      type: "sign-in",
    });

    if (error) {
      setServerError(error.message || "Could not send the code, try again");
      return;
    }

    setPendingEmail(data.email);
    setStep("otp");
    startTimer();
  };

  const onSubmitOtp = async (data) => {
    setServerError("");
    const { error } = await authClient.signIn.emailOtp({
      email: pendingEmail,
      otp: data.otp,
    });

    if (error) {
      setServerError(error.message || "Invalid code");
      return;
    }

    window.location.href = "/products";
  };

  const handleResend = async () => {
    setServerError("");
    setResending(true);
    const { error } = await authClient.emailOtp.sendVerificationOtp({
      email: pendingEmail,
      type: "sign-in",
    });
    setResending(false);

    if (error) {
      setServerError(error.message || "Could not resend the code, try again");
      return;
    }

    otpForm.reset({ otp: "" });
    startTimer();
  };

  return (
    <main className="overflow-hidden flex justify-between items-center h-screen bg-[#f4ece4]">
      <section
        className="relative h-screen w-3/5"
        style={{ clipPath: "url(#waveClip)" }}
      >
        <Image
          src="/login.png"
          alt="login"
          fill
          unoptimized
          sizes="60vw"
          className="object-cover"
        />
      </section>

      <section className="w-2/5 h-screen flex flex-col items-center justify-center relative">
        <Link className="absolute top-10 right-10" href="/">
          <HiHome className="text-red-900 text-2xl" />
        </Link>
        <h2 className="text-4xl font-semibold mb-10">
          SignUp <span className="text-red-900">/</span> Login
        </h2>

        {step === "email" && (
          <>
            <form
              className="flex flex-col w-4/5 gap-y-3"
              onSubmit={emailForm.handleSubmit(onSubmitEmail)}
            >
              <AuthInput
                name="email"
                placeholder="email"
                register={emailForm.register}
                errors={emailForm.formState.errors}
              />
              <button
                disabled={
                  !emailForm.formState.isValid ||
                  !emailForm.formState.isDirty ||
                  emailForm.formState.isSubmitting
                }
                className="w-full rounded-full text-white text-lg font-semibold bg-red-900 py-2 cursor-pointer hover:bg-red-950 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-red-900 disabled:opacity-45"
              >
                {emailForm.formState.isSubmitting
                  ? "sending code..."
                  : "send code"}
              </button>
            </form>
            <button
              onClick={() =>
                authClient.signIn.social({
                  provider: "google",
                  callbackURL: "/products",
                })
              }
              className="flex justify-center items-center border border-blue-500 gap-x-4 mt-6 w-4/5 rounded-full text-lg font-semibold bg-blue-100 py-2 cursor-pointer hover:bg-gray-200 transition-all duration-300"
            >
              login with google <FcGoogle className="text-2xl" />
            </button>
          </>
        )}

        {step === "otp" && (
          <form
            className="flex flex-col w-4/5 gap-y-3"
            onSubmit={otpForm.handleSubmit(onSubmitOtp)}
          >
            <p className="text-sm text-gray-600 mb-2 pl-2 text-center">
              We sent a code to {pendingEmail}
            </p>
            <AuthInput
              name="otp"
              placeholder="6-digit code"
              register={otpForm.register}
              errors={otpForm.formState.errors}
            />

            <button
              disabled={
                !otpForm.formState.isValid ||
                otpForm.formState.isSubmitting ||
                secondsLeft === 0
              }
              className="mt-2 w-full rounded-full text-white text-lg font-semibold bg-red-900 py-2 cursor-pointer hover:bg-red-950 transition-all duration-300 disabled:cursor-not-allowed disabled:bg-red-900 disabled:opacity-45"
            >
              {otpForm.formState.isSubmitting
                ? "verifying..."
                : "verify & login"}
            </button>

            <button
              type="button"
              onClick={handleResend}
              disabled={secondsLeft > 0 || resending}
              className="text-red-900 font-semibold mt-3 disabled:text-gray-700 disabled:cursor-not-allowed cursor-pointer"
            >
              {resending
                ? "resending..."
                : secondsLeft > 0
                  ? `resend code (${secondsLeft}s)`
                  : "resend code"}
            </button>

            <button
              type="button"
              onClick={() => {
                clearInterval(intervalRef.current);
                setStep("email");
              }}
              className="text-red-900 font-semibold mt-1 cursor-pointer"
            >
              wrong email? go back
            </button>
          </form>
        )}
      </section>

      <svg width="0" height="0" className="absolute">
        <defs>
          <clipPath id="waveClip" clipPathUnits="objectBoundingBox">
            <path d="M0,0 L0.94,0 C0.97,0.15 0.97,0.35 0.94,0.5 C0.91,0.65 0.91,0.85 0.94,1 L0,1 Z" />
          </clipPath>
        </defs>
      </svg>
    </main>
  );
};

export default Login;
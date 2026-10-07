import Image from "next/image";
import Link from "next/link";
import {
  FiArrowRight,
  FiSearch,
  FiStar,
  FiTruck,
  FiRefreshCw,
  FiPlay,
  FiChevronDown,
} from "react-icons/fi";
import { getCachedProducts } from "@/lib/products";
import NavActions from "@/components/NavActions";

const Home = async () => {
  const products = await getCachedProducts();
  const latestProduct = products?.[0] || null;

  return (
    <main className="min-h-screen overflow-hidden bg-[#FDF8F6] text-[#181313]">
      {/* =========================================================
          NAVBAR
      ========================================================= */}

      <nav className="relative z-50 flex w-full items-center justify-between px-6 py-6 sm:px-8 lg:px-14">
        {/* Logo */}
        <Link href="/" className="text-3xl font-black tracking-tight">
          <span className="text-[#82181a]">W</span>
          <span className="text-[#181313]">earify</span>
        </Link>

        {/* Navigation */}
        <div className="hidden items-center gap-x-10 text-sm font-medium md:flex">
          <Link
            href="/"
            className="relative text-[#82181a] after:absolute after:-bottom-2 after:left-0 after:h-[2px] after:w-full after:bg-[#82181a]"
          >
            Home
          </Link>

          <Link
            href="/products"
            className="text-[#8e7973] transition hover:text-[#82181a]"
          >
            Products
          </Link>

          <Link
            href="/about"
            className="text-[#8e7973] transition hover:text-[#82181a]"
          >
            About
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center gap-x-5">
          <NavActions />
        </div>
      </nav>

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="relative min-h-[calc(100vh-90px)] px-6 sm:px-8 lg:px-14">
        {/* Background decoration */}

        <div className="pointer-events-none absolute -right-40 -top-40 h-[550px] w-[550px] rounded-full bg-[#f4ece4] opacity-70" />

        {/* Main content */}

        <div className="relative z-10 mx-auto grid w-full max-w-[1500px] items-center gap-10 lg:min-h-[calc(100vh-90px)] lg:grid-cols-2">
          {/* =====================================================
              LEFT SIDE
          ===================================================== */}

          <div className="relative z-20 max-w-2xl py-10 lg:py-0">
            {/* Small heading */}

            <div className="mb-6 flex items-center gap-x-3">
              <span className="h-px w-8 bg-[#82181a]" />

              <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
                WEAR YOUR STORY
              </span>
              <span className="h-px w-8 bg-[#82181a]" />
            </div>

            {/* Main heading */}

            <h1 className="text-5xl font-black leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-[76px]">
              Custom Clothes
              <br />
              <span className="text-[#82181a]">for Every You</span>
            </h1>

            {/* Description */}

            <p className="mt-8 max-w-lg text-base leading-8 text-[#8e7973] lg:text-lg">
              Discover unique styles, premium quality, and endless
              possibilities. Design, create, and wear what makes you, you.
            </p>

            {/* Buttons */}

            <div className="mt-9 flex flex-wrap items-center gap-5">
              <Link
                href="/products"
                className="group flex items-center gap-x-4 rounded-full bg-[#82181a] px-7 py-3.5 font-medium text-white shadow-lg shadow-[#82181a]/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#681416]"
              >
                Shop Now
                <span className="flex h-7 w-7 items-center justify-center rounded-full bg-white/15 transition group-hover:translate-x-1">
                  <FiArrowRight size={16} />
                </span>
              </Link>

              <button className="group flex items-center gap-x-3 font-medium text-[#82181a]">
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-[#82181a] transition group-hover:bg-[#82181a] group-hover:text-white">
                  <FiPlay size={15} className="ml-0.5" />
                </span>
                Watch Video
              </button>
            </div>

            {/* Features */}

            <div className="mt-14 grid max-w-xl grid-cols-3">
              {/* Premium Quality */}

              <div className="flex items-start gap-x-3 border-r border-[#dfcec6] pr-5">
                <div className="mt-1 text-[#82181a]">
                  <FiStar size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold">Premium Quality</h4>

                  <p className="mt-1 text-xs leading-5 text-[#8e7973]">
                    Only the best materials
                  </p>
                </div>
              </div>

              {/* Fast Shipping */}

              <div className="flex items-start gap-x-3 border-r border-[#dfcec6] px-5">
                <div className="mt-1 text-[#82181a]">
                  <FiTruck size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold">Fast Shipping</h4>

                  <p className="mt-1 text-xs leading-5 text-[#8e7973]">
                    Get your order quickly
                  </p>
                </div>
              </div>

              {/* Easy Returns */}

              <div className="flex items-start gap-x-3 pl-5">
                <div className="mt-1 text-[#82181a]">
                  <FiRefreshCw size={20} />
                </div>

                <div>
                  <h4 className="text-sm font-semibold">Easy Returns</h4>

                  <p className="mt-1 text-xs leading-5 text-[#8e7973]">
                    A better tomorrow
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* =====================================================
              RIGHT SIDE
          ===================================================== */}

          <div className="relative h-[620px] w-full sm:h-[680px] lg:h-[720px]">
            {/* =================================================
                ARCH
            ================================================= */}

            <div
              className="
                absolute
                right-[4%]
                top-[4%]
                h-[72%]
                w-[76%]
                rounded-t-[220px]
                rounded-b-[40px]
                bg-[#eadfd7]
                lg:right-[8%]
              "
            />

            {/* =================================================
                GIRL IMAGE
            ================================================= */}

            <div
              className="
                absolute
                -bottom-15
                right-10
                inset-0
                z-10
                flex
                items-center
                justify-center
              "
            >
              <div className="relative h-[80%] w-[92%]">
                <Image
                  src="/hero-girl.png"
                  alt="Wearify fashion model"
                  fill
                  priority
                  sizes="(max-width: 1024px) 90vw, 45vw"
                  className="
                    object-contain
                    object-center
                    transition-transform
                    duration-700
                    hover:scale-[1.015]
                  "
                />
              </div>
            </div>

            {/* =================================================
                NEW COLLECTION CARD
            ================================================= */}

            <div
              className="
                absolute
                right-0
                top-[0%]
                z-30
                w-52
                rounded-2xl
                bg-[#FDF8F6]/95
                p-5
                shadow-xl
                shadow-black/10
                backdrop-blur-sm
              "
            >
              <p className="text-sm font-semibold text-[#82181a]">
                New Collection
              </p>

              <p className="mt-2 text-xs leading-5 text-[#8e7973]">
                Fresh styles for a new season.
              </p>

              <Link
                href="/products"
                className="mt-4 flex items-center justify-between"
              >
                <span className="text-sm font-medium">Explore</span>

                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#82181a] text-white">
                  <FiArrowRight size={15} />
                </span>
              </Link>
            </div>

            {/* =================================================
                PRODUCT CARD — New Arrival
            ================================================= */}

            {latestProduct && (
              <Link
                href={`/products/${latestProduct.id}`}
                className="
                  absolute
                  bottom-[15%]
                  left-[2%]
                  z-30
                  w-40
                  rotate-[-4deg]
                  rounded-2xl
                  bg-[#f4ece4]
                  p-3
                  shadow-xl
                  shadow-black/10
                  transition
                  duration-300
                  hover:rotate-0
                "
              >
                <div className="relative h-32 overflow-hidden rounded-xl bg-white">
                  <Image
                    src={latestProduct.image}
                    alt={latestProduct.name}
                    fill
                    sizes="160px"
                    className="object-cover"
                  />
                </div>

                <div className="mt-3 flex items-center justify-between">
                  <div>
                    <p className="text-xs text-[#8e7973]">New Arrival</p>

                    <p className="line-clamp-1 text-sm font-semibold">
                      {latestProduct.name}
                    </p>
                  </div>

                  <span className="shrink-0 text-sm font-semibold text-[#82181a]">
                    ${latestProduct.price}
                  </span>
                </div>
              </Link>
            )}

            {/* =================================================
                SPARKLE LEFT
            ================================================= */}

            <div
              className="
                absolute
                left-[12%]
                top-[19%]
                z-20
                text-3xl
                text-[#82181a]
                animate-bounce
              "
            >
              ✦
            </div>

            {/* =================================================
                SPARKLE RIGHT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[23%]
                right-[6%]
                z-20
                text-xl
                text-[#82181a]
                animate-pulse
              "
            >
              ✦
            </div>

            {/* =================================================
                VERTICAL TEXT
            ================================================= */}

            <div
              className="
                absolute
                bottom-[18%]
                right-[-12px]
                z-20
                origin-right
                rotate-90
                text-[10px]
                tracking-[0.35em]
                text-[#8e7973]
              "
            >
              WEARIFY COLLECTION
            </div>
          </div>
        </div>

        {/* =====================================================
            SCROLL INDICATOR
        ===================================================== */}

        <div
          className="
            absolute
            bottom-7
            left-1/2
            z-20
            flex
            -translate-x-1/2
            flex-col
            items-center
            gap-y-2
            text-[#8e7973]
          "
        >
          <span className="text-[10px] tracking-[0.25em]">SCROLL DOWN</span>

          <FiChevronDown className="animate-bounce" />
        </div>
      </section>

      {/* =========================================================
          BOTTOM CTA
      ========================================================= */}

      <section className="px-6 pb-16 sm:px-8 lg:px-14">
        <div
          className="
            mx-auto
            flex
            max-w-[1500px]
            flex-col
            items-center
            justify-between
            gap-7
            rounded-3xl
            bg-[#82181a]
            px-8
            py-10
            text-white
            md:flex-row
            lg:px-14
          "
        >
          <div>
            <p className="text-sm tracking-widest text-white/60">
              YOUR STYLE. YOUR STORY.
            </p>

            <h2 className="mt-2 text-3xl font-bold lg:text-4xl">
              Ready to wear something different?
            </h2>
          </div>

          <Link
            href="/products"
            className="
              flex
              shrink-0
              items-center
              gap-x-3
              rounded-full
              bg-white
              px-7
              py-3.5
              font-semibold
              text-[#82181a]
              transition
              hover:bg-[#f4ece4]
            "
          >
            Explore Products
            <FiArrowRight />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Home;

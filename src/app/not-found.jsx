import "./globals.css";
import Link from "next/link";
import { FiArrowLeft } from "react-icons/fi";
import { LuShirt } from "react-icons/lu";

const NotFound = () => {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-[#FDF8F6] px-6 text-[#181313]">
      <div className="relative mb-6">
        <svg
          width="260"
          height="140"
          viewBox="0 0 260 140"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <text
            x="50%"
            y="55%"
            textAnchor="middle"
            dominantBaseline="middle"
            fontSize="110"
            fontWeight="900"
            fill="#eadfd7"
          >
            404
          </text>
          <path
            d="M20 120 Q70 100 130 120 T240 115"
            stroke="#82181a"
            strokeWidth="2"
            strokeDasharray="6 6"
            strokeLinecap="round"
            fill="none"
          />
        </svg>
      </div>

      <h1 className="text-2xl font-bold sm:text-3xl text-red-900">
        Oops! Page not found
      </h1>

      <p className="mt-3 max-w-md text-center text-sm leading-6 text-[#8e7973] sm:text-base">
        We couldn&apos;t find the page you were looking for. It may have been
        moved, renamed, or never existed.
      </p>

      <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
        <Link
          href="/"
          className="group flex items-center gap-x-3 rounded-full bg-[#82181a] px-7 py-3.5 font-medium text-white shadow-lg shadow-[#82181a]/20 transition-all duration-300 hover:scale-[1.03] hover:bg-[#681416]"
        >
          <FiArrowLeft
            size={18}
            className="transition group-hover:-translate-x-1"
          />
          Back to Home
        </Link>

        <Link
          href="/products"
          className="flex items-center gap-x-3 rounded-full border border-[#82181a] px-7 py-3.5 font-medium text-[#82181a] transition hover:bg-[#82181a] hover:text-white"
        >
          <LuShirt size={18} />
          Browse Products
        </Link>
      </div>
    </main>
  );
};

export default NotFound;

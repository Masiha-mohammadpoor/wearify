"use client";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-[#f4ece4]">
      <div className="flex flex-col items-center">

        {/* T-Shirt */}
        <div className="relative h-32 w-32">
          <svg
            viewBox="0 0 120 120"
            className="h-full w-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M38 25L15 40L25 58L37 50V95H83V50L95 58L105 40L82 25C75 32 45 32 38 25Z"
              stroke="#82181a"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="shirt-outline"
            />
          </svg>

          {/* Red Circles */}
          <span className="color-dot dot-1" />
          <span className="color-dot dot-2" />
          <span className="color-dot dot-3" />
          <span className="color-dot dot-4" />
        </div>

        {/* Wearify */}
        <div className="mt-1">
          <h1
            className="wearify-text"
            style={{ opacity: 0, transform: "translateY(10px)" }}
          >
            wearify
          </h1>
        </div>

        {/* Progress Bar */}
        <div className="mt-5 h-[4px] w-40 overflow-hidden rounded-full bg-[#82181a]/10">
          <div className="progress-bar h-full w-1/2 rounded-full bg-[#82181a]" />
        </div>
      </div>

      <style jsx>{`
        /* =========================
           T-SHIRT
        ========================= */

        .shirt-outline {
          stroke-dasharray: 420;
          stroke-dashoffset: 420;
          animation: drawShirt 2s ease-in-out infinite;
        }

        @keyframes drawShirt {
          0% {
            stroke-dashoffset: 420;
          }

          45% {
            stroke-dashoffset: 0;
          }

          70% {
            stroke-dashoffset: 0;
          }

          100% {
            stroke-dashoffset: -420;
          }
        }

        /* =========================
           RED CIRCLES
        ========================= */

        .color-dot {
          position: absolute;
          width: 8px;
          height: 8px;
          border-radius: 50%;
          background: #82181a;
          animation: floatDot 1.8s ease-in-out infinite;
        }

        .dot-1 {
          top: 15px;
          left: 5px;
          animation-delay: 0s;
        }

        .dot-2 {
          top: 35px;
          right: 0;
          animation-delay: 0.3s;
        }

        .dot-3 {
          bottom: 20px;
          left: 8px;
          animation-delay: 0.6s;
        }

        .dot-4 {
          bottom: 8px;
          right: 12px;
          animation-delay: 0.9s;
        }

        @keyframes floatDot {
          0%,
          100% {
            transform: translateY(0) scale(1);
            opacity: 0.5;
          }

          50% {
            transform: translateY(-8px) scale(1.25);
            opacity: 1;
          }
        }

        /* =========================
           WEARIFY
        ========================= */

        .wearify-text {
          margin: 0;
          color: #82181a;
          font-size: 28px;
          font-weight: 700;
          letter-spacing: 0.18em;

          opacity: 0;
          transform: translateY(10px);

          animation: wearifyAppear 2s ease-in-out infinite;
        }

        @keyframes wearifyAppear {
          0% {
            opacity: 0;
            transform: translateY(10px);
          }

          25% {
            opacity: 0;
            transform: translateY(10px);
          }

          45% {
            opacity: 1;
            transform: translateY(0);
          }

          75% {
            opacity: 1;
            transform: translateY(0);
          }

          100% {
            opacity: 0;
            transform: translateY(-5px);
          }
        }

        /* =========================
           PROGRESS BAR
        ========================= */

        .progress-bar {
          animation: progress 1.5s ease-in-out infinite;
        }

        @keyframes progress {
          0% {
            transform: translateX(-100%);
          }

          50% {
            transform: translateX(100%);
          }

          100% {
            transform: translateX(250%);
          }
        }
      `}</style>
    </div>
  );
}
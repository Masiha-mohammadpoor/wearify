import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Privacy Policy | Wearify",
  description:
    "How Wearify collects, uses, and protects your personal information.",
};

const PrivacyPage = () => {
  return (
    <main className="min-h-screen bg-[#FDF8F6] text-[#181313] overflow-x-hidden">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="mx-auto max-w-275 px-6 pt-20 pb-10 sm:px-8 lg:px-14">
        <div className="mb-6 flex items-center gap-x-3">
          <span className="h-px w-8 bg-red-900" />
          <span className="text-xs font-semibold tracking-[0.3em] text-red-900">
            LEGAL
          </span>
        </div>

        <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Privacy
          <span className="text-red-900"> Policy</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-stone-500 sm:text-lg">
          Last updated: October 9, 2026
        </p>
      </section>

      {/* =========================================================
          CONTENT
      ========================================================= */}
      <section className="mx-auto max-w-275 px-6 pb-20 sm:px-8 lg:px-14">
        <div className="rounded-3xl p-8 sm:p-12">
          <div className="flex flex-col gap-y-10 text-[#181313]">
            {/* 1. Introduction */}
            <article>
              <h2 className="text-xl font-semibold mb-3">1. Introduction</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                At Wearify, we respect your privacy and are committed to
                protecting your personal information. This Privacy Policy
                explains what data we collect, how we use it, and the choices
                you have regarding your information.
              </p>
            </article>

            {/* 2. Information We Collect */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                2. Information We Collect
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                When you place an order or create an account, we collect the
                following information:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm leading-7 text-stone-500 sm:text-base flex flex-col gap-y-1">
                <li>Full name</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Shipping address (including postal code and country)</li>
                <li>Order history</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-stone-500 sm:text-base">
                We do not store your payment card details. All payment
                information is processed securely by our payment provider.
              </p>
            </article>

            {/* 3. How We Use Your Information */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                3. How We Use Your Information
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                Your information is used strictly for the following purposes:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm leading-7 text-stone-500 sm:text-base flex flex-col gap-y-1">
                <li>Processing and fulfilling your orders</li>
                <li>Communicating with you about your order status</li>
                <li>Responding to customer support inquiries</li>
                <li>
                  Sending occasional updates about new products or promotions
                  (only if you opt in)
                </li>
                <li>Complying with legal obligations</li>
              </ul>
            </article>

            {/* 4. Sharing Your Information */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                4. Sharing Your Information
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                We share your information only with trusted third parties
                necessary to fulfill your order:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm leading-7 text-stone-500 sm:text-base flex flex-col gap-y-1">
                <li>
                  Our fulfillment partners, who produce and ship your order
                </li>
                <li>Shipping carriers, who deliver your package</li>
                <li>Payment processors, who handle transactions securely</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-stone-500 sm:text-base">
                We never sell or rent your personal data to third parties.
              </p>
            </article>

            {/* 5. Data Security */}
            <article>
              <h2 className="text-xl font-semibold mb-3">5. Data Security</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                We take reasonable measures to protect your personal information
                from unauthorized access, alteration, or disclosure. All data is
                transmitted over encrypted connections (HTTPS), and access to
                your information is restricted to authorized personnel only.
              </p>
            </article>

            {/* 6. Your Rights */}
            <article>
              <h2 className="text-xl font-semibold mb-3">6. Your Rights</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                Depending on your location, you may have the right to:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm leading-7 text-stone-500 sm:text-base flex flex-col gap-y-1">
                <li>Access the personal data we hold about you</li>
                <li>Request correction of inaccurate data</li>
                <li>Request deletion of your data</li>
                <li>Object to or restrict certain processing activities</li>
                <li>Withdraw consent at any time</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-stone-500 sm:text-base">
                To exercise any of these rights, please contact us using the
                email below.
              </p>
            </article>

            {/* 7. Cookies */}
            <article>
              <h2 className="text-xl font-semibold mb-3">7. Cookies</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                We use essential cookies to keep you logged in and to remember
                your cart. We do not use cookies for advertising or tracking
                purposes. You can disable cookies in your browser settings,
                though this may affect certain features of our website.
              </p>
            </article>

            {/* 8. Data Retention */}
            <article>
              <h2 className="text-xl font-semibold mb-3">8. Data Retention</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                We retain your personal data only for as long as necessary to
                fulfill the purposes described in this policy, or as required by
                law. Order records are typically kept for a minimum of 5 years
                for accounting and legal compliance.
              </p>
            </article>

            {/* 9. Changes to This Policy */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                9. Changes to This Policy
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                We may update this Privacy Policy from time to time. Any changes
                will be posted on this page with an updated revision date. We
                encourage you to review this page periodically.
              </p>
            </article>

            {/* 10. Contact */}
            <article>
              <h2 className="text-xl font-semibold mb-3">10. Contact</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                For any questions or concerns about this Privacy Policy or how
                we handle your data, please contact us at{" "}
                <Link
                  href="mailto:wearifycollection.support@gmail.com"
                  className="text-[#82181a] underline"
                  target="_blank"
                >
                  wearifycollection.support@gmail.com
                </Link>
                .
              </p>
            </article>
          </div>
        </div>

        {/* =========================================================
            LINK TO OTHER POLICIES
        ========================================================= */}
        <div className="mt-10 flex flex-wrap gap-4">
          <Link
            href="/terms"
            className="group flex items-center gap-x-3 rounded-full border-2 border-red-900 px-6 py-3 font-medium text-red-900 transition hover:bg-red-900 hover:text-white"
          >
            Terms of Service
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/refund"
            className="group flex items-center gap-x-3 rounded-full border-2 border-red-900 px-6 py-3 font-medium text-red-900 transition hover:bg-red-900 hover:text-white"
          >
            Refund Policy
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default PrivacyPage;

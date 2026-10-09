import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Terms of Service | Wearify",
  description: "Terms and conditions for using Wearify's services.",
};

const TermsPage = () => {
  return (
    <main className="min-h-screen bg-[#FDF8F6] text-[#181313] overflow-x-hidden">
      {/* =========================================================
          HEADER
      ========================================================= */}
      <section className="mx-auto max-w-275 px-6 pt-20 pb-10 sm:px-8 lg:px-14">
        <div className="mb-6 flex items-center gap-x-3">
          <span className="h-px w-8 bg-[#82181a]" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
            LEGAL
          </span>
        </div>

        <h1 className="max-w-2xl text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Terms of
          <span className="text-[#82181a]"> Service</span>
        </h1>

        <p className="mt-6 max-w-xl text-base leading-7 text-[#8e7973] sm:text-lg">
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
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                Welcome to Wearify. These Terms of Service ("Terms") govern your
                access to and use of our website and services. By accessing or
                using Wearify, you agree to be bound by these Terms. If you do
                not agree, please do not use our services.
              </p>
            </article>

            {/* 2. Our Services */}
            <article>
              <h2 className="text-xl font-semibold mb-3">2. Our Services</h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                Wearify is a print-on-demand store. All products sold on our
                website are produced and shipped by our global fulfillment
                partners after an order is placed. We do not hold physical
                inventory; every item is printed specifically for you when you
                order it.
              </p>
            </article>

            {/* 3. Orders and Pricing */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                3. Orders and Pricing
              </h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                All prices are listed in Euros (EUR) and include applicable
                taxes where required by law. We reserve the right to change
                prices at any time without prior notice. Once an order is
                placed, you will receive an email confirmation with the details
                of your purchase.
              </p>
            </article>

            {/* 4. Production and Shipping */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                4. Production and Shipping
              </h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                Production typically takes 2–5 business days. Shipping times
                vary depending on your location and the shipping method selected
                at checkout. Delivery estimates are provided as a guide only and
                are not guaranteed. Wearify is not responsible for delays caused
                by customs, postal services, or other factors outside of our
                control.
              </p>
            </article>

            {/* 5. Customs and Import Duties */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                5. Customs and Import Duties
              </h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                International orders may be subject to customs fees, import
                duties, or taxes levied by your local authorities. These charges
                are the sole responsibility of the customer. Wearify has no
                control over these fees and cannot predict their amount.
              </p>
            </article>

            {/* 6. Intellectual Property */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                6. Intellectual Property
              </h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                All designs, images, text, and other content on Wearify are the
                property of Wearify or its licensors and are protected by
                copyright laws. You may not reproduce, distribute, or use our
                content without our written permission.
              </p>
            </article>

            {/* 7. User Conduct */}
            <article>
              <h2 className="text-xl font-semibold mb-3">7. User Conduct</h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                You agree not to misuse our website or services. This includes,
                but is not limited to, submitting false information, attempting
                to gain unauthorized access to our systems, or using our
                services for any unlawful purpose.
              </p>
            </article>

            {/* 8. Limitation of Liability */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                8. Limitation of Liability
              </h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                Wearify shall not be liable for any indirect, incidental,
                special, or consequential damages arising from the use of our
                services, including but not limited to loss of profits, data, or
                goodwill.
              </p>
            </article>

            {/* 9. Changes to These Terms */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                9. Changes to These Terms
              </h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                We reserve the right to update or modify these Terms at any
                time. Changes will be posted on this page with an updated
                revision date. Your continued use of our services after changes
                are posted constitutes your acceptance of the revised Terms.
              </p>
            </article>

            {/* 10. Contact */}
            <article>
              <h2 className="text-xl font-semibold mb-3">10. Contact</h2>
              <p className="text-sm leading-7 text-[#8e7973] sm:text-base">
                For questions about these Terms, please contact us at{" "}
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
            href="/privacy"
            className="group flex items-center gap-x-3 rounded-full border-2 border-[#82181a] px-6 py-3 font-medium text-[#82181a] transition hover:bg-[#82181a] hover:text-white"
          >
            Privacy Policy
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>

          <Link
            href="/refund"
            className="group flex items-center gap-x-3 rounded-full border-2 border-[#82181a] px-6 py-3 font-medium text-[#82181a] transition hover:bg-[#82181a] hover:text-white"
          >
            Refund Policy
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default TermsPage;

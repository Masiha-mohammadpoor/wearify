import Link from "next/link";
import { FiArrowRight } from "react-icons/fi";

export const metadata = {
  title: "Return & Refund Policy | Wearify",
  description: "Return and refund policy for Wearify orders.",
};

const RefundPage = () => {
  return (
    <main className="min-h-screen bg-[#FDF8F6] text-[#181313]">
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

        <h1 className="text-4xl font-black leading-[1.05] tracking-[-0.03em] sm:text-5xl">
          Return &<span className="text-red-900"> Refund Policy</span>
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
            {/* 1. Overview */}
            <article>
              <h2 className="text-xl font-semibold mb-3">1. Overview</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                Every item at Wearify is made to order. Because each product is
                printed specifically for you after your order is placed, we do
                not accept returns or exchanges for reasons such as a change of
                mind or incorrect size selection. We strongly recommend checking
                our sizing charts carefully before ordering.
              </p>
            </article>

            {/* 2. Misprinted, Damaged, or Defective Items */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                2. Misprinted, Damaged, or Defective Items
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                If you receive a product that is misprinted, damaged, or
                defective, please contact us within <strong>30 days</strong> of
                receiving your order. Claims submitted within this window are
                fully covered at our expense — you will not pay for the
                replacement or its shipping.
              </p>
              <p className="mt-3 text-sm leading-7 text-stone-500 sm:text-base">
                To submit a claim, contact us at{" "}
                <Link
                  href="mailto:wearifycollection.support@gmail.com"
                  className="text-[#82181a] underline"
                  target="_blank"
                >
                  wearifycollection.support@gmail.com
                </Link>{" "}
                 with:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm leading-7 text-stone-500 sm:text-base flex flex-col gap-y-1">
                <li>Your order number</li>
                <li>A brief description of the issue</li>
                <li>Clear photos showing the problem</li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-stone-500 sm:text-base">
                You do not need to return the item to us. Once we verify the
                issue, we will arrange a replacement at no cost to you.
              </p>
            </article>

            {/* 3. Lost in Transit */}
            <article>
              <h2 className="text-xl font-semibold mb-3">3. Lost in Transit</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                If your package is confirmed lost in transit, please contact us
                within <strong>30 days</strong> of the estimated delivery date.
                We will send a replacement at no additional cost.
              </p>
            </article>

            {/* 4. Wrong Address */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                4. Wrong or Insufficient Address
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                If you provide an address that the courier deems insufficient or
                incorrect, the shipment will be returned to our fulfillment
                facility. In this case, you will be responsible for the cost of
                reshipping the order to a corrected address.
              </p>
            </article>

            {/* 5. Unclaimed Shipments */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                5. Unclaimed Shipments
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                If a shipment goes unclaimed and is returned to our fulfillment
                facility, you will be responsible for the cost of reshipping.
                Orders that remain unclaimed for 30 days will be donated to
                charity without a refund.
              </p>
            </article>

            {/* 6. Returns and Size Exchanges */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                6. Returns and Size Exchanges
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                We do not offer returns or size exchanges for orders where the
                wrong size was selected by the customer. If you wish to receive
                a different size, you will need to place a new order. This
                policy does not apply to customers residing in Brazil, who have
                specific consumer rights under local law.
              </p>
            </article>

            {/* 7. EU Consumers — Right of Withdrawal */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                7. EU Consumers — Right of Withdrawal
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                In accordance with Article 16(c) and (e) of Directive 2011/83/EU
                on consumer rights, the right of withdrawal does not apply to:
              </p>
              <ul className="mt-3 list-disc pl-6 text-sm leading-7 text-stone-500 sm:text-base flex flex-col gap-y-1">
                <li>
                  Goods made to the consumer&apos;s specifications or clearly
                  personalized
                </li>
                <li>
                  Sealed goods that were unsealed after delivery and are
                  therefore unsuitable for return due to health or hygiene
                  reasons
                </li>
              </ul>
              <p className="mt-3 text-sm leading-7 text-stone-500 sm:text-base">
                As all Wearify products are custom-printed, they fall under the
                first category.
              </p>
            </article>

            {/* 8. How to Submit a Claim */}
            <article>
              <h2 className="text-xl font-semibold mb-3">
                8. How to Submit a Claim
              </h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                All claims must be submitted by email to{" "}
                <Link
                  href="mailto:wearifycollection.support@gmail.com"
                  className="text-[#82181a] underline"
                  target="_blank"
                >
                  wearifycollection.support@gmail.com
                </Link>{" "}
                . Please include your order number, a description of the issue,
                and photos where applicable. We aim to respond to all claims
                within 2 business days.
              </p>
            </article>

            {/* 9. Contact */}
            <article>
              <h2 className="text-xl font-semibold mb-3">9. Contact</h2>
              <p className="text-sm leading-7 text-stone-500 sm:text-base">
                For any questions about this policy, please contact us at{" "}
                <Link
                  href="mailto:wearifycollection.support@gmail.com"
                  className="text-[#82181a] underline"
                  target="_blank"
                >
                  wearifycollection.support@gmail.com
                </Link>{" "}
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
            href="/privacy"
            className="group flex items-center gap-x-3 rounded-full border-2 border-red-900 px-6 py-3 font-medium text-red-900 transition hover:bg-red-900 hover:text-white"
          >
            Privacy Policy
            <FiArrowRight className="transition group-hover:translate-x-1" />
          </Link>
        </div>
      </section>
    </main>
  );
};

export default RefundPage;

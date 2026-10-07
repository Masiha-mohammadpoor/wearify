import {
  FiMail,
  FiMapPin,
  FiPhone,
  FiHeart,
  FiFeather,
  FiGlobe,
} from "react-icons/fi";
import ContactForm from "@/components/ContactForm";

const values = [
  {
    icon: <FiHeart size={22} />,
    title: "Made with care",
    text: "Every piece is printed on demand, so nothing is wasted.",
  },
  {
    icon: <FiGlobe size={22} />,
    title: "Shipped worldwide",
    text: "We deliver to most countries across Europe, North America, Asia, and beyond.",
  },
  {
    icon: <FiFeather size={22} />,
    title: "Designs you'll actually wear",
    text: "We put real effort into every design — no lazy copies, no generic filler. Just stuff we'd wear ourselves.",
  },
];
const AboutContactPage = () => {
  return (
    <main className="min-h-screen bg-[#FDF8F6] overflow-x-hidden">
      {/* =========================================================
          ABOUT
      ========================================================= */}
      <section className="mx-auto max-w-275 px-6 pt-20 pb-16 sm:px-8 lg:px-14">
        <div className="mb-6 flex items-center gap-x-3">
          <span className="h-px w-8 bg-[#82181a]" />
          <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
            ABOUT WEARIFY
          </span>
        </div>

        <h1 className="text-4xl font-black leading-15 tracking-[-0.03em] sm:text-5xl">
          Each design has its own story
          <br />
          <span className="text-red-900">Wear a story, not just a shirt</span>
        </h1>
        <p className="mt-6 max-w-xl text-base leading-7 text-[#8e7973] sm:text-lg">
          Wearify started in a small room with a laptop and a stubborn idea:
          that you shouldn&apos;t have to choose between clothes that look good
          and clothes that mean something. Every design here was made by us, for
          people who actually care what they put on.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-3">
          {values.map((v) => (
            <div
              key={v.title}
              className="rounded-2xl bg-[#f4ece4] p-6 transition hover:-translate-y-1"
            >
              <div className="text-[#82181a]">{v.icon}</div>
              <h3 className="mt-4 font-semibold">{v.title}</h3>
              <p className="mt-2 text-sm leading-6 text-[#8e7973]">{v.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* =========================================================
          CONTACT
      ========================================================= */}
      <section className="mx-auto max-w-275 px-6 pb-20 sm:px-8 lg:px-14">
        <div className="rounded-3xl bg-white/60 p-8 sm:p-12">
          <div className="mb-10 flex items-center gap-x-3">
            <span className="h-px w-8 bg-[#82181a]" />
            <span className="text-xs font-semibold tracking-[0.3em] text-[#82181a]">
              GET IN TOUCH
            </span>
          </div>

          <div className="grid gap-12 lg:grid-cols-2">
            {/* left: info */}
            <div>
              <h2 className="text-3xl font-black leading-tight sm:text-4xl">
                Let&apos;s talk
              </h2>
              <p className="mt-4 max-w-sm text-sm leading-6 text-[#8e7973] sm:text-base">
                Questions about an order, a design, or just want to say hi?
                We&apos;d love to hear from you.
              </p>

              <div className="mt-10 flex flex-col gap-y-5">
                <div className="flex items-center gap-x-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4ece4] text-[#82181a]">
                    <FiMail size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-[#8e7973]">Email</p>
                    <p className="text-sm font-medium">hello@wearify.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4ece4] text-[#82181a]">
                    <FiPhone size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-[#8e7973]">Phone</p>
                    <p className="text-sm font-medium">+98 911 000 0000</p>
                  </div>
                </div>

                <div className="flex items-center gap-x-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#f4ece4] text-[#82181a]">
                    <FiMapPin size={18} />
                  </span>
                  <div>
                    <p className="text-xs text-[#8e7973]">Based in</p>
                    <p className="text-sm font-medium">Sari, Iran</p>
                  </div>
                </div>
              </div>
            </div>

            {/* right: form */}
            <ContactForm />
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutContactPage;

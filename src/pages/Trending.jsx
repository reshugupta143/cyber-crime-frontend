import { useNavigate } from "react-router-dom";

const scams = [
  {
    title: "Fake Job Scams",
    slug: "fake-job-scams",
    description:
      "Scammers create fake job offers to collect money or personal information from job seekers.",
  },
  {
    title: "UPI Payment Scams",
    slug: "upi-payment-scams",
    description:
      "Scammers use fake payment requests or misleading UPI messages to trick people into losing money.",
  },
  {
    title: "OTP Fraud",
    slug: "otp-fraud",
    description:
      "Scammers try to convince users to share OTPs that can be used to access or verify transactions.",
  },
  {
    title: "Fake Customer Care Scams",
    slug: "fake-customer-care-scams",
    description:
      "Scammers pretend to be customer support representatives and ask for sensitive information or payments.",
  },
  {
    title: "Investment Scams",
    slug: "investment-scams",
    description:
      "Fraudsters promote fake investment opportunities and use attractive returns to gain people's trust.",
  },
  {
    title: "Social Media Scams",
    slug: "social-media-scams",
    description:
      "Scammers use social media profiles, messages and fake offers to target users.",
  },
];

function Trending() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-red-600 via-orange-600 to-rose-700">

        {/* Background Decorations */}
        <div className="absolute -left-24 -top-24 h-72 w-72 animate-pulse rounded-full bg-yellow-300/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-20 h-80 w-80 animate-pulse rounded-full bg-red-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          {/* Badge */}
          <div className="mb-6 inline-flex animate-[fadeDown_0.7s_ease-out_both] items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-300 opacity-75"></span>

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-yellow-300"></span>
            </span>

            <span className="text-sm font-medium text-white sm:text-base">
              Latest Cyber Threats
            </span>

          </div>

          {/* Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl shadow-xl backdrop-blur-md sm:h-24 sm:w-24 sm:text-5xl">
            🚨
          </div>

          {/* Heading */}
          <h1 className="animate-[fadeUp_0.8s_ease-out_both] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

            <span className="block">
              Trending
            </span>

            <span className="mt-2 block bg-gradient-to-r from-yellow-200 via-white to-orange-200 bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradientMove_5s_ease-in-out_infinite]">
              Cyber Scams
            </span>

          </h1>

          {/* Line */}
          <div className="mx-auto my-7 h-1 w-20 animate-[expandLine_1s_ease-out_0.5s_both] rounded-full bg-white"></div>

          {/* Description */}
          <p className="mx-auto max-w-2xl animate-[fadeUp_1s_ease-out_0.2s_both] text-sm leading-7 text-orange-100 sm:text-base sm:leading-8 lg:text-lg">
            Stay aware of common scams that target internet users and
            learn how to recognize suspicious online activities.
          </p>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-7xl">

          {/* Section Heading */}
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-red-100 text-2xl shadow-sm">
                ⚠️
              </div>

              <div className="animate-[fadeUp_0.8s_ease-out_both]">

                <p className="text-sm font-semibold uppercase tracking-wider text-red-600">
                  Be Alert
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">
                  Common Online Scams
                </h2>

                <p className="mt-1.5 text-sm text-gray-500 sm:text-base">
                  Click any scam to learn more about it.
                </p>

              </div>

            </div>

            {/* Count */}
            <div className="w-fit rounded-full border border-red-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm">

              <span className="font-bold text-red-600">
                {scams.length}
              </span>{" "}
              Scams Listed

            </div>

          </div>


          {/* ================= SCAM CARDS ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:grid-cols-3 lg:gap-8">

            {scams.map((scam, index) => (

              <div
                key={scam.slug}
                onClick={() => navigate(`/trending/${scam.slug}`)}
                className="
                  group
                  cursor-pointer
                  animate-[cardReveal_0.7s_ease-out_both]
                  overflow-hidden
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-2
                  hover:border-red-200
                  hover:shadow-2xl
                "
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >

                <div className="p-6 sm:p-7">

                  {/* Top */}
                  <div className="mb-6 flex items-center justify-between">

                    {/* Clickable Alert Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-red-50 to-orange-50 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-red-100 group-hover:to-orange-100">
                      🚨
                    </div>

                    {/* Number */}
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-bold tracking-wider text-gray-400 transition-colors duration-300 group-hover:bg-red-50 group-hover:text-red-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* Title */}
                  <h2 className="text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-red-600">
                    {scam.title}
                  </h2>


                  {/* Description */}
                  <p className="mt-3 min-h-[72px] text-sm leading-7 text-gray-500">
                    {scam.description}
                  </p>


                  {/* Divider */}
                  <div className="my-6 h-px bg-gray-100"></div>


                  {/* Bottom */}
                  <div className="flex items-center justify-between">

                    <span className="text-sm font-medium text-gray-400">
                      Learn More
                    </span>

                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-red-50 text-red-500 transition-all duration-300 group-hover:translate-x-1 group-hover:bg-red-600 group-hover:text-white">
                      →
                    </span>

                  </div>

                </div>

              </div>

            ))}

          </div>


          {/* ================= SAFETY INFO ================= */}
          <div className="mt-12 animate-[fadeUp_1s_ease-out_both] overflow-hidden rounded-2xl border border-orange-100 bg-gradient-to-r from-orange-50 via-white to-red-50 shadow-sm sm:mt-14">

            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7 lg:p-8">

              <div className="flex h-14 w-14 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-orange-100 text-2xl">
                💡
              </div>

              <div>

                <h3 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl">
                  Think Before You Trust
                </h3>

                <p className="text-sm leading-7 text-gray-500 sm:text-base">
                  Never share OTPs, passwords, banking details or other
                  sensitive information with unknown people or suspicious
                  websites. Always verify before making online payments.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Trending;
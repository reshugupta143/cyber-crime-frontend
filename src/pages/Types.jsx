import { useNavigate } from "react-router-dom";

const crimes = [
  {
    title: "Phishing",
    slug: "phishing",
    description:
      "Attackers use fake emails, messages or websites to steal sensitive information.",
    icon: "🎣",
  },
  {
    title: "Identity Theft",
    slug: "identity-theft",
    description:
      "Someone illegally uses another person's personal information.",
    icon: "🪪",
  },
  {
    title: "Online Fraud",
    slug: "online-fraud",
    description:
      "Criminals use deceptive methods to steal money or information online.",
    icon: "💳",
  },
  {
    title: "Cyber Bullying",
    slug: "cyber-bullying",
    description:
      "Harassing or threatening someone using digital platforms.",
    icon: "💬",
  },
  {
    title: "Malware",
    slug: "malware",
    description:
      "Malicious software designed to damage systems or steal information.",
    icon: "🦠",
  },
  {
    title: "Password Attacks",
    slug: "password-attacks",
    description:
      "Attackers attempt to gain unauthorized access by targeting passwords.",
    icon: "🔐",
  },
];

function Types() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700">

        {/* Background circles */}
        <div className="absolute -left-24 -top-24 h-72 w-72 animate-pulse rounded-full bg-cyan-400/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-20 h-80 w-80 animate-pulse rounded-full bg-purple-300/10 blur-3xl"></div>

        <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-400/10 blur-3xl"></div>


        <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            {/* Badge */}
            <div className="mb-6 inline-flex animate-[fadeDown_0.7s_ease-out_both] items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">

              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-300 opacity-75"></span>

                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-300"></span>
              </span>

              <span className="text-sm font-medium text-white sm:text-base">
                Cyber Crime Awareness
              </span>

            </div>


            {/* Shield */}
            <div className="mx-auto mb-6 flex h-20 w-20 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl shadow-xl backdrop-blur-md sm:h-24 sm:w-24 sm:text-5xl">
              🛡️
            </div>


            {/* Heading */}
            <h1 className="animate-[fadeUp_0.9s_ease-out_both] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

              <span className="block">
                Types of
              </span>

              <span className="mt-2 block bg-gradient-to-r from-cyan-200 via-white to-purple-200 bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradientMove_5s_ease-in-out_infinite]">
                Cyber Crimes
              </span>

            </h1>


            {/* Line */}
            <div className="mx-auto my-7 h-1 w-20 animate-[expandLine_1s_ease-out_0.5s_both] rounded-full bg-gradient-to-r from-cyan-300 to-white"></div>


            {/* Description */}
            <p className="mx-auto max-w-2xl animate-[fadeUp_1s_ease-out_0.3s_both] text-sm leading-7 text-blue-100 sm:text-base sm:leading-8 lg:text-lg">
              Learn about common cyber crimes, understand their impact,
              recognize warning signs, and discover ways to stay safe online.
            </p>

          </div>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-7xl">


          {/* ================= SECTION HEADING ================= */}
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-blue-100 text-2xl shadow-sm">
                🛡️
              </div>


              {/* Text */}
              <div className="animate-[fadeUp_0.8s_ease-out_both]">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Explore & Learn
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">
                  Common Cyber Crimes
                </h2>

                <p className="mt-1.5 text-sm text-gray-500 sm:text-base">
                  Select any topic to learn more about it.
                </p>

              </div>

            </div>


            {/* Count */}
            <div className="w-fit rounded-full border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm">
              <span className="font-bold text-blue-600">
                {crimes.length}
              </span>{" "}
              Topics Available
            </div>

          </div>


          {/* ================= CARDS ================= */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 xl:grid-cols-3 xl:gap-8">

            {crimes.map((crime, index) => (

              <div
                key={crime.slug}
                className="
                  group
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
                  hover:border-blue-200
                  hover:shadow-2xl
                "
                style={{
                  animationDelay: `${index * 120}ms`,
                }}
              >

                <div className="p-6 sm:p-7">


                  {/* Card Top */}
                  <div className="mb-6 flex items-center justify-between">

                    {/* Icon */}
                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-3xl shadow-sm transition-all duration-300 group-hover:scale-110 group-hover:rotate-3 group-hover:from-blue-100 group-hover:to-indigo-100">
                      {crime.icon}
                    </div>


                    {/* Number */}
                    <span className="rounded-full bg-gray-50 px-3 py-1.5 text-xs font-bold tracking-wider text-gray-400 transition-colors duration-300 group-hover:bg-blue-50 group-hover:text-blue-500">
                      {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>


                  {/* Title */}
                  <h3 className="mb-3 text-xl font-bold text-gray-800 transition-colors duration-300 group-hover:text-blue-600">
                    {crime.title}
                  </h3>


                  {/* Description */}
                  <p className="min-h-[84px] text-sm leading-7 text-gray-500">
                    {crime.description}
                  </p>


                  {/* Divider */}
                  <div className="my-6 h-px bg-gray-100"></div>


                  {/* Button */}
                  <button
                    onClick={() => navigate(`/types/${crime.slug}`)}
                    className="
                      flex
                      w-full
                      items-center
                      justify-center
                      gap-2
                      rounded-xl
                      border
                      border-blue-100
                      bg-blue-50
                      px-4
                      py-3.5
                      font-semibold
                      text-blue-600
                      transition-all
                      duration-300
                      hover:border-blue-600
                      hover:bg-blue-600
                      hover:text-white
                      active:scale-95
                    "
                  >

                    <span>
                      Learn More
                    </span>

                    <span className="text-lg transition-transform duration-300 group-hover:translate-x-1.5">
                      →
                    </span>

                  </button>

                </div>

              </div>

            ))}

          </div>


          {/* ================= BOTTOM INFO ================= */}
          <div className="mt-12 animate-[fadeUp_1s_ease-out_both] overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-r from-blue-50 via-white to-indigo-50 shadow-sm sm:mt-14">

            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7 lg:p-8">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-blue-100 text-2xl">
                💡
              </div>


              {/* Content */}
              <div>

                <h3 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl">
                  Stay Aware, Stay Safe
                </h3>

                <p className="text-sm leading-7 text-gray-500 sm:text-base">
                  Understanding different types of cyber crimes can help you
                  identify suspicious online activities and protect your
                  personal information.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default Types;
const tips = [
  "Use strong and unique passwords.",
  "Never share your OTP or PIN.",
  "Enable two-factor authentication.",
  "Do not click suspicious links.",
  "Verify websites before entering personal information.",
  "Keep your software and applications updated.",
  "Avoid using unknown public Wi-Fi for sensitive transactions.",
  "Never share passwords with anyone.",
];

function SecurityTips() {
  return (
    <div className="min-h-screen w-full overflow-hidden bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 via-teal-600 to-blue-700">

        {/* Background decoration */}
        <div className="absolute -left-24 -top-24 h-72 w-72 animate-pulse rounded-full bg-cyan-300/10 blur-3xl"></div>

        <div className="absolute -bottom-32 -right-20 h-80 w-80 animate-pulse rounded-full bg-green-300/10 blur-3xl"></div>

        <div className="relative mx-auto max-w-7xl px-5 py-20 text-center sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          {/* Badge */}
          <div className="mb-6 inline-flex animate-[fadeDown_0.7s_ease-out_both] items-center gap-3 rounded-full border border-white/20 bg-white/10 px-5 py-2.5 shadow-lg backdrop-blur-md">

            <span className="relative flex h-2.5 w-2.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-200 opacity-75"></span>

              <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-200"></span>
            </span>

            <span className="text-sm font-medium text-white sm:text-base">
              Stay Protected Online
            </span>

          </div>


          {/* Shield Icon */}
          <div className="mx-auto mb-6 flex h-20 w-20 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-3xl border border-white/20 bg-white/10 text-4xl shadow-xl backdrop-blur-md sm:h-24 sm:w-24 sm:text-5xl">
            🛡️
          </div>


          {/* Heading */}
          <h1 className="animate-[fadeUp_0.8s_ease-out_both] text-4xl font-extrabold leading-tight tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">

            <span className="block">
              Security
            </span>

            <span className="mt-2 block bg-gradient-to-r from-green-200 via-white to-cyan-200 bg-[length:200%_auto] bg-clip-text text-transparent animate-[gradientMove_5s_ease-in-out_infinite]">
              Tips
            </span>

          </h1>


          {/* Line */}
          <div className="mx-auto my-7 h-1 w-20 animate-[expandLine_1s_ease-out_0.5s_both] rounded-full bg-white"></div>


          {/* Description */}
          <p className="mx-auto max-w-2xl animate-[fadeUp_1s_ease-out_0.2s_both] text-sm leading-7 text-emerald-100 sm:text-base sm:leading-8 lg:text-lg">
            Follow these simple security practices to protect your accounts,
            personal information and online activities.
          </p>

        </div>
      </section>


      {/* ================= MAIN CONTENT ================= */}
      <main className="px-5 py-14 sm:px-8 sm:py-16 lg:px-12 lg:py-20">

        <div className="mx-auto max-w-6xl">


          {/* Section Heading */}
          <div className="mb-10 flex flex-col gap-5 sm:mb-12 sm:flex-row sm:items-center sm:justify-between">

            <div className="flex items-center gap-4">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-emerald-100 text-2xl shadow-sm">
                🔐
              </div>


              {/* Text */}
              <div className="animate-[fadeUp_0.8s_ease-out_both]">

                <p className="text-sm font-semibold uppercase tracking-wider text-emerald-600">
                  Stay Safe
                </p>

                <h2 className="mt-1 text-2xl font-bold text-gray-800 sm:text-3xl">
                  Essential Security Practices
                </h2>

                <p className="mt-1.5 text-sm text-gray-500 sm:text-base">
                  Simple habits can make your online accounts safer.
                </p>

              </div>

            </div>


            {/* Count */}
            <div className="w-fit rounded-full border border-emerald-100 bg-white px-4 py-2 text-sm font-medium text-gray-500 shadow-sm">

              <span className="font-bold text-emerald-600">
                {tips.length}
              </span>{" "}
              Safety Tips

            </div>

          </div>


          {/* ================= TIPS ================= */}
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 sm:gap-6">

            {tips.map((tip, index) => (

              <div
                key={index}
                className="
                  group
                  animate-[cardReveal_0.7s_ease-out_both]
                  flex
                  items-start
                  gap-4
                  rounded-2xl
                  border
                  border-gray-200
                  bg-white
                  p-5
                  shadow-sm
                  transition-all
                  duration-300
                  hover:-translate-y-1
                  hover:border-emerald-200
                  hover:shadow-xl
                  sm:p-6
                "
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >

                {/* Number + Check */}
                <div className="relative shrink-0">

                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-50 text-lg font-bold text-emerald-600 transition-all duration-300 group-hover:scale-110 group-hover:bg-emerald-100">
                    ✓
                  </div>

                  <span className="absolute -right-2 -top-2 flex h-5 min-w-5 items-center justify-center rounded-full bg-gray-100 px-1 text-[10px] font-bold text-gray-400">
                    {index + 1}
                  </span>

                </div>


                {/* Content */}
                <div className="flex-1">

                  <p className="text-sm font-medium leading-7 text-gray-700 transition-colors duration-300 group-hover:text-gray-900 sm:text-base">
                    {tip}
                  </p>

                  <div className="mt-3 h-1 w-8 rounded-full bg-emerald-100 transition-all duration-300 group-hover:w-14 group-hover:bg-emerald-400"></div>

                </div>


                {/* Arrow */}
                <span className="hidden text-lg text-gray-300 transition-all duration-300 group-hover:translate-x-1 group-hover:text-emerald-500 sm:block">
                  →
                </span>

              </div>

            ))}

          </div>


          {/* ================= BOTTOM INFO ================= */}
          <div className="mt-12 animate-[fadeUp_1s_ease-out_both] overflow-hidden rounded-2xl border border-emerald-100 bg-gradient-to-r from-emerald-50 via-white to-cyan-50 shadow-sm sm:mt-14">

            <div className="flex flex-col gap-5 p-6 sm:flex-row sm:items-center sm:p-7 lg:p-8">

              {/* Icon */}
              <div className="flex h-14 w-14 shrink-0 animate-[float_3s_ease-in-out_infinite] items-center justify-center rounded-2xl bg-emerald-100 text-2xl">
                💡
              </div>


              {/* Content */}
              <div>

                <h3 className="mb-2 text-lg font-bold text-gray-800 sm:text-xl">
                  Security Starts With You
                </h3>

                <p className="text-sm leading-7 text-gray-500 sm:text-base">
                  Small security habits can help protect your personal
                  information and reduce the risk of online attacks.
                  Stay alert and think before you click or share.
                </p>

              </div>

            </div>

          </div>

        </div>

      </main>

    </div>
  );
}

export default SecurityTips;
import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* ================= HERO SECTION ================= */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-700 via-indigo-700 to-purple-700 text-white">

        {/* Background decoration */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl"></div>
        <div className="absolute -bottom-24 -left-24 h-72 w-72 rounded-full bg-blue-300/10 blur-3xl"></div>

        <div className="relative mx-auto flex min-h-[calc(100vh-64px)] max-w-7xl items-center px-5 py-20 sm:px-8 sm:py-24 lg:px-12 lg:py-28">

          <div className="mx-auto max-w-4xl text-center">

            {/* Small heading */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium backdrop-blur-sm sm:text-base">
              <span>🛡️</span>
              <span>Cyber Security Awareness</span>
            </div>

            {/* Main heading */}
          <h1 className="text-4xl font-extrabold leading-[1.05] tracking-[-0.03em] sm:text-5xl md:text-6xl lg:text-7xl">

  <span className="block animate-[textReveal_3s_ease-in-out_infinite]">
    Stay Safe in the
  </span>

  <span
    className="
      mt-3
      block
      bg-gradient-to-r
      from-cyan-200
      via-white
      to-indigo-200
      bg-[length:200%_auto]
      bg-clip-text
      text-transparent
      drop-shadow-[0_0_20px_rgba(103,232,249,0.3)]
      animate-[textReveal_3s_ease-in-out_infinite,colorShift_6s_ease-in-out_infinite]
      sm:mt-4
    "
  >
    Digital World
  </span>

</h1>
            {/* Description */}
            <p className="mx-auto mt-6 max-w-2xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8 md:text-xl">
              Learn about cyber crimes, online scams, security threats
              and simple ways to protect yourself in the digital world.
            </p>

            {/* Buttons */}
            <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">

              <Link
                to="/types"
                className="w-full rounded-xl bg-white px-7 py-3.5 text-center font-semibold text-blue-700 shadow-lg transition duration-200 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-xl active:scale-95 sm:w-auto"
              >
                Explore Cyber Crimes →
              </Link>

              <Link
                to="/security-tips"
                className="w-full rounded-xl border border-white/40 bg-white/10 px-7 py-3.5 text-center font-semibold text-white backdrop-blur-sm transition duration-200 hover:-translate-y-1 hover:bg-white/20 active:scale-95 sm:w-auto"
              >
                Security Tips
              </Link>

            </div>

          </div>
        </div>
      </section>


      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-gray-50 px-5 py-16 sm:px-8 sm:py-20 lg:px-12">

        <div className="mx-auto max-w-7xl">

          {/* Section heading */}
          <div className="mx-auto max-w-2xl text-center">

            <p className="text-sm font-semibold uppercase tracking-wider text-blue-600 sm:text-base">
              Learn & Protect
            </p>

            <h2 className="mt-2 text-3xl font-bold text-gray-800 sm:text-4xl lg:text-5xl">
              What You Can Learn
            </h2>

            <p className="mt-4 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
              Understand common cyber threats and learn simple ways to
              stay safe while using the internet.
            </p>

          </div>


          {/* Feature cards */}
          <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-7 lg:mt-14 lg:grid-cols-4 lg:gap-8">

            {/* Card 1 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-blue-200 hover:shadow-xl sm:p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-50 text-2xl transition duration-300 group-hover:bg-blue-100 group-hover:scale-110">
                🔐
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-800 sm:text-xl">
                Cyber Crime Types
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Learn about phishing, identity theft, online fraud and
                other common cyber crimes.
              </p>

              <Link
                to="/types"
                className="mt-5 inline-block text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                Learn More →
              </Link>

            </div>


            {/* Card 2 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-red-200 hover:shadow-xl sm:p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-red-50 text-2xl transition duration-300 group-hover:bg-red-100 group-hover:scale-110">
                🚨
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-800 sm:text-xl">
                Trending Scams
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Understand common online scams and learn how attackers
                target internet users.
              </p>

              <Link
                to="/trending"
                className="mt-5 inline-block text-sm font-semibold text-red-600 hover:text-red-800"
              >
                Explore Scams →
              </Link>

            </div>


            {/* Card 3 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-green-200 hover:shadow-xl sm:p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-50 text-2xl transition duration-300 group-hover:bg-green-100 group-hover:scale-110">
                🛡️
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-800 sm:text-xl">
                Security Tips
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Follow simple security practices to protect your accounts
                and personal information.
              </p>

              <Link
                to="/security-tips"
                className="mt-5 inline-block text-sm font-semibold text-green-600 hover:text-green-800"
              >
                Stay Protected →
              </Link>

            </div>


            {/* Card 4 */}
            <div className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition duration-300 hover:-translate-y-2 hover:border-purple-200 hover:shadow-xl sm:p-7">

              <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-50 text-2xl transition duration-300 group-hover:bg-purple-100 group-hover:scale-110">
                🧠
              </div>

              <h3 className="mt-5 text-lg font-bold text-gray-800 sm:text-xl">
                Cyber Quiz
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600 sm:text-base sm:leading-7">
                Test your cyber security knowledge through interactive
                quizzes and improve your awareness.
              </p>

              <Link
                to="/quiz"
                className="mt-5 inline-block text-sm font-semibold text-purple-600 hover:text-purple-800"
              >
                Take Quiz →
              </Link>

            </div>

          </div>

        </div>
      </section>


      {/* ================= BOTTOM CTA ================= */}
      <section className="px-5 pb-16 sm:px-8 lg:px-12">

        <div className="mx-auto max-w-6xl overflow-hidden rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 px-6 py-10 text-center text-white shadow-xl sm:px-10 sm:py-14">

          <h2 className="text-2xl font-bold sm:text-3xl lg:text-4xl">
            Your Safety Starts With Awareness
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base sm:leading-7">
            Learn how cyber attacks happen and take simple steps to
            protect yourself online.
          </p>

          <Link
            to="/security-tips"
            className="mt-7 inline-block rounded-xl bg-white px-7 py-3.5 font-semibold text-blue-700 shadow-md transition duration-200 hover:-translate-y-1 hover:bg-blue-50 hover:shadow-lg active:scale-95"
          >
            Start Learning →
          </Link>

        </div>

      </section>

    </div>
  );
}

export default Home;
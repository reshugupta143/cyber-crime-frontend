function About() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 pt-28 pb-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-7xl">

        {/* ================= HERO SECTION ================= */}
        <section className="relative mb-10 overflow-hidden rounded-3xl bg-gradient-to-r from-blue-700 via-indigo-600 to-purple-700 px-6 py-14 text-white shadow-xl sm:px-10 sm:py-20 lg:px-16">

          {/* Background Decorations */}
          <div className="absolute -right-16 -top-16 h-48 w-48 rounded-full bg-white/10 blur-2xl"></div>
          <div className="absolute -bottom-20 -left-16 h-56 w-56 rounded-full bg-cyan-300/10 blur-3xl"></div>

          <div className="relative z-10 max-w-4xl">

            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-sm">
              🛡️ About CyberShield
            </div>

            <h1 className="text-4xl font-extrabold leading-tight sm:text-5xl md:text-6xl">
              Learn. Understand.
              <span className="block text-cyan-200">
                Stay Protected.
              </span>
            </h1>

            <p className="mt-6 max-w-3xl text-base leading-7 text-blue-100 sm:text-lg sm:leading-8">
              CyberShield is a cyber crime awareness portal designed to
              provide simple and useful information about common cyber
              threats, online scams and safe digital practices.
            </p>

          </div>

        </section>


        {/* ================= INTRODUCTION ================= */}
        <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
                Who We Are
              </p>

              <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                What is CyberShield?
              </h2>

              <div className="mt-5 space-y-4 text-gray-600">

                <p className="leading-7">
                  CyberShield is a web-based cyber crime awareness platform
                  created to make cyber security information easier to
                  understand. The platform focuses on common threats that
                  people may encounter while using websites, mobile
                  applications, social media and online services.
                </p>

                <p className="leading-7">
                  Instead of using complicated technical language, CyberShield
                  presents important cyber security concepts in a simple and
                  practical way. The goal is to help visitors recognize
                  suspicious activities and develop safer online habits.
                </p>

              </div>

            </div>

            <div className="rounded-3xl bg-gradient-to-br from-blue-50 to-indigo-100 p-8">

              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-3xl bg-white text-5xl shadow-md">
                🛡️
              </div>

              <h3 className="mt-6 text-center text-2xl font-bold text-gray-800">
                Cyber Awareness
              </h3>

              <p className="mt-3 text-center leading-7 text-gray-600">
                Understanding online threats is an important step toward
                using digital services more safely.
              </p>

            </div>

          </div>

        </section>


        {/* ================= MISSION ================= */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">

          <div className="mb-8 text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Our Purpose
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              Our Mission
            </h2>

            <p className="mx-auto mt-4 max-w-3xl leading-7 text-gray-600">
              CyberShield aims to make basic cyber security awareness
              accessible, understandable and useful for everyday digital
              activities.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-3">

            <div className="rounded-2xl border border-blue-100 bg-blue-50 p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-600 text-2xl">
                🎓
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Educate
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Provide simple explanations of cyber crimes, scams and
                important security concepts.
              </p>

            </div>


            <div className="rounded-2xl border border-indigo-100 bg-indigo-50 p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-2xl">
                🔍
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Create Awareness
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Help visitors identify suspicious links, messages, scams
                and other common online threats.
              </p>

            </div>


            <div className="rounded-2xl border border-purple-100 bg-purple-50 p-6">

              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-purple-600 text-2xl">
                🛡️
              </div>

              <h3 className="text-xl font-bold text-gray-800">
                Promote Safety
              </h3>

              <p className="mt-3 text-sm leading-6 text-gray-600">
                Encourage safer digital habits such as protecting
                passwords and avoiding suspicious online activity.
              </p>

            </div>

          </div>

        </section>


        {/* ================= WHAT WE PROVIDE ================= */}
        <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

          <div className="mb-8">

            <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
              Explore CyberShield
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              What We Provide
            </h2>

            <p className="mt-4 max-w-3xl leading-7 text-gray-600">
              CyberShield brings different types of cyber security
              awareness content together in one place.
            </p>

          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">

            {/* Card 1 */}
            <div className="group rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-blue-300 hover:shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-100 text-3xl transition group-hover:scale-110">
                🚨
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                Cyber Crimes
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Learn about phishing, identity theft, online fraud,
                malware and other common cyber crimes.
              </p>

            </div>


            {/* Card 2 */}
            <div className="group rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-red-100 text-3xl transition group-hover:scale-110">
                📈
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                Trending Scams
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Understand common scam patterns such as fake job offers,
                payment scams and fake customer care scams.
              </p>

            </div>


            {/* Card 3 */}
            <div className="group rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-green-300 hover:shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-green-100 text-3xl transition group-hover:scale-110">
                🔐
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                Security Tips
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Discover practical tips for protecting passwords,
                accounts, personal information and devices.
              </p>

            </div>


            {/* Card 4 */}
            <div className="group rounded-2xl border border-gray-200 p-6 transition duration-300 hover:-translate-y-1 hover:border-purple-300 hover:shadow-lg">

              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl transition group-hover:scale-110">
                🧠
              </div>

              <h3 className="text-lg font-bold text-gray-800">
                Interactive Quiz
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Test your cyber security knowledge through an interactive
                quiz and review the correct answers.
              </p>

            </div>

          </div>

        </section>


        {/* ================= IMPORTANT TOPICS ================= */}
        <section className="mb-8 overflow-hidden rounded-3xl bg-gradient-to-r from-gray-900 via-blue-950 to-indigo-950 p-6 text-white shadow-xl sm:p-8 lg:p-10">

          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">

            <div>

              <p className="text-sm font-bold uppercase tracking-wider text-cyan-300">
                Learn the Basics
              </p>

              <h2 className="mt-2 text-3xl font-extrabold sm:text-4xl">
                Important Cyber Security Topics
              </h2>

              <p className="mt-5 leading-7 text-gray-300">
                Cyber security covers many areas. CyberShield focuses on
                everyday topics that are useful for people using digital
                services and the internet.
              </p>

            </div>

            <div className="grid gap-3 sm:grid-cols-2">

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                🔑 <span className="ml-2 font-semibold">Password Security</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                🎣 <span className="ml-2 font-semibold">Phishing</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                💳 <span className="ml-2 font-semibold">Online Fraud</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                📱 <span className="ml-2 font-semibold">Social Media Safety</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                🦠 <span className="ml-2 font-semibold">Malware</span>
              </div>

              <div className="rounded-xl border border-white/10 bg-white/10 p-4 backdrop-blur-sm">
                🔒 <span className="ml-2 font-semibold">Account Protection</span>
              </div>

            </div>

          </div>

        </section>


        {/* ================= WHY AWARENESS MATTERS ================= */}
        <section className="mb-8 rounded-3xl bg-white p-6 shadow-lg sm:p-8 lg:p-10">

          <div className="grid gap-8 lg:grid-cols-2 lg:items-center">

            <div className="order-2 lg:order-1">

              <p className="text-sm font-bold uppercase tracking-wider text-blue-600">
                Stay Alert
              </p>

              <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Why Cyber Awareness Matters
              </h2>

              <p className="mt-5 leading-7 text-gray-600">
                Digital services are now a part of everyday life. People
                use the internet for communication, education, shopping,
                entertainment, banking and many other activities.
              </p>

              <p className="mt-4 leading-7 text-gray-600">
                With these activities come different security risks.
                Understanding common warning signs can help people make
                safer decisions when they receive unexpected messages,
                links, requests or offers.
              </p>

            </div>

            <div className="order-1 grid grid-cols-2 gap-4 lg:order-2">

              <div className="rounded-2xl bg-blue-50 p-6 text-center">
                <div className="text-4xl">📩</div>
                <h3 className="mt-3 font-bold text-gray-800">
                  Suspicious Messages
                </h3>
              </div>

              <div className="rounded-2xl bg-indigo-50 p-6 text-center">
                <div className="text-4xl">🔗</div>
                <h3 className="mt-3 font-bold text-gray-800">
                  Unknown Links
                </h3>
              </div>

              <div className="rounded-2xl bg-purple-50 p-6 text-center">
                <div className="text-4xl">💰</div>
                <h3 className="mt-3 font-bold text-gray-800">
                  Fake Offers
                </h3>
              </div>

              <div className="rounded-2xl bg-cyan-50 p-6 text-center">
                <div className="text-4xl">👤</div>
                <h3 className="mt-3 font-bold text-gray-800">
                  Identity Risks
                </h3>
              </div>

            </div>

          </div>

        </section>


        {/* ================= HOW TO USE ================= */}
        <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-lg sm:p-8 lg:p-10">

          <div className="mb-8 text-center">

            <p className="text-sm font-bold uppercase tracking-wider text-indigo-600">
              Explore the Platform
            </p>

            <h2 className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
              How to Use CyberShield
            </h2>

            <p className="mx-auto mt-4 max-w-2xl leading-7 text-gray-600">
              Explore the platform step by step and improve your
              understanding of cyber security.
            </p>

          </div>

          <div className="grid gap-5 md:grid-cols-4">

            <div className="relative rounded-2xl bg-blue-50 p-6 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 font-bold text-white">
                1
              </div>

              <h3 className="mt-4 font-bold text-gray-800">
                Explore Types
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Learn about different types of cyber crimes.
              </p>

            </div>


            <div className="rounded-2xl bg-red-50 p-6 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-red-600 font-bold text-white">
                2
              </div>

              <h3 className="mt-4 font-bold text-gray-800">
                Check Scams
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Understand common online scam patterns.
              </p>

            </div>


            <div className="rounded-2xl bg-green-50 p-6 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-green-600 font-bold text-white">
                3
              </div>

              <h3 className="mt-4 font-bold text-gray-800">
                Read Tips
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Learn practical ways to stay safer online.
              </p>

            </div>


            <div className="rounded-2xl bg-purple-50 p-6 text-center">

              <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-purple-600 font-bold text-white">
                4
              </div>

              <h3 className="mt-4 font-bold text-gray-800">
                Take Quiz
              </h3>

              <p className="mt-2 text-sm leading-6 text-gray-500">
                Test what you have learned through the quiz.
              </p>

            </div>

          </div>

        </section>


        {/* ================= FINAL CTA ================= */}
        <section className="rounded-3xl bg-gradient-to-r from-blue-600 to-indigo-700 p-8 text-center text-white shadow-xl sm:p-10">

          <div className="mx-auto max-w-3xl">

            <div className="text-5xl">
              🛡️
            </div>

            <h2 className="mt-5 text-3xl font-extrabold sm:text-4xl">
              Stay Aware. Stay Safe.
            </h2>

            <p className="mt-4 leading-7 text-blue-100">
              Cyber security starts with awareness. Take some time to
              explore CyberShield, learn about common threats and build
              safer digital habits.
            </p>

            <p className="mt-4 text-sm font-semibold text-cyan-200">
              Learn about cyber threats • Recognize scams • Protect your information
            </p>

          </div>

        </section>

      </div>

    </div>
  );
}

export default About;
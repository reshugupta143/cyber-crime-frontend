import { useParams, useNavigate } from "react-router-dom";

const scamDetails = {
  "fake-job-scams": {
    title: "Fake Job Scams",
    icon: "💼",
    description:
      "Fake job scams involve fraudulent job offers created to trick people into sharing personal information or paying money.",

    whatIsIt:
      "Fake job scams are scams where criminals pretend to be recruiters or companies and offer fake employment opportunities. They may contact people through social media, messaging apps, email or fake job websites.",

    howItWorks: [
      "The scammer creates a fake job advertisement.",
      "They contact the victim and promise a job or interview.",
      "They may ask for registration, training or processing fees.",
      "They may request personal or financial information.",
      "After receiving money or information, the scammer may disappear.",
    ],

    warningSigns: [
      "The job promises unusually high earnings for very little work.",
      "The recruiter asks for money before providing the job.",
      "The communication comes from an unknown or suspicious account.",
      "The company information cannot be verified.",
      "The recruiter pressures you to act immediately.",
    ],

    safetyTips: [
      "Verify the company and job posting independently.",
      "Never pay money simply to receive a job offer.",
      "Do not share passwords, OTPs or banking information.",
      "Use trusted job platforms whenever possible.",
      "Check the official company website for vacancies.",
    ],
  },

  "upi-payment-scams": {
    title: "UPI Payment Scams",
    icon: "💳",
    description:
      "UPI payment scams use misleading payment requests, fake messages or social engineering to trick people into transferring money.",

    whatIsIt:
      "UPI payment scams occur when criminals use deceptive messages, payment requests or fake identities to convince someone to send money.",

    howItWorks: [
      "The scammer contacts the victim with a fake story or offer.",
      "They may send a UPI payment request.",
      "They may claim that the victim will receive money after approving a request.",
      "The victim may unknowingly authorize a payment.",
      "The scammer receives the transferred money.",
    ],

    warningSigns: [
      "Unexpected payment requests.",
      "Pressure to approve a transaction quickly.",
      "Unknown people asking you to scan a QR code.",
      "Claims that you must enter your PIN to receive money.",
      "Suspicious messages about refunds or prizes.",
    ],

    safetyTips: [
      "Check the recipient before making a payment.",
      "Never enter your UPI PIN just to receive money.",
      "Do not approve unknown payment requests.",
      "Verify refund or payment messages independently.",
      "Contact your bank or payment service if something seems suspicious.",
    ],
  },

  "otp-fraud": {
    title: "OTP Fraud",
    icon: "🔐",
    description:
      "OTP fraud occurs when scammers try to trick people into revealing one-time passwords.",

    whatIsIt:
      "An OTP is a one-time password used to verify certain online activities. Scammers may pretend to be bank employees, customer support representatives or other trusted people to obtain an OTP.",

    howItWorks: [
      "The scammer contacts the victim.",
      "They create a false reason for requesting an OTP.",
      "The victim receives an OTP on their phone.",
      "The scammer asks the victim to share it.",
      "The OTP may then be used to complete an unauthorized action.",
    ],

    warningSigns: [
      "Someone unexpectedly asks for your OTP.",
      "The caller creates urgency or fear.",
      "The caller claims to be from a bank or company.",
      "You receive an OTP for an action you did not initiate.",
      "Someone asks you to read the OTP over a call.",
    ],

    safetyTips: [
      "Never share an OTP with anyone.",
      "Do not trust unexpected calls asking for verification codes.",
      "Read the message associated with an OTP carefully.",
      "Contact the official organization using verified contact details.",
      "Report suspicious activity to the relevant service provider.",
    ],
  },

  "fake-customer-care-scams": {
    title: "Fake Customer Care Scams",
    icon: "📞",
    description:
      "Scammers pretend to be customer support representatives to obtain personal information or money.",

    whatIsIt:
      "Fake customer care scams involve criminals impersonating support staff from banks, shopping platforms, payment services or other companies.",

    howItWorks: [
      "The scammer creates or finds a fake customer care number.",
      "They pretend to be a support representative.",
      "They ask for personal or financial information.",
      "They may ask the victim to install an unknown application.",
      "The victim may lose money or expose sensitive information.",
    ],

    warningSigns: [
      "The support number is found on an unofficial website.",
      "The caller asks for OTP or PIN.",
      "The caller asks for remote access to your device.",
      "The person creates unnecessary urgency.",
      "The support representative asks for payment to solve a simple issue.",
    ],

    safetyTips: [
      "Use customer care details only from official websites or applications.",
      "Never share OTPs or PINs with support staff.",
      "Do not install unknown applications at someone's request.",
      "Avoid giving remote access to unknown people.",
      "End suspicious calls and contact the company directly.",
    ],
  },

  "investment-scams": {
    title: "Investment Scams",
    icon: "📈",
    description:
      "Investment scams use fake investment opportunities and attractive promises to trick people into sending money.",

    whatIsIt:
      "Investment scams involve fraudulent schemes that may promise unusually high or guaranteed returns. Scammers often create fake platforms, profiles or groups to appear trustworthy.",

    howItWorks: [
      "The scammer presents an attractive investment opportunity.",
      "They show fake profits or testimonials.",
      "The victim is encouraged to invest money.",
      "The scammer may initially show fake returns.",
      "Eventually the victim may be unable to withdraw the money.",
    ],

    warningSigns: [
      "Guaranteed or unrealistic returns.",
      "Pressure to invest immediately.",
      "Unknown investment platforms.",
      "Requests to transfer money to personal accounts.",
      "Difficulty withdrawing funds.",
    ],

    safetyTips: [
      "Research the investment platform before investing.",
      "Be cautious of guaranteed high returns.",
      "Do not trust investment advice from unknown social media accounts.",
      "Verify financial services through official sources.",
      "Never invest money simply because someone pressures you.",
    ],
  },

  "social-media-scams": {
    title: "Social Media Scams",
    icon: "📱",
    description:
      "Social media scams use fake profiles, messages, offers and links to trick users.",

    whatIsIt:
      "Social media scams can involve fake accounts, fraudulent giveaways, impersonation, suspicious links or messages designed to collect personal information.",

    howItWorks: [
      "The scammer creates a fake profile or account.",
      "They contact users through messages or posts.",
      "They may offer prizes, jobs or attractive deals.",
      "The victim is directed to a fake website or asked for information.",
      "The scammer may use the collected information for fraudulent activities.",
    ],

    warningSigns: [
      "New or suspicious social media accounts.",
      "Unexpected prize or giveaway messages.",
      "Requests for personal information.",
      "Unknown links in direct messages.",
      "Offers that seem too good to be true.",
    ],

    safetyTips: [
      "Keep social media accounts private where appropriate.",
      "Do not click unknown links.",
      "Verify profiles before trusting them.",
      "Avoid sharing sensitive personal information publicly.",
      "Report and block suspicious accounts.",
    ],
  },
};

function ScamDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const scam = scamDetails[slug];

  if (!scam) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 pt-28">
        <div className="mx-auto max-w-3xl rounded-3xl bg-white p-10 text-center shadow-lg">

          <div className="text-6xl">
            🚨
          </div>

          <h1 className="mt-5 text-3xl font-extrabold text-gray-900">
            Scam Not Found
          </h1>

          <p className="mt-3 text-gray-500">
            The information for this scam is not available.
          </p>

          <button
            onClick={() => navigate("/trending")}
            className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-semibold text-white transition hover:bg-red-700"
          >
            ← Back to Trending
          </button>

        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-orange-50 px-4 pt-28 pb-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* Back Button */}
        <button
          onClick={() => navigate("/trending")}
          className="mb-6 flex items-center gap-2 rounded-xl bg-white px-4 py-2.5 text-sm font-semibold text-gray-600 shadow-sm transition hover:bg-red-50 hover:text-red-600"
        >
          ← Back to Trending Scams
        </button>

        {/* Hero */}
        <section className="overflow-hidden rounded-3xl bg-gradient-to-r from-red-600 via-orange-600 to-rose-700 p-7 text-white shadow-xl sm:p-10 lg:p-12">

          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">

            <div className="flex h-20 w-20 shrink-0 items-center justify-center rounded-3xl bg-white/10 text-5xl backdrop-blur-md">
              {scam.icon}
            </div>

            <div>

              <p className="text-sm font-semibold uppercase tracking-wider text-orange-100">
                Cyber Scam Information
              </p>

              <h1 className="mt-2 text-3xl font-extrabold sm:text-4xl lg:text-5xl">
                {scam.title}
              </h1>

              <p className="mt-4 max-w-3xl leading-7 text-orange-100">
                {scam.description}
              </p>

            </div>

          </div>

        </section>


        {/* What Is It */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">

          <div className="mb-4 flex items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-red-100 text-xl">
              ℹ️
            </span>

            <h2 className="text-2xl font-extrabold text-gray-900">
              What Is {scam.title}?
            </h2>

          </div>

          <p className="leading-8 text-gray-600">
            {scam.whatIsIt}
          </p>

        </section>


        {/* How It Works */}
        <section className="mt-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-md sm:p-8">

          <div className="mb-6 flex items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-orange-100 text-xl">
              ⚙️
            </span>

            <h2 className="text-2xl font-extrabold text-gray-900">
              How It Works
            </h2>

          </div>

          <div className="space-y-4">

            {scam.howItWorks.map((step, index) => (

              <div
                key={index}
                className="flex gap-4 rounded-2xl bg-gray-50 p-4"
              >

                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-red-600 text-sm font-bold text-white">
                  {index + 1}
                </span>

                <p className="pt-1 leading-6 text-gray-600">
                  {step}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* Warning Signs */}
        <section className="mt-8 rounded-3xl border border-yellow-200 bg-yellow-50 p-6 shadow-md sm:p-8">

          <div className="mb-6 flex items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-yellow-200 text-xl">
              ⚠️
            </span>

            <h2 className="text-2xl font-extrabold text-gray-900">
              Warning Signs
            </h2>

          </div>

          <div className="grid gap-4 md:grid-cols-2">

            {scam.warningSigns.map((warning, index) => (

              <div
                key={index}
                className="flex gap-3 rounded-xl bg-white p-4"
              >

                <span className="text-lg text-yellow-600">
                  ⚠
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {warning}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* Safety Tips */}
        <section className="mt-8 rounded-3xl border border-green-200 bg-green-50 p-6 shadow-md sm:p-8">

          <div className="mb-6 flex items-center gap-3">

            <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-green-200 text-xl">
              🛡️
            </span>

            <h2 className="text-2xl font-extrabold text-gray-900">
              How to Stay Safe
            </h2>

          </div>

          <div className="space-y-4">

            {scam.safetyTips.map((tip, index) => (

              <div
                key={index}
                className="flex gap-3 rounded-xl bg-white p-4"
              >

                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-green-600 text-xs font-bold text-white">
                  ✓
                </span>

                <p className="text-sm leading-6 text-gray-600">
                  {tip}
                </p>

              </div>

            ))}

          </div>

        </section>


        {/* Bottom */}
        <section className="mt-8 rounded-3xl bg-gradient-to-r from-gray-900 to-gray-800 p-7 text-center text-white shadow-xl sm:p-10">

          <div className="text-4xl">
            🛡️
          </div>

          <h2 className="mt-4 text-2xl font-extrabold">
            Stay Alert, Stay Safe
          </h2>

          <p className="mx-auto mt-3 max-w-2xl leading-7 text-gray-300">
            Being aware of common scam techniques can help you make safer
            decisions while using digital services.
          </p>

          <button
            onClick={() => navigate("/trending")}
            className="mt-6 rounded-xl bg-red-600 px-6 py-3 font-bold text-white transition hover:bg-red-700 active:scale-95"
          >
            ← Explore More Scams
          </button>

        </section>

      </div>

    </div>
  );
}

export default ScamDetails;
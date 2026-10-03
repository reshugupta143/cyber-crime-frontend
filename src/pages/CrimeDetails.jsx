import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";

const crimeDetails = {
  phishing: {
    title: "Phishing",

    explanation:
      "Phishing is one of the most common types of cybercrime in which attackers try to trick people into sharing sensitive or personal information. The attacker usually pretends to be a trusted person, company, bank, government organization, or online service. The main purpose of phishing is to steal information such as usernames, passwords, bank details, OTPs, or other confidential information. Phishing attacks are commonly carried out through fake emails, text messages, phone calls, social media messages, or fake websites. For example, a person may receive a message that appears to come from a bank and says that their account needs verification. The message may contain a link to a fake website that looks similar to the real banking website. If the person enters their login details on that website, the attacker can obtain that information. Phishing attacks can also use urgent or threatening messages to make people act without checking the information carefully. Attackers may say that an account will be blocked, a payment is pending, or a reward is waiting for the user. Some phishing messages may also contain harmful attachments or links that can lead to malware or other security risks. Phishing is dangerous because it mainly depends on human trust and carelessness rather than directly attacking a computer system. To protect ourselves from phishing, we should carefully check the sender's address, avoid clicking on suspicious links, verify website addresses before entering sensitive information, and never share passwords or OTPs with anyone. We should also use strong and unique passwords, enable multi-factor authentication whenever possible, and keep our devices and applications updated. If a message looks suspicious, it is better to verify it through the organization's official website or contact method instead of using the information provided in the message. In conclusion, phishing is a serious cyber threat that uses social engineering and deception to steal sensitive information. Awareness, careful verification, and safe online habits can help people recognize phishing attacks and protect their personal and financial information.",

    Types: [
      {
        title: "Email Phishing",
        explanation:
          "Email phishing is one of the most common types of phishing. In this attack, the attacker sends a fake email that appears to come from a trusted organization, bank, company, or online service. The email may contain a suspicious link or attachment and may ask the user to provide login details, update an account, verify information, or make a payment.",
      },

      {
        title: "Spear Phishing",
        explanation:
          "Spear phishing is a targeted form of phishing. Instead of sending the same message to many people, the attacker creates a personalized message for a particular person or organization.",
      },

      {
        title: "Whaling",
        explanation:
          "Whaling is a type of targeted phishing attack that focuses on high-level individuals in an organization, such as senior managers, executives, or other important decision-makers.",
      },

      {
        title: "Smishing",
        explanation:
          "Smishing stands for SMS phishing. It is a phishing attack performed through SMS or text messages.",
      },

      {
        title: "Vishing",
        explanation:
          "Vishing means voice phishing. In this type of attack, the attacker uses a phone call or voice communication to trick the victim.",
      },

      {
        title: "Clone Phishing",
        explanation:
          "Clone phishing involves creating a fake copy or clone of a legitimate email or message. The attacker may copy the appearance and general content of a genuine message but replace a legitimate link or attachment with a malicious one.",
      },

      {
        title: "Pharming",
        explanation:
          "Pharming is a technique in which users are redirected to a fraudulent website even though they may believe they are accessing a legitimate website.",
      },

      {
        title: "Social Media Phishing",
        explanation:
          "Social media phishing uses social networking platforms to deceive users. Attackers may create fake profiles, send fraudulent messages, or create fake login pages.",
      },

      {
        title: "Search Engine Phishing",
        explanation:
          "Search engine phishing involves creating fraudulent websites or pages that may appear in search results and attempt to attract users.",
      },

      {
        title: "Business Email Compromise (BEC)",
        explanation:
          "Business Email Compromise is a form of cyber-enabled fraud in which attackers use compromised or impersonated business email accounts to deceive employees or organizations.",
      },
    ],



    examples: [
      "A fake bank message asking you to verify your account.",
      "A fake login page that looks like a real website.",
      "A message containing a suspicious link asking for personal information.",
    ],

    signs: [
      "Unexpected messages asking for personal information.",
      "Suspicious links or unknown websites.",
      "Messages creating urgency or threatening account closure.",
      "Unknown senders asking for OTPs or passwords.",
    ],

    prevention: [
      "Do not click suspicious links.",
      "Never share OTPs or passwords.",
      "Check the website address before entering credentials.",
      "Use multi-factor authentication whenever possible.",
    ],
  },

  "identity-theft": {
    title: "Identity Theft",

    explanation:
      "Identity theft is a type of cyber crime in which a person’s personal information is stolen and used by someone else without permission. Personal information can include a name, phone number, email address, Aadhaar or other identity details, bank account information, passwords, or credit/debit card details. Criminals may collect this information through fake websites, phishing emails, messages, social media, data leaks, or other scams. After getting the information, they may use it to create fake accounts, make unauthorized transactions, access online accounts, or pretend to be another person. For example, if someone gets another person’s login details and uses their account without permission, it can be a form of identity theft. Identity theft can cause financial loss, privacy problems, and stress for the victim. To protect ourselves, we should use strong and unique passwords, enable two-factor authentication, avoid clicking on unknown links, never share OTPs or passwords, and check bank and account activities regularly. We should also be careful while sharing personal information online and use only trusted websites and applications. If we notice any suspicious activity, we should report it immediately to the concerned bank, service provider, or cyber crime authorities.",
      Types: [
  {
    title: "Financial Identity Theft",
    explanation:
      "Financial identity theft happens when an attacker steals someone's personal or financial information and uses it without permission. The attacker may use bank account details, credit card information, or other financial information to make unauthorized transactions or purchases.",
  },

  {
    title: "Account Takeover",
    explanation:
      "Account takeover happens when an attacker gets unauthorized access to someone's online account. The attacker may steal or guess the password and then use the account for fraudulent activities.",
  },

  {
    title: "Criminal Identity Theft",
    explanation:
      "Criminal identity theft happens when someone uses another person's identity or personal information while dealing with law enforcement or committing illegal activities. This can create serious problems for the actual person whose identity was used.",
  },

  {
    title: "Medical Identity Theft",
    explanation:
      "Medical identity theft occurs when someone uses another person's personal information to receive medical services, medicines, or other healthcare benefits without permission.",
  },

  {
    title: "Tax Identity Theft",
    explanation:
      "Tax identity theft happens when an attacker uses someone's personal information to submit a false tax return or perform other tax-related activities. The victim may discover the problem when their tax records show an unexpected or incorrect return.",
  },

  {
    title: "Child Identity Theft",
    explanation:
      "Child identity theft occurs when someone's personal information is stolen and used while they are still a child. The stolen information may be used to create accounts or perform financial activities without permission.",
  },

  {
    title: "Synthetic Identity Theft",
    explanation:
      "Synthetic identity theft involves creating a fake identity by combining real and fake information. For example, an attacker may combine a real person's information with a fake name or other details to create a new identity.",
  },

  {
    title: "Social Media Identity Theft",
    explanation:
      "Social media identity theft happens when someone uses another person's name, photos, or personal information to create a fake profile or pretend to be that person on a social media platform.",
  },

  {
    title: "Online Identity Theft",
    explanation:
      "Online identity theft occurs when attackers steal personal information through the internet. They may use phishing, fake websites, malicious links, or other online methods to collect information such as passwords and account details.",
  },

  {
    title: "Identity Theft Through Data Breaches",
    explanation:
      "Identity theft through data breaches happens when personal information is exposed or stolen from an organization's database. Attackers may obtain information such as names, email addresses, passwords, or other personal details and misuse it."
  },
],
      examples: [
      "Using someone's personal information to create a fake account.",
      "Using stolen credentials to access an account.",
      "Using another person's information for fraudulent activities.",
    ],

    signs: [
      "Unknown login attempts.",
      "Unexpected account activity.",
      "Unknown transactions or account changes.",
      "Receiving messages about accounts you did not create.",
    ],

    prevention: [
      "Keep personal information private.",
      "Use strong and unique passwords.",
      "Enable multi-factor authentication.",
      "Regularly check important account activity.",
    ],
  },

  "online-fraud": {
    title: "Online Fraud",

       explanation:
  "Online fraud involves deceptive activities carried out through the internet to steal money, personal information, or account credentials. Fraudsters may use fake offers, websites, messages, or social media accounts. Online fraud is a type of cyber crime in which criminals use the internet, websites, mobile applications, social media, emails, messages, or digital payment systems to trick people and steal their money, personal information, or account details. Online fraud is becoming more common because people use the internet for shopping, banking, education, communication, job searching, and digital payments. Fraudsters often pretend to be trusted companies, banks, government organizations, friends, or service providers to gain the victim's trust.\n\nOnline fraud can happen in many different ways. A fraudster may send a fake message containing a suspicious link, create a fake shopping website, offer a fake job, promise high returns from an investment, or contact a person with a false payment request. The main purpose is usually to make the victim share sensitive information or transfer money. Sometimes, fraudsters use social engineering techniques to create fear, urgency, or excitement so that the victim makes a quick decision without checking the information.\n\nHow Online Fraud Happens\n\nOnline fraud usually starts when a criminal contacts a person through an online platform. The criminal may use email, SMS, WhatsApp, social media, phone calls, websites, or mobile applications. They may pretend to be a bank employee, customer support representative, delivery company, employer, friend, or government official.\n\nFor example, a fraudster may send a message saying that a bank account will be blocked unless the user verifies their information. The message may contain a fake website link. When the victim enters their username, password, card details, or other information, the attacker can collect the information and misuse it.\n\nIn another case, a fraudster may create a fake online shopping website and advertise products at very low prices. After the customer makes the payment, the product may never arrive or the customer may receive a different product. This is another common form of online fraud.",
          Types: [
  {
    title: "Online Shopping Fraud",
    explanation:
      "Online shopping fraud happens when scammers create fake shopping websites, pages, or listings to trick people into making payments. The victim may receive a fake product, a different product, or may not receive anything after making the payment.",
  },

  {
    title: "Payment Fraud",
    explanation:
      "Payment fraud happens when an attacker tricks a person into making an unauthorized payment. The attacker may use fake payment requests, QR codes, payment links, or other methods to steal money.",
  },

  {
    title: "UPI Fraud",
    explanation:
      "UPI fraud occurs when scammers use fake payment requests, QR codes, links, or social engineering to trick users into sending money or sharing sensitive information related to their UPI account.",
  },

  {
    title: "Credit and Debit Card Fraud",
    explanation:
      "Credit and debit card fraud happens when someone uses another person's card details without permission. The stolen card information may be used to make unauthorized purchases or transactions.",
  },

  {
    title: "Investment Fraud",
    explanation:
      "Investment fraud occurs when scammers offer fake investment opportunities and promise high or guaranteed returns. After receiving money from the victim, the scammer may disappear or provide false information about the investment.",
  },

  {
    title: "Job Fraud",
    explanation:
      "Job fraud happens when scammers post fake job offers or contact people with false employment opportunities. They may ask for registration fees, security deposits, personal information, or other payments.",
  },

  {
    title: "Lottery and Prize Fraud",
    explanation:
      "Lottery and prize fraud happens when scammers tell a person that they have won a lottery, prize, or reward. The scammer may then ask the victim to pay a fee or provide personal and financial information to receive the prize.",
  },

  {
    title: "Loan Fraud",
    explanation:
      "Loan fraud occurs when scammers offer fake loans through websites, apps, calls, or messages. They may ask for processing fees or personal information and then fail to provide the promised loan.",
  },

  {
    title: "Tech Support Fraud",
    explanation:
      "Tech support fraud happens when scammers pretend to be technical support employees and claim that the victim's computer or account has a problem. They may try to obtain personal information, payment details, or unauthorized access.",
  },

  {
    title: "Refund Fraud",
    explanation:
      "Refund fraud occurs when scammers pretend to provide a refund for a product, service, or transaction. They may trick the victim into sharing financial information or following instructions that result in an unauthorized payment.",
  },
],
    examples: [
      "Fake online shopping websites.",
      "Fraudulent payment requests.",
      "Fake job or investment offers.",
      "Messages pretending to be from trusted organizations.",
    ],

    signs: [
      "Offers that seem too good to be true.",
      "Requests for immediate payment.",
      "Unknown payment links.",
      "Requests for OTP or banking credentials.",
    ],

    prevention: [
      "Verify websites and sellers before making payments.",
      "Never share OTPs or PINs.",
      "Avoid unknown payment links.",
      "Check transactions regularly.",
    ],
  },

  "cyber-bullying": {
    title: "Cyber Bullying",

    explanation:
  "Cyber bullying is a type of cyber crime in which a person uses the internet, social media, messaging apps, online games, or other digital platforms to repeatedly hurt, insult, threaten, or embarrass another person. It can include sending abusive messages, spreading false information or rumors, sharing someone's private information or photos without permission, creating fake profiles, or posting harmful comments. Cyber bullying can happen at any time because digital platforms are available almost everywhere. Sometimes, the bully may hide their identity by using a fake account.\n\nCyber bullying can spread quickly because harmful messages, images, or posts can be shared with many people. It can affect a person's privacy, safety, reputation, and emotional well-being. Some common forms of cyber bullying include harassment, cyber stalking, trolling, impersonation, outing, exclusion, rumor spreading, doxxing, cyber threats, and image-based bullying.\n\nCyber bullying can happen through social media platforms, emails, text messages, online games, discussion forums, and other digital services. For example, a person may repeatedly send abusive messages to someone or create a fake social media account to post harmful content about them. In another case, someone may share a person's private photo or information without permission to embarrass them.\n\nTo protect yourself from cyber bullying, avoid responding to abusive messages and use the block and report features available on online platforms. Keep evidence such as screenshots, messages, usernames, and profile links because they may be useful when reporting the incident. Use strong privacy settings and avoid sharing unnecessary personal information online. If the situation involves serious threats or continues repeatedly, it should be reported to a trusted adult, school authority, online platform, or appropriate cyber crime authority.\n\nAwareness and responsible online behavior can help reduce cyber bullying. People should respect others online, avoid sharing harmful content, and report abusive or threatening behavior. Everyone has the right to use digital platforms in a safe and respectful environment.",
  Types: [
  {
    title: "Harassment",
    explanation:
      "Online harassment involves repeatedly sending insulting, abusive, or unwanted messages to another person. The main purpose is often to disturb, embarrass, or intimidate the victim.",
  },

  {
    title: "Cyber Stalking",
    explanation:
      "Cyber stalking involves repeatedly monitoring, contacting, or following someone through online platforms. The attacker may use social media, messages, emails, or other digital platforms to disturb or intimidate the victim.",
  },

  {
    title: "Trolling",
    explanation:
      "Trolling involves posting offensive, insulting, or provocative comments online to upset or annoy another person. Trolls may target people on social media, forums, or other online platforms.",
  },

  {
    title: "Impersonation",
    explanation:
      "Impersonation happens when someone creates a fake account or pretends to be another person online. The fake account may be used to post harmful content, send messages, or damage the victim's reputation.",
  },

  {
    title: "Outing",
    explanation:
      "Outing occurs when someone shares another person's private or personal information, messages, photos, or other content online without their permission.",
  },

  {
    title: "Exclusion",
    explanation:
      "Online exclusion happens when a person is intentionally left out of online groups, chats, gaming communities, or social activities. It may be done repeatedly to make the person feel isolated.",
  },

  {
    title: "Rumor Spreading",
    explanation:
      "Rumor spreading involves sharing false or harmful information about someone through social media, messages, online groups, or other digital platforms.",
  },

  {
    title: "Doxxing",
    explanation:
      "Doxxing involves sharing someone's private or identifying information online without their permission. This may include information such as a phone number, home address, or other personal details.",
  },

  {
    title: "Cyber Threats",
    explanation:
      "Cyber threats involve sending threatening messages or content to frighten or intimidate another person online. Serious threats should be reported to the platform and appropriate authorities.",
  },

  {
    title: "Image-Based Bullying",
    explanation:
      "Image-based bullying involves using or sharing someone's photos or other images online to embarrass, insult, or humiliate them without their permission.",
  },
],
    examples: [
      "Repeatedly sending threatening messages.",
      "Posting harmful content about someone online.",
      "Creating fake accounts to harass someone.",
    ],

    signs: [
      "Repeated unwanted messages.",
      "Threatening or abusive online communication.",
      "Fake accounts created to target someone.",
      "Harmful content being shared about a person.",
    ],

    prevention: [
      "Block abusive accounts.",
      "Report harmful content to the platform.",
      "Keep evidence of unwanted communication.",
      "Tell a trusted adult or appropriate authority when necessary.",
    ],
  },

  malware: {
    title: "Malware",

    explanation:
  "Malware is a type of malicious software designed to damage a computer, steal personal information, access a system without permission, or disturb its normal working. The word malware comes from the words malicious software. Malware can affect computers, laptops, smartphones, tablets, and computer networks.\n\nMalware can enter a device through infected files, suspicious email attachments, unsafe websites, fake applications, malicious links, or infected USB drives. Once malware enters a system, it may steal passwords, delete or modify files, monitor user activities, display unwanted advertisements, or give unauthorized access to attackers. Some types of malware can also spread from one device to another through networks or shared files.\n\nThere are different types of malware, including viruses, worms, Trojan horses, ransomware, spyware, adware, keyloggers, rootkits, fileless malware, and botnet malware. Each type works differently and can cause different kinds of damage. For example, ransomware can lock or encrypt files, while spyware can secretly collect information about a user's activities.\n\nMalware can cause data loss, financial loss, privacy problems, system damage, and unauthorized access to accounts. It can also affect organizations by disrupting their systems and services. Therefore, protecting devices from malware is an important part of cyber security.\n\nTo prevent malware attacks, users should install trusted security software, keep the operating system and applications updated, avoid downloading files from unknown sources, and never open suspicious links or email attachments. Applications should be downloaded only from trusted sources. Users should also regularly back up important data and use strong passwords with additional security features such as two-factor authentication.\n\nIf malware is suspected on a device, the user should disconnect the device from unsafe networks when appropriate, run a trusted security scan, update the system, and seek help from a qualified technical or security professional if needed. Awareness and safe online habits can greatly reduce the risk of malware infections.",
Types: [
  {
    title: "Virus",
    explanation:
      "A computer virus is a type of malware that attaches itself to a file or program. When the infected file runs, the virus may spread to other files and damage data or affect the normal working of a computer.",
  },

  {
    title: "Worm",
    explanation:
      "A worm is malware that can copy itself and spread from one computer to another, often through networks. Unlike a traditional virus, it does not need to attach itself to another program to spread.",
  },

  {
    title: "Trojan Horse",
    explanation:
      "A Trojan horse is malware that disguises itself as a useful or legitimate program. When a user installs or runs it, it may steal information, damage files, or allow unauthorized access to the device.",
  },

  {
    title: "Ransomware",
    explanation:
      "Ransomware is malware that locks a device or encrypts its files and demands money to restore access. It can prevent users from accessing their important documents and other data.",
  },

  {
    title: "Spyware",
    explanation:
      "Spyware is malware that secretly monitors a user's activities and collects information without proper permission. It may collect browsing data, personal information, or other sensitive details.",
  },

  {
    title: "Adware",
    explanation:
      "Adware is software that displays unwanted advertisements on a device. Some forms of adware may also track browsing activities or redirect users to suspicious websites.",
  },

  {
    title: "Keylogger",
    explanation:
      "A keylogger is a type of software or hardware that records keystrokes. A malicious keylogger may capture passwords, messages, and other sensitive information entered by a user.",
  },

  {
    title: "Rootkit",
    explanation:
      "A rootkit is a type of malware designed to hide malicious activities and maintain unauthorized access to a system. It can be difficult to detect because it may conceal files or processes.",
  },

  {
    title: "Fileless Malware",
    explanation:
      "Fileless malware operates mainly through tools or processes already available on a system instead of relying on traditional malicious files. This can make it more difficult for some security tools to detect.",
  },

  {
    title: "Botnet Malware",
    explanation:
      "Botnet malware infects devices and allows attackers to control them remotely. Infected devices may be used together to send spam, spread malware, or perform attacks against websites and networks.",
  },
],
    examples: [
      "Malicious files attached to emails.",
      "Fake applications containing harmful software.",
      "Software that secretly collects information.",
    ],

    signs: [
      "Unexpected system behavior.",
      "Unknown applications appearing on a device.",
      "Unusual pop-ups.",
      "Unexpected changes to files or settings.",
    ],

    prevention: [
      "Keep software and operating systems updated.",
      "Download applications from trusted sources.",
      "Avoid suspicious attachments and links.",
      "Use reputable security software.",
    ],
  },

  "password-attacks": {
    title: "Password Attacks",

    explanation:
      "Password attacks are attempts to gain unauthorized access to accounts by targeting passwords. Attackers may use stolen passwords, commonly used passwords or other techniques to obtain account access.Password attacks are cyber attacks in which attackers try to obtain, guess, or misuse a user's password to gain unauthorized access to an account or system. Passwords are commonly targeted because they protect important information such as email accounts, social media profiles, banking accounts, and other online services. Attackers may use stolen password databases, automated guessing methods, fake login pages, or information about the victim to obtain passwords. Weak and reused passwords can make these attacks easier. Common types of password attacks include brute force attacks, dictionary attacks, credential stuffing, password spraying, phishing, and keylogging. To protect against password attacks, users should create strong and unique passwords for different accounts, enable two-factor authentication, avoid sharing passwords, and never enter login details on suspicious websites. Using a trusted password manager can also help users manage unique passwords securely.",
     Types: [
  {
    title: "Brute Force Attack",
    explanation:
      "A brute force attack involves trying many possible password combinations until the correct password is found. Weak and short passwords are generally easier to guess using this method.",
  },

  {
    title: "Dictionary Attack",
    explanation:
      "A dictionary attack uses a list of commonly used words, passwords, and combinations to try to guess a user's password. It is more focused than trying every possible combination.",
  },

  {
    title: "Credential Stuffing",
    explanation:
      "Credential stuffing occurs when attackers use stolen usernames and passwords from one service to try to access accounts on other services. It works especially when users reuse the same password on multiple websites.",
  },

  {
    title: "Password Spraying",
    explanation:
      "Password spraying involves trying a small number of commonly used passwords against many different accounts. This can help attackers avoid some account lockout protections.",
  },

  {
    title: "Phishing",
    explanation:
      "Phishing is a technique in which attackers create fake emails, messages, or websites to trick users into entering their usernames and passwords. The stolen credentials can then be used to access the victim's account.",
  },

  {
    title: "Keylogging",
    explanation:
      "Keylogging involves recording the keys entered by a user. A malicious keylogger can capture passwords and other sensitive information when they are typed on an infected device.",
  },

  {
    title: "Shoulder Surfing",
    explanation:
      "Shoulder surfing occurs when someone observes a user entering a password or PIN. The attacker may then use the information to access the user's account or device.",
  },

  {
    title: "Password Reset Attack",
    explanation:
      "A password reset attack attempts to gain unauthorized access through the password recovery process. Attackers may try to obtain recovery information or manipulate the process to take control of an account.",
  },

  {
    title: "Offline Password Attack",
    explanation:
      "An offline password attack occurs when attackers obtain stored password data, such as password hashes, and try to determine the original passwords without directly interacting with the login system.",
  },

  {
    title: "Rainbow Table Attack",
    explanation:
      "A rainbow table attack uses precomputed tables of password hashes to help identify passwords from stolen password data. Proper password hashing with modern security practices can make this attack much harder.",
  },
],
    examples: [
      "Trying passwords obtained from a previous data breach.",
      "Guessing weak passwords.",
      "Using stolen login credentials.",
    ],

    signs: [
      "Unknown login notifications.",
      "Password reset emails you did not request.",
      "Unexpected account changes.",
      "Login attempts from unfamiliar locations or devices.",
    ],

    prevention: [
      "Use strong and unique passwords.",
      "Do not reuse the same password everywhere.",
      "Enable multi-factor authentication.",
      "Change compromised passwords immediately.",
    ],
  },
};

function CrimeDetails() {
  const { slug } = useParams();
  const navigate = useNavigate();

  const [selectedType, setSelectedType] = useState(0);

  const crime = crimeDetails[slug];

  // ================= CRIME NOT FOUND =================
  if (!crime) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 pt-28 pb-10 sm:px-6 lg:px-8">
        <div className="max-w-md mx-auto">

          <button
            onClick={() => navigate("/types")}
            className="mb-6 inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-blue-600 shadow-sm transition hover:bg-blue-50 hover:text-blue-700"
          >
            <span className="text-lg">←</span>
            Back to Types
          </button>

          <div className="rounded-3xl border border-gray-200 bg-white p-8 text-center shadow-lg">

            <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
              <span className="text-3xl">⚠️</span>
            </div>

            <h1 className="mb-3 text-2xl font-bold text-gray-800 sm:text-3xl">
              Crime Not Found
            </h1>

            <p className="mb-6 text-sm leading-6 text-gray-500 sm:text-base">
              The crime information you are looking for could not be found.
            </p>

            <button
              onClick={() => navigate("/types")}
              className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700"
            >
              ← Back to Types
            </button>

          </div>
        </div>
      </div>
    );
  }

  const typeList = crime.Types || [];

  const selectedCrimeType =
    typeList[selectedType] || typeList[0];

  return (
    <div className="min-h-screen bg-slate-50 px-4 pt-28 pb-12 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-6xl">

        {/* ================================================= */}
        {/* BACK BUTTON */}
        {/* ================================================= */}

        <div className="mb-6">
          <button
            onClick={() => navigate("/types")}
            className="group inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-5 py-3 text-sm font-semibold text-gray-700 shadow-sm transition-all duration-200 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-700 hover:shadow-md"
          >
            <span className="text-lg transition-transform duration-200 group-hover:-translate-x-1">
              ←
            </span>

            Back to Types
          </button>
        </div>

        {/* ================================================= */}
        {/* HERO HEADER */}
        {/* ================================================= */}

        <section className="relative mb-7 overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700 p-6 shadow-xl sm:p-8 lg:p-10">

          {/* Background Shapes */}
          <div className="absolute -right-16 -top-16 h-44 w-44 rounded-full bg-white/10" />

          <div className="absolute -bottom-24 -left-12 h-52 w-52 rounded-full bg-white/5" />

          <div className="absolute right-24 bottom-10 h-20 w-20 rounded-full bg-white/5" />

          <div className="relative">

            {/* Badge */}
            <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 backdrop-blur-sm">

              <span className="h-2.5 w-2.5 rounded-full bg-green-300 shadow-[0_0_10px_rgba(134,239,172,0.8)]" />

              <span className="text-xs font-semibold text-blue-100 sm:text-sm">
                Cyber Crime Awareness
              </span>

            </div>

            {/* Title */}
            <h1 className="max-w-4xl text-3xl font-extrabold leading-tight tracking-tight text-white sm:text-4xl lg:text-5xl">
              {crime.title}
            </h1>

            <p className="mt-4 max-w-2xl text-sm leading-6 text-blue-100 sm:text-base">
              Understand the risks, warning signs and ways to stay protected.
            </p>

            {/* Line */}
            <div className="mt-6 h-1 w-20 rounded-full bg-white" />

          </div>
        </section>

        {/* ================================================= */}
        {/* INTRODUCTION */}
        {/* ================================================= */}

        <section className="mb-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

          <div className="mb-6 flex items-start gap-4">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-blue-100">
              <span className="text-xl">ℹ️</span>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold text-blue-600">
                Introduction
              </p>

              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                What is {crime.title}?
              </h2>
            </div>

          </div>

          <div className="rounded-2xl bg-slate-50 p-4 sm:p-5">
            <p className="text-sm leading-7 text-gray-600 sm:text-base">
              {crime.explanation}
            </p>
          </div>

        </section>

        {/* ================================================= */}
        {/* TYPES */}
        {/* ================================================= */}

        {typeList.length > 0 && (
          <section className="mb-7 overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm">

            {/* Section Header */}
            <div className="border-b border-gray-100 px-5 py-6 sm:px-7 lg:px-8">

              <div className="flex items-start gap-4">

                <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-purple-100">
                  <span className="text-xl">📌</span>
                </div>

                <div>
                  <p className="mb-1 text-sm font-bold text-purple-600">
                    Explore Different Types
                  </p>

                  <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                    Types of {crime.title}
                  </h2>

                  <p className="mt-1 text-sm text-gray-500">
                    Select any type to learn more about it.
                  </p>
                </div>

              </div>

            </div>

            {/* Types Content */}
            <div className="p-5 sm:p-7 lg:p-8">

              <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">

                {/* ================================================= */}
                {/* LEFT TYPE LIST */}
                {/* ================================================= */}

                <div className="lg:col-span-1">

                  <div className="mb-3 flex items-center justify-between">

                    <p className="text-sm font-semibold text-gray-700">
                      Available Types
                    </p>

                    <span className="rounded-full bg-purple-100 px-3 py-1 text-xs font-bold text-purple-700">
                      {typeList.length} Types
                    </span>

                  </div>

                  <div className="space-y-3">

                    {typeList.map((type, index) => {

                      const isSelected =
                        selectedType === index;

                      return (
                        <button
                          key={index}
                          onClick={() => setSelectedType(index)}
                          className={`group w-full rounded-2xl border p-3 text-left transition-all duration-200 sm:p-4 ${
                            isSelected
                              ? "border-purple-600 bg-gradient-to-r from-purple-600 to-indigo-600 shadow-lg shadow-purple-200"
                              : "border-gray-200 bg-gray-50 hover:border-purple-300 hover:bg-purple-50 hover:shadow-sm"
                          }`}
                        >

                          <div className="flex items-center gap-3">

                            {/* Number */}
                            <div
                              className={`flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                                isSelected
                                  ? "bg-white text-purple-600"
                                  : "bg-purple-100 text-purple-700"
                              }`}
                            >
                              {index + 1}
                            </div>

                            {/* Text */}
                            <div className="min-w-0 flex-1">

                              <h3
                                className={`truncate text-sm font-bold sm:text-base ${
                                  isSelected
                                    ? "text-white"
                                    : "text-gray-800"
                                }`}
                              >
                                {type.title}
                              </h3>

                              <p
                                className={`mt-1 text-xs ${
                                  isSelected
                                    ? "text-purple-100"
                                    : "text-gray-500"
                                }`}
                              >
                                Click to read
                              </p>

                            </div>

                            {/* Arrow */}
                            <span
                              className={`text-xl transition-transform duration-200 group-hover:translate-x-1 ${
                                isSelected
                                  ? "text-white"
                                  : "text-gray-400"
                              }`}
                            >
                              →
                            </span>

                          </div>

                        </button>
                      );
                    })}

                  </div>
                </div>

                {/* ================================================= */}
                {/* RIGHT DETAILS */}
                {/* ================================================= */}

                <div className="lg:col-span-2">

                  {selectedCrimeType && (
                    <div className="h-full rounded-3xl border border-purple-100 bg-gradient-to-br from-purple-50 via-white to-indigo-50 p-5 sm:p-7 lg:p-8">

                      {/* Top */}
                      <div className="mb-7 flex items-center justify-between gap-3">

                        <span className="inline-flex items-center gap-2 rounded-full bg-purple-100 px-3 py-1.5 text-xs font-bold text-purple-700 sm:text-sm">

                          <span className="h-2 w-2 rounded-full bg-purple-600" />

                          Selected Type

                        </span>

                        <span className="text-xs font-bold text-gray-400 sm:text-sm">
                          {selectedType + 1} / {typeList.length}
                        </span>

                      </div>

                      {/* Title */}
                      <div className="mb-7 flex items-start gap-4">

                        <div className="flex h-14 w-14 flex-shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-purple-600 to-indigo-600 text-xl font-bold text-white shadow-lg">
                          {selectedType + 1}
                        </div>

                        <div className="min-w-0">

                          <p className="mb-1 text-sm font-semibold text-purple-600">
                            {crime.title} Type
                          </p>

                          <h3 className="text-2xl font-extrabold leading-tight text-gray-900 sm:text-3xl">
                            {selectedCrimeType.title}
                          </h3>

                        </div>

                      </div>

                      {/* Divider */}
                      <div className="mb-7 h-px bg-purple-100" />

                      {/* Explanation */}
                      <div className="relative rounded-2xl bg-white/70 p-5 shadow-sm">

                        <span className="absolute -left-1 -top-5 font-serif text-5xl text-purple-200">
                          “
                        </span>

                        <p className="relative text-sm leading-7 text-gray-700 sm:text-base">
                          {selectedCrimeType.explanation}
                        </p>

                      </div>

                      {/* Progress */}
                      <div className="mt-8">

                        <div className="mb-2 flex items-center justify-between text-xs font-semibold text-gray-500">

                          <span>
                            Reading Progress
                          </span>

                          <span>
                            {Math.round(
                              ((selectedType + 1) /
                                typeList.length) *
                                100
                            )}
                            %
                          </span>

                        </div>

                        <div className="h-2.5 w-full overflow-hidden rounded-full bg-purple-100">

                          <div
                            className="h-full rounded-full bg-gradient-to-r from-purple-600 to-indigo-600 transition-all duration-300"
                            style={{
                              width: `${
                                ((selectedType + 1) /
                                  typeList.length) *
                                100
                              }%`,
                            }}
                          />

                        </div>

                      </div>

                      {/* Navigation */}
                      <div className="mt-7 flex flex-col gap-3 border-t border-purple-100 pt-5 sm:flex-row sm:justify-between">

                        <button
                          disabled={selectedType === 0}
                          onClick={() =>
                            setSelectedType(
                              selectedType - 1
                            )
                          }
                          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                            selectedType === 0
                              ? "cursor-not-allowed bg-gray-100 text-gray-400"
                              : "border border-gray-200 bg-white text-gray-700 hover:bg-gray-50"
                          }`}
                        >
                          ← Previous
                        </button>

                        <button
                          disabled={
                            selectedType ===
                            typeList.length - 1
                          }
                          onClick={() =>
                            setSelectedType(
                              selectedType + 1
                            )
                          }
                          className={`rounded-xl px-5 py-2.5 text-sm font-semibold transition ${
                            selectedType ===
                            typeList.length - 1
                              ? "cursor-not-allowed bg-gray-100 text-gray-400"
                              : "bg-purple-600 text-white shadow-sm hover:bg-purple-700"
                          }`}
                        >
                          Next →
                        </button>

                      </div>

                    </div>
                  )}

                </div>

              </div>

            </div>

          </section>
        )}

        {/* ================================================= */}
        {/* EXAMPLES */}
        {/* ================================================= */}

        <section className="mb-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

          <div className="mb-6 flex items-start gap-4">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-orange-100">
              <span className="text-xl">💡</span>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold text-orange-600">
                Real World Examples
              </p>

              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                Examples
              </h2>
            </div>

          </div>

          <div className="space-y-3">

            {crime.examples.map((example, index) => (

              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-orange-100 bg-orange-50 p-4 transition hover:bg-orange-100"
              >

                <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-lg bg-orange-200 text-sm font-bold text-orange-700">
                  {index + 1}
                </span>

                <p className="text-sm leading-6 text-gray-700 sm:text-base">
                  {example}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ================================================= */}
        {/* WARNING SIGNS */}
        {/* ================================================= */}

        <section className="mb-7 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

          <div className="mb-6 flex items-start gap-4">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-red-100">
              <span className="text-xl">⚠️</span>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold text-red-600">
                Stay Alert
              </p>

              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                Warning Signs
              </h2>
            </div>

          </div>

          <div className="space-y-3">

            {crime.signs.map((sign, index) => (

              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-red-100 bg-red-50 p-4 transition hover:bg-red-100"
              >

                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-red-200 font-bold text-red-700">
                  !
                </div>

                <p className="text-sm leading-6 text-gray-700 sm:text-base">
                  {sign}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ================================================= */}
        {/* PREVENTION */}
        {/* ================================================= */}

        <section className="mb-8 rounded-3xl border border-gray-200 bg-white p-5 shadow-sm sm:p-7 lg:p-8">

          <div className="mb-6 flex items-start gap-4">

            <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl bg-green-100">
              <span className="text-xl">🛡️</span>
            </div>

            <div>
              <p className="mb-1 text-sm font-bold text-green-600">
                Stay Protected
              </p>

              <h2 className="text-xl font-bold text-gray-800 sm:text-2xl">
                How to Prevent It
              </h2>
            </div>

          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

            {crime.prevention.map((item, index) => (

              <div
                key={index}
                className="flex items-start gap-3 rounded-2xl border border-green-100 bg-green-50 p-4 transition hover:bg-green-100"
              >

                <div className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-green-200 text-sm font-bold text-green-700">
                  ✓
                </div>

                <p className="text-sm leading-6 text-gray-700 sm:text-base">
                  {item}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* ================================================= */}
        {/* BOTTOM BUTTON */}
        {/* ================================================= */}

        <div className="pb-8 text-center">

          <button
            onClick={() => navigate("/types")}
            className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-7 py-3 font-semibold text-white shadow-sm transition hover:bg-blue-700 hover:shadow-md"
          >
            ← Back to All Crime Types
          </button>

        </div>

      </div>
    </div>
  );
}

export default CrimeDetails;
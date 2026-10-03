import { useState } from "react";

function Quiz() {
  const questions = [
    {
      question: "Which information should you never share with anyone?",
      options: ["OTP", "Password", "UPI PIN", "All of the above"],
      answer: "All of the above",
    },
    {
      question: "What should you do if you receive a suspicious link?",
      options: [
        "Click it immediately",
        "Share it with friends",
        "Verify it before clicking",
        "Reply with your password",
      ],
      answer: "Verify it before clicking",
    },
    {
      question: "Which password is the strongest?",
      options: [
        "12345678",
        "password123",
        "Reshu@123",
        "T#9kP!7zQ@42",
      ],
      answer: "T#9kP!7zQ@42",
    },
    {
      question: "What does OTP stand for?",
      options: [
        "One Time Password",
        "Online Transfer Password",
        "Only Trusted Password",
        "One Transfer Process",
      ],
      answer: "One Time Password",
    },
    {
      question: "Which of these is a common phishing method?",
      options: [
        "Fake emails",
        "Fake websites",
        "Fake messages",
        "All of the above",
      ],
      answer: "All of the above",
    },
    {
      question: "What should you do when using public Wi-Fi?",
      options: [
        "Do online banking",
        "Share passwords",
        "Avoid sensitive transactions",
        "Turn off device security",
      ],
      answer: "Avoid sensitive transactions",
    },
    {
      question: "What is two-factor authentication used for?",
      options: [
        "Making internet faster",
        "Adding an extra layer of security",
        "Deleting passwords",
        "Sharing account information",
      ],
      answer: "Adding an extra layer of security",
    },
    {
      question: "What should you do if someone asks for your OTP?",
      options: [
        "Share the OTP",
        "Ignore the request and never share the OTP",
        "Post the OTP online",
        "Send it to the caller",
      ],
      answer: "Ignore the request and never share the OTP",
    },
  ];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [score, setScore] = useState(0);
  const [userAnswers, setUserAnswers] = useState([]);
  const [showResult, setShowResult] = useState(false);

  const question = questions[currentQuestion];

  const handleAnswer = (option) => {
    setSelectedAnswer(option);
  };

  const handleNext = () => {
    if (!selectedAnswer) return;

    const updatedAnswers = [...userAnswers];
    updatedAnswers[currentQuestion] = selectedAnswer;

    setUserAnswers(updatedAnswers);

    if (selectedAnswer === question.answer) {
      setScore((prevScore) => prevScore + 1);
    }

    if (currentQuestion === questions.length - 1) {
      setShowResult(true);
    } else {
      setCurrentQuestion((prevQuestion) => prevQuestion + 1);
      setSelectedAnswer("");
    }
  };

  const restartQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswer("");
    setScore(0);
    setUserAnswers([]);
    setShowResult(false);
  };

  const progress =
    ((currentQuestion + 1) / questions.length) * 100;

  /* ================= RESULT PAGE ================= */

  if (showResult) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 pt-28 pb-10 sm:px-6 lg:px-8">

        <div className="mx-auto max-w-4xl">

          {/* Result Card */}
          <div className="rounded-3xl border border-gray-200 bg-white p-6 shadow-xl sm:p-10">

            {/* Result Header */}
            <div className="text-center">

              <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-blue-100 text-5xl">
                {score >= 6
                  ? "🏆"
                  : score >= 4
                  ? "🎯"
                  : "📚"}
              </div>

              <p className="mb-2 text-sm font-bold uppercase tracking-wider text-blue-600">
                Quiz Completed
              </p>

              <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                Great Job! 🎉
              </h1>

              <p className="mx-auto mt-3 max-w-xl text-gray-600">
                You have completed the Cyber Security Quiz.
                Check your score and review the correct answers below.
              </p>

              {/* Score Box */}
              <div className="mx-auto mt-8 max-w-sm rounded-2xl bg-gradient-to-r from-blue-600 to-indigo-600 p-6 text-white shadow-lg">

                <p className="text-sm font-medium text-blue-100">
                  Your Score
                </p>

                <p className="mt-2 text-5xl font-extrabold">
                  {score}
                  <span className="text-2xl text-blue-200">
                    /{questions.length}
                  </span>
                </p>

                <p className="mt-2 text-sm text-blue-100">
                  {Math.round(
                    (score / questions.length) * 100
                  )}
                  % Correct
                </p>

              </div>

              {/* Result Message */}
              <div className="mx-auto mt-6 max-w-2xl rounded-xl bg-gray-50 p-4 text-sm leading-6 text-gray-600">

                {score >= 6
                  ? "Excellent! You have a good understanding of cyber security. 🛡️"
                  : score >= 4
                  ? "Good attempt! Keep learning and improve your cyber security knowledge."
                  : "Keep practicing! Learning basic cyber security can help you stay safe online."}

              </div>

            </div>

            {/* ================= ANSWERS ================= */}

            <div className="mt-10">

              <div className="mb-6">

                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                  Review
                </p>

                <h2 className="mt-1 text-2xl font-extrabold text-gray-900 sm:text-3xl">
                  Correct Answers 📋
                </h2>

                <p className="mt-2 text-sm text-gray-500">
                  Review all questions and learn the correct answers.
                </p>

              </div>

              <div className="space-y-5">

                {questions.map((item, index) => {
                  const userAnswer = userAnswers[index];

                  const isCorrect =
                    userAnswer === item.answer;

                  return (
                    <div
                      key={index}
                      className="rounded-2xl border border-gray-200 bg-gray-50 p-5 transition duration-300 hover:-translate-y-1 hover:shadow-md"
                    >

                      {/* Question */}
                      <div className="flex gap-3">

                        <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-blue-600 text-sm font-bold text-white">
                          {index + 1}
                        </span>

                        <h3 className="pt-1 text-base font-bold leading-6 text-gray-800 sm:text-lg">
                          {item.question}
                        </h3>

                      </div>

                      {/* User Answer */}
                      <div
                        className={`mt-4 rounded-xl border p-4 ${
                          isCorrect
                            ? "border-green-200 bg-green-50"
                            : "border-red-200 bg-red-50"
                        }`}
                      >

                        <p
                          className={`text-xs font-bold uppercase tracking-wide ${
                            isCorrect
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          Your Answer
                        </p>

                        <p
                          className={`mt-1 font-semibold ${
                            isCorrect
                              ? "text-green-800"
                              : "text-red-800"
                          }`}
                        >
                          {isCorrect ? "✓" : "✕"}{" "}
                          {userAnswer || "Not answered"}
                        </p>

                      </div>

                      {/* Correct Answer */}
                      <div className="mt-3 rounded-xl border border-green-200 bg-white p-4">

                        <p className="text-xs font-bold uppercase tracking-wide text-green-600">
                          Correct Answer
                        </p>

                        <p className="mt-1 font-bold text-green-800">
                          ✓ {item.answer}
                        </p>

                      </div>

                    </div>
                  );
                })}

              </div>

            </div>

            {/* Try Again */}
            <div className="mt-8 text-center">

              <button
                onClick={restartQuiz}
                className="rounded-xl bg-blue-600 px-8 py-3 font-bold text-white shadow-md transition duration-200 hover:bg-blue-700 hover:shadow-lg active:scale-95"
              >
                🔄 Try Again
              </button>

            </div>

          </div>

        </div>

      </div>
    );
  }

  /* ================= QUIZ PAGE ================= */

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-indigo-100 px-4 pt-28 pb-10 sm:px-6 lg:px-8">

      <div className="mx-auto max-w-4xl">

        {/* Header */}
        <div className="mb-8 text-center">

          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-sm font-semibold text-blue-700">
            🛡️ CyberShield Quiz
          </div>

          <h1 className="text-3xl font-extrabold text-gray-900 sm:text-4xl md:text-5xl">
            Cyber Security Quiz
          </h1>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-6 text-gray-600 sm:text-base">
            Test your knowledge about cyber security, online scams,
            passwords, phishing and safe internet practices.
          </p>

        </div>

        {/* Quiz Card */}
        <div className="rounded-3xl border border-gray-200 bg-white p-5 shadow-xl sm:p-8 md:p-10">

          {/* Question Number + Score */}
          <div className="mb-5 flex items-center justify-between gap-4">

            <span className="rounded-full bg-blue-50 px-3 py-1.5 text-sm font-bold text-blue-600">
              Question {currentQuestion + 1} / {questions.length}
            </span>

            <span className="rounded-full bg-gray-100 px-3 py-1.5 text-sm font-semibold text-gray-600">
              Score: {score}
            </span>

          </div>

          {/* Progress Bar */}
          <div className="mb-8 h-2.5 w-full overflow-hidden rounded-full bg-gray-200">

            <div
              className="h-full rounded-full bg-gradient-to-r from-blue-500 to-indigo-600 transition-all duration-500"
              style={{
                width: `${progress}%`,
              }}
            ></div>

          </div>

          {/* Question */}
          <div className="mb-7">

            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-2xl">
              ❓
            </div>

            <h2 className="text-xl font-bold leading-8 text-gray-900 sm:text-2xl">
              {question.question}
            </h2>

            <p className="mt-2 text-sm text-gray-500">
              Select the correct answer
            </p>

          </div>

          {/* Options */}
          <div className="space-y-4">

            {question.options.map((option, index) => {

              const isSelected =
                selectedAnswer === option;

              return (
                <button
                  key={option}
                  onClick={() => handleAnswer(option)}
                  className={`group flex w-full items-center gap-4 rounded-2xl border-2 p-4 text-left transition-all duration-200 ${
                    isSelected
                      ? "border-blue-600 bg-blue-50 shadow-md"
                      : "border-gray-200 bg-white hover:-translate-y-0.5 hover:border-blue-300 hover:bg-blue-50/50 hover:shadow-sm"
                  }`}
                >

                  {/* A B C D */}
                  <span
                    className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl text-sm font-bold ${
                      isSelected
                        ? "bg-blue-600 text-white"
                        : "bg-gray-100 text-gray-600 group-hover:bg-blue-100 group-hover:text-blue-600"
                    }`}
                  >
                    {String.fromCharCode(65 + index)}
                  </span>

                  {/* Option Text */}
                  <span
                    className={`flex-1 text-sm font-semibold sm:text-base ${
                      isSelected
                        ? "text-blue-700"
                        : "text-gray-700"
                    }`}
                  >
                    {option}
                  </span>

                  {/* Check Circle */}
                  <span
                    className={`flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 text-xs ${
                      isSelected
                        ? "border-blue-600 bg-blue-600 text-white"
                        : "border-gray-300 text-transparent"
                    }`}
                  >
                    ✓
                  </span>

                </button>
              );
            })}

          </div>

          {/* Next Button */}
          <div className="mt-8 flex justify-end">

            <button
              onClick={handleNext}
              disabled={!selectedAnswer}
              className={`flex items-center gap-2 rounded-xl px-6 py-3 font-bold text-white shadow-md transition-all ${
                selectedAnswer
                  ? "bg-blue-600 hover:bg-blue-700 hover:shadow-lg active:scale-95"
                  : "cursor-not-allowed bg-gray-300"
              }`}
            >

              {currentQuestion === questions.length - 1
                ? "Finish Quiz"
                : "Next Question"}

              <span>→</span>

            </button>

          </div>

        </div>

        {/* Bottom Information Cards */}
        <div className="mt-8 grid gap-4 sm:grid-cols-3">

          {/* Card 1 */}
          <div className="rounded-2xl border border-blue-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="mb-3 text-2xl">
              🔐
            </div>

            <h3 className="font-bold text-gray-800">
              Protect Your Data
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500">
              Never share passwords, OTPs or PINs with anyone.
            </p>

          </div>

          {/* Card 2 */}
          <div className="rounded-2xl border border-indigo-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="mb-3 text-2xl">
              🎣
            </div>

            <h3 className="font-bold text-gray-800">
              Avoid Phishing
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500">
              Always verify suspicious links and messages.
            </p>

          </div>

          {/* Card 3 */}
          <div className="rounded-2xl border border-purple-100 bg-white p-5 shadow-sm transition duration-300 hover:-translate-y-1 hover:shadow-md">

            <div className="mb-3 text-2xl">
              🛡️
            </div>

            <h3 className="font-bold text-gray-800">
              Stay Secure
            </h3>

            <p className="mt-1 text-sm leading-5 text-gray-500">
              Use strong passwords and enable 2FA whenever possible.
            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Quiz;
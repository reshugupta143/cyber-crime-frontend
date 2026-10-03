import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async (e) => {
    e.preventDefault();

    // Basic validation
    if (!name || !email || !password) {
      alert("Please fill all fields");
      return;
    }

    if (password.length < 6) {
      alert("Password must be at least 6 characters");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/auth/register",
        {
          name: name,
          email: email,
          password: password,
        },
        {
          withCredentials: true,
        }
      );

      console.log("Registration Response:", response.data);

      alert(
        response.data.message || "Registration successful"
      );

      // Go to login page
      navigate("/login");

    } catch (error) {
      console.log("Registration Error:", error);

      console.log(
        "Backend Error:",
        error.response?.data
      );

      if (error.response?.data?.message) {
        alert(error.response.data.message);
      } else if (error.response?.data?.error) {
        alert(error.response.data.error);
      } else if (error.message) {
        alert(error.message);
      } else {
        alert("Registration failed");
      }
    }
  };

  return (
    <div className="
      min-h-screen
      w-full
      bg-gradient-to-br
      from-blue-50
      via-white
      to-indigo-100
      flex
      items-center
      justify-center
      px-5
      py-12
    ">

      {/* ================= REGISTER CARD ================= */}
      <form
        onSubmit={handleRegister}
        className="
          w-full
          max-w-md
          bg-white
          rounded-2xl
          shadow-xl
          border
          border-gray-200
          p-7
          sm:p-9
        "
      >

        {/* ================= ICON ================= */}
        <div className="flex justify-center mb-6">

          <div className="
            w-16
            h-16
            rounded-2xl
            bg-blue-100
            flex
            items-center
            justify-center
          ">
            <span className="text-3xl">
              🛡️
            </span>
          </div>

        </div>


        {/* ================= HEADING ================= */}
        <div className="text-center mb-8">

          <h1 className="
            text-3xl
            sm:text-4xl
            font-bold
            text-gray-800
          ">
            Create Account
          </h1>

          <p className="
            text-gray-500
            text-sm
            sm:text-base
            mt-3
          ">
            Register to access CyberShield
          </p>

        </div>


        {/* ================= FORM FIELDS ================= */}
        <div className="space-y-5">


          {/* ================= NAME ================= */}
          <div>

            <label className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-2
            ">
              Full Name
            </label>

            <input
              type="text"
              placeholder="Enter your name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="
                w-full
                px-4
                py-3.5
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                text-gray-800
                placeholder-gray-400
                outline-none
                transition
                duration-200
                focus:bg-white
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            />

          </div>


          {/* ================= EMAIL ================= */}
          <div>

            <label className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-2
            ">
              Email
            </label>

            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="
                w-full
                px-4
                py-3.5
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                text-gray-800
                placeholder-gray-400
                outline-none
                transition
                duration-200
                focus:bg-white
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            />

          </div>


          {/* ================= PASSWORD ================= */}
          <div>

            <label className="
              block
              text-sm
              font-semibold
              text-gray-700
              mb-2
            ">
              Password
            </label>

            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="
                w-full
                px-4
                py-3.5
                rounded-xl
                border
                border-gray-300
                bg-gray-50
                text-gray-800
                placeholder-gray-400
                outline-none
                transition
                duration-200
                focus:bg-white
                focus:border-blue-500
                focus:ring-4
                focus:ring-blue-100
              "
            />

            <p className="
              text-xs
              text-gray-400
              mt-2
            ">
              Password must be at least 6 characters.
            </p>

          </div>


          {/* ================= REGISTER BUTTON ================= */}
          <button
            type="submit"
            className="
              w-full
              mt-2
              py-3.5
              px-4
              rounded-xl
              bg-blue-600
              text-white
              font-semibold
              text-base
              shadow-md
              hover:bg-blue-700
              hover:shadow-lg
              active:scale-[0.98]
              transition-all
              duration-200
            "
          >
            Register
          </button>

        </div>


        {/* ================= LOGIN ================= */}
        <div className="
          text-center
          mt-7
          pt-6
          border-t
          border-gray-100
        ">

          <p className="text-sm text-gray-500">

            Already have an account?{" "}

            <Link
              to="/login"
              className="
                text-blue-600
                font-semibold
                hover:text-blue-700
                hover:underline
                transition
              "
            >
              Login
            </Link>

          </p>

        </div>

      </form>

    </div>
  );
}

export default Register;
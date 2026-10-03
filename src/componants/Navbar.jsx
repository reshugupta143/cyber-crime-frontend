import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();

  const [menuOpen, setMenuOpen] = useState(false);

  const logout = () => {
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
    setMenuOpen(false);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const navClass = ({ isActive }) =>
    `
      relative
      px-3
      py-2
      text-sm
      font-medium
      transition-all
      duration-200
      rounded-lg
      ${
        isActive
          ? "text-blue-600 bg-blue-50"
          : "text-gray-600 hover:text-blue-600 hover:bg-gray-50"
      }
    `;

  return (
    <nav className="
      fixed
      top-0
      left-0
      right-0
      z-50
      w-full
      h-16
      bg-white
      border-b
      border-gray-200
      shadow-sm
    ">

      {/* ================= NAVBAR CONTAINER ================= */}
      <div className="
        max-w-7xl
        mx-auto
        h-full
        px-5
        sm:px-8
        lg:px-10
        flex
        items-center
        justify-between
      ">


        {/* ================= LOGO ================= */}
        <NavLink
          to="/"
          onClick={closeMenu}
          className="
            flex
            items-center
            gap-2
            text-xl
            sm:text-2xl
            font-bold
            text-blue-600
            hover:text-blue-700
            transition-colors
            duration-200
            flex-shrink-0
          "
        >

          <span className="
            w-9
            h-9
            rounded-lg
            bg-blue-100
            flex
            items-center
            justify-center
            text-lg
          ">
            🛡️
          </span>

          <span>
            CyberShield
          </span>

        </NavLink>


        {/* ================= DESKTOP MENU ================= */}
        <div className="
          hidden
          lg:flex
          items-center
          gap-1
        ">

          <NavLink to="/" className={navClass}>
            Home
          </NavLink>

          <NavLink to="/types" className={navClass}>
            Types
          </NavLink>

          <NavLink to="/trending" className={navClass}>
            Trending
          </NavLink>

          <NavLink to="/security-tips" className={navClass}>
            Security Tips
          </NavLink>

          <NavLink to="/quiz" className={navClass}>
            Quiz
          </NavLink>

          <NavLink to="/about" className={navClass}>
            About
          </NavLink>


          {/* ================= LOGOUT ================= */}
          <button
            onClick={logout}
            className="
              ml-3
              px-4
              py-2
              rounded-lg
              bg-red-50
              text-red-600
              border
              border-red-100
              text-sm
              font-semibold
              hover:bg-red-600
              hover:text-white
              hover:border-red-600
              active:scale-95
              transition-all
              duration-200
            "
          >
            Logout
          </button>

        </div>


        {/* ================= MOBILE MENU BUTTON ================= */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="
            lg:hidden
            w-10
            h-10
            rounded-lg
            flex
            items-center
            justify-center
            text-gray-700
            bg-gray-50
            border
            border-gray-200
            hover:bg-blue-50
            hover:text-blue-600
            transition-all
            duration-200
          "
        >

          {menuOpen ? (
            <span className="text-2xl">
              ✕
            </span>
          ) : (
            <span className="text-2xl">
              ☰
            </span>
          )}

        </button>

      </div>


      {/* ================= MOBILE MENU ================= */}
      {menuOpen && (

        <div className="
          lg:hidden
          absolute
          top-16
          left-0
          right-0
          bg-white
          border-b
          border-gray-200
          shadow-lg
          px-5
          py-5
        ">

          <div className="
            flex
            flex-col
            gap-2
          ">

            <NavLink
              to="/"
              onClick={closeMenu}
              className={navClass}
            >
              Home
            </NavLink>

            <NavLink
              to="/types"
              onClick={closeMenu}
              className={navClass}
            >
              Types
            </NavLink>

            <NavLink
              to="/trending"
              onClick={closeMenu}
              className={navClass}
            >
              Trending
            </NavLink>

            <NavLink
              to="/security-tips"
              onClick={closeMenu}
              className={navClass}
            >
              Security Tips
            </NavLink>

            <NavLink
              to="/quiz"
              onClick={closeMenu}
              className={navClass}
            >
              Quiz
            </NavLink>

            <NavLink
              to="/about"
              onClick={closeMenu}
              className={navClass}
            >
              About
            </NavLink>


            {/* Mobile Logout */}
            <button
              onClick={logout}
              className="
                w-full
                mt-2
                px-4
                py-2.5
                rounded-lg
                bg-red-50
                text-red-600
                border
                border-red-100
                text-sm
                font-semibold
                hover:bg-red-600
                hover:text-white
                hover:border-red-600
                active:scale-[0.98]
                transition-all
                duration-200
              "
            >
              Logout
            </button>

          </div>

        </div>

      )}

    </nav>
  );
}

export default Navbar;
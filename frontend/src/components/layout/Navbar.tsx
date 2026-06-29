import { Link, NavLink } from "react-router-dom";
import assets from "../../assets/assets";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Experts", path: "/find-experts" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  const [showNav, setShowNav] = useState(false);
  return (
    // <nav className="text-sm px-10 py-4 border-b border-gray-200 flex items-center justify-between">
    <nav className="fixed w-screen top-0 z-40 bg-white/80 backdrop-blur-md text-sm px-10 py-4 border-b border-gray-200 flex items-center justify-between">
      {/* nav-left start */}
      <Link to={"/"}>
        <div className="flex items-center gap-2 ">
          <div className="logo-img | w-7">
            <img src={assets.logo} alt="CareerBridge Logo" />
          </div>
          <h1 className="text-xl font-bold">CareerBridge</h1>
        </div>
      </Link>
      {/* nav-left end */}

      {/* nav-center start */}
      <div className="hidden md:flex items-center justify-center gap-4 w-1/2">
        {navLinks.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `border-b-2 pb-1 transition-colors ${
                isActive
                  ? "border-blue-500 text-blue-600 font-semibold"
                  : "text-gray-600 border-transparent hover:text-blue-600"
              }`
            }
          >
            {link.name}
          </NavLink>
        ))}
      </div>
      {/* nav-center end */}

      {/* nav-right start */}
      <div className="hidden md:flex gap-2 justify-end  ">
        <Link
          to="/login"
          className="px-7 py-1 rounded hover:bg-blue-500 hover:text-white transition"
        >
          Login
        </Link>

        <Link
          to="/register"
          className="px-7 py-1 rounded bg-blue-500 text-white hover:bg-blue-600 transition"
        >
          Register
        </Link>
      </div>
      {/* nav-right end */}

      {/* Mobile nav start */}
      <div className="flex md:hidden">
        <Menu onClick={() => setShowNav(!showNav)} />
        {/* mobile side-bar start */}
        <div
          className={`fixed inset-y-0 ${
            showNav ? "right-0" : "-right-full"
          } w-70 max-w-[80vw] bg-[#216DFF] text-white p-5 transition-all duration-300 flex flex-col justify-between z-50`}
        >
          {/* top cross start */}
          <div className="flex justify-end">
            <div
              className=" bg-[#FFFFFF] text-black p-2 rounded-full w-fit"
              onClick={() => setShowNav(!showNav)}
            >
              <X />
            </div>
          </div>
          {/* top cross end */}
          {/* mobile link start */}
          <div className="flex flex-col justify-center h-1/2">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) => `text-2xl ${isActive ? "" : ""}`}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
          {/* mobile link end */}

          {/* mobile footer start */}
          <div>@2026 careerBridge. all right resereved.</div>
          {/* mobile footer end */}
        </div>

        {/* mobile side-bar end */}
      </div>
      {/* Mobile nav end */}
    </nav>
  );
};

export default Navbar;

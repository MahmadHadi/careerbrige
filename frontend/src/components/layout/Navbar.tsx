import { Link, NavLink } from "react-router-dom";
import assets from "../../assets/assets";

const Navbar = () => {
  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Find Experts", path: "/find-experts" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];
  return (
    <nav className="text-sm px-10 py-4 border-b border-gray-200 flex items-center justify-between ">
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
      <div className="flex items-center justify-center gap-4 w-1/2">
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
      <div className=" flex gap-2 justify-end ">
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
    </nav>
  );
};

export default Navbar;

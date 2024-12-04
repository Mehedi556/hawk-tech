import { ArrowRight } from "lucide-react";
import logo from "../../src/assets/logo.png";

const Navbar = () => {
  return (
    <nav className="bg-slate-700 text-white px-5">
      <div
        className={`max-w-[1280px] flex items-center justify-between mx-auto py-1 sm:py-3 px-0 lg:px-0`}
      >
        <a to="/" className="flex items-center space-x-3">
          <img src={logo} className="h-12 w-14" alt="Nursery Logo" />
          <span className="self-center text-xl sm:text-2xl font-bold whitespace-nowrap text-green-500">
            HawkTech
          </span>
        </a>

        <div
          className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-search"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-semibold border rounded-lg md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0   ">
            <button to="/" className="block py-2 px-3 hover:text-white md:p-0">
              Home
            </button>

            <button
              to="/facilities"
              className="block py-2 px-3 hover:text-white md:p-0"
            >
              Services
            </button>

            <button
              to="/about"
              className="block py-2 px-3 hover:text-white md:p-0"
            >
              About us
            </button>

            <button
              to="/contact"
              className="block py-2 px-3 hover:text-white md:p-0"
            >
              Contact us
            </button>
          </ul>
        </div>

        <div className="flex justify-center items-center md:order-2">
          <button className="relative flex items-center gap-2 px-4 sm:px-8 py-0 sm:py-2 border-4 border-transparent text-[16px] bg-transparent rounded-full font-semibold text-green-500 shadow-[0_0_0_2px_rgba(0,255,0,1)] overflow-hidden cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] hover:shadow-[0_0_0_12px_transparent] hover:text-green-400 hover:rounded-lg active:scale-95">
            <ArrowRight className="hidden sm:block absolute w-6 fill-current right-4 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:right-[-25%]" />
            <span className="relative z-10 translate-x-[-0px] sm:translate-x-[-12px] transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:translate-x-[12px]">
              Book Now
            </span>
            <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-5 h-5 bg-green-400 rounded-full opacity-0 transition-all duration-800 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:w-[220px] group-hover:h-[220px] group-hover:opacity-100"></span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

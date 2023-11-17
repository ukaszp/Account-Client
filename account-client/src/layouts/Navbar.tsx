import { Menu } from "lucide-react";
import logo from "../assets/logo.png";

export default function Navbar() {
  return (
    <div className="flex justify-between gap-10 bg-primary text-secondary max-h-16">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button className="p-2 hover:bg-slate-400 rounded-full md:hidden lg:hidden">
          <Menu />
        </button>
        <a href="/">
          <img src={logo} className="p-1 h-16" />
        </a>
      </div>
      <ul className="gap-6 items-center flex-shrink-0 font-poppins text-xl lg:gap-20 md:gap=15 justify-center hidden sm:flex">
        <li>
          <a href="/" className="hover:border-b-2 p-1 uppercase">
            about us
          </a>
        </li>
        <li>
          <a href="/" className="hover:border-b-2 p-1 uppercase">
            services
          </a>
        </li>
        <li>
          <a href="/" className="hover:border-b-2 p-1 uppercase">
            contact
          </a>
        </li>
        <li>
          <a href="/" className="hover:border-b-2 p-1 uppercase">
            offer
          </a>
        </li>
      </ul>
      <div className="flex gap-6 items-center flex-shrink-0 font-poppins text-xl lg:gap-5 p-3 flex-col lg:flex-row">
        <button
          type="submit"
          className="uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </button>
        <button
          type="submit"
          className="uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary mt-2 lg:mt-0"
        >
          Sign up
        </button>
      </div>
    </div>
  );
}

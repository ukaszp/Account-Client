import { Menu } from "lucide-react";
import logo from "../assets/logo.png";
import {  Link } from "react-router-dom";
import  useAuthStore  from "../scripts/authLoginStore";
import { useEffect } from "react";
import { APPLICATION_ROLES } from "@/config";

export default function Navbar():JSX.Element {
  const user = useAuthStore((state) => state.user);
  const userRole = useAuthStore((state) => state.user?.roleId);
  const logout = useAuthStore((state) => state.logout);
  useEffect(() => {console.log(user);}, [user]);

  return (
    <div className="flex justify-between gap-10 bg-primary text-secondary max-h-14">
      <div className="flex gap-4 items-center flex-shrink-0">
        <button className="p-2 hover:bg-slate-400 rounded-full md:hidden lg:hidden">
          <Menu />
        </button>
        <a href="/">
          <img src={logo} className="p-1 h-14" />
        </a>
      </div>
      <ul className="gap-6 items-center flex-shrink-0 font-poppins text-large lg:gap-20 md:gap=15 justify-center hidden sm:flex">
        <li>
          <Link to="/" className="p-1 uppercase border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition duration-500">
            about us
          </Link>
        </li>
        <li>
          <Link to="/" className="p-1 uppercase border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition duration-500">
            services
          </Link>
        </li>
        <li>
          <Link to="/" className="p-1 uppercase border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition duration-500">
            contact
          </Link>
        </li>
        <li>
          <Link to="/" className="p-1 uppercase border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition duration-500">
            offer
          </Link>
        </li>
      </ul>
      <div className="flex gap-6 items-center flex-shrink-0 font-poppins text-xl lg:gap-5 p-3 flex-col lg:flex-row">

      {user ? (
        
        <>
        {userRole === APPLICATION_ROLES.ADMIN && (
           <Link
           to="/admin/panel"
           type="submit"
           className="transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
         >
           Admin panel
         </Link>
        )}
        <button
        onClick={logout}
        className="transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

          Log Out
        </button>
        </>
      ): (
        <div className="flex gap-6 items-center flex-shrink-0 font-poppins text-xl lg:gap-5 p-3 flex-col lg:flex-row">
        <Link
          to="/"
          type="submit"
          className="transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
        >
          Sign in
        </Link>
        <Link
          to="/register"
          type="submit"
          className="transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary mt-2 lg:mt-0"
        >
          Sign up
        </Link>
        </div>
      )}
      </div>
    </div>
  );
}

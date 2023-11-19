import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-5 lg:px-8 bg-primary rounded-lg font-poppins  ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100 uppercase">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" action="#" method="POST">
            <div className="flex flex-row gap-4">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-small leading-6 text-gray-100 uppercase"
                >
                  Name
                </label>
                <div className="mt-2 p-0.5 bg-secondary rounded-md">
                  <input
                    id="name"
                    name="name"
                    type="name"
                    autoComplete="name"
                    required
                    className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="lastname"
                    className="block text-xs font-small leading-6 text-gray-100 uppercase"
                  >
                    Last name
                  </label>
                  <div className="mt-2 p-0.5 bg-secondary rounded-md">
                    <input
                      id="lastname"
                      name="lastname"
                      type="lastname"
                      autoComplete="lastname"
                      required
                      className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="flex flex-row gap-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-xs font-small leading-6 text-gray-100 uppercase"
                >
                  Email address
                </label>
                <div className="mt-2 p-0.5 bg-secondary rounded-md">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <div>
                  <label
                    htmlFor="gender"
                    className="block text-xs font-small leading-6 text-gray-100 uppercase"
                  >
                    Gender
                  </label>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid 
                    border-gray-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent 
                    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-['']
                     checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] 
                     checked:after:rounded-full checked:after:border-primary checked:after:bg-secondary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] 
                     hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 
                     focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                     checked:focus:border-blue-80 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#789ad0] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
                      dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_
                        rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault01"
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-xs font-small leading-6 text-gray-100 uppercase"
                      htmlFor="radioDefault01"
                    >
                      Male
                    </label>
                  </div>
                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-1 mt-0.5 h-5 w-5 appearance-none rounded-full border-2 border-solid 
                    border-gray-500 before:pointer-events-none before:absolute before:h-4 before:w-4 before:scale-0 before:rounded-full before:bg-transparent 
                    before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] after:absolute after:z-[1] after:block after:h-4 after:w-4 after:rounded-full after:content-['']
                     checked:border-white checked:before:opacity-[0.16] checked:after:absolute checked:after:left-1/2 checked:after:top-1/2 checked:after:h-[0.625rem] checked:after:w-[0.625rem] 
                     checked:after:rounded-full checked:after:border-primary checked:after:bg-secondary checked:after:content-[''] checked:after:[transform:translate(-50%,-50%)] 
                     hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:outline-none focus:ring-0 focus:before:scale-100 
                     focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] 
                     checked:focus:border-blue-80 checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#789ad0] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s]
                      dark:border-neutral-600 dark:checked:border-primary dark:checked:after:border-primary dark:checked:after:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_
                        rgba(255,255,255,0.4)] dark:checked:focus:border-primary dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="radio"
                      name="flexRadioDefault"
                      id="radioDefault02"
                      defaultChecked
                    />
                    <label
                      className="mt-px inline-block pl-[0.15rem] hover:cursor-pointer text-xs font-small leading-6 text-gray-100 uppercase"
                      htmlFor="radioDefault02"
                    >
                      Female
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-xs font-small leading-6 text-gray-100 uppercase"
              >
                Phone Number
              </label>
              <div className="mt-2 p-0.5 bg-secondary rounded-md">
                <input
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="email"
                  required
                  className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-small leading-6 text-gray-100 uppercase"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <div className="mt-2 p-0.5 bg-secondary rounded-md">
                  <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="current-password"
                    required
                    className="pl-2 block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="password"
                  className="block text-xs font-small leading-6 text-gray-100 uppercase"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <div className="mt-2 p-0.5 bg-secondary rounded-md">
                  <input
                    id="confirmpassword"
                    name="confirmpassword"
                    type="confirmpassword"
                    autoComplete="current-password"
                    required
                    className="pl-2 block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="transition ease-in-out duration-500 flex w-full justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm text-gray-300">
            You already have account?{" "}
            <Link
              to="/"
              className="font-semibold leading-6 text-secondary hover:text-white transition ease-in-out duration-300 hover:font-bold"
            >
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

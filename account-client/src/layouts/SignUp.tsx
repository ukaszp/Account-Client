import { Link } from "react-router-dom";
import {useFormik} from "formik";
import * as Yup from "yup";
import useAuthStore from '../scripts/useAuthStore';

export default function SignUp():JSX.Element {

    const { register, isAuthenticated, registrationError } = useAuthStore();
  

  const formik = useFormik({
    initialValues: {
      name: "",
      lastname: "",
      email: "",
      gender: true, //true for male, false for female
      password: "",
      confirmpassword: "",
      contactnumber:""
    },
    onSubmit: async (values, formikHelpers) => {
      try {
        await register(values, formikHelpers);
        console.log('Form submitted successfully!');
      } catch (error) {
        console.error('An error occurred during form submission:', error);
      }
    },
    
    validationSchema: Yup.object({
      name: Yup.string()
      .required('*Name is required')
      .matches(/^[A-Za-z]+$/, "*Only letters are allowed"),
      lastname: Yup
      .string().required('*Lastname is required')
      .matches(/^[A-Za-z]+$/, "*Only letters are allowed"),
      email: Yup.string()
      .required('*Email is required')
      .email('*invalid email address'),
      contactnumber: Yup.string()
      .required('*phone number is required')
      .matches(/^[0-9]{9}( |)$/, "*Invalid phone number format")
      .max(9, '*Your number is too long')
      .min(9, '*You missed some digits'),
      password: Yup.string()
      .required('*enter your password')
      .min(5, '*Must be at least 5 characters'),
      confirmpassword: Yup.string()
        .oneOf([Yup.ref('password')], '*passwords are not the same')
        .required('*confirm your password'),
    })
  
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 pb-5 lg:px-8 bg-primary rounded-lg font-poppins max-w-[40rem] ">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-100 uppercase">
            Sign up
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form className="space-y-6" 
          onSubmit={formik.handleSubmit}
          >
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
                    placeholder="Name"
                    name="name"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="block text-xs font-small leading-6 text-red-400 uppercase bg-primary p-1">
                    {formik.touched.name && formik.errors.name}
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
                      placeholder="Last name"
                      name="lastname"
                      value={formik.values.lastname}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                    />
                  </div>
                  <div className="block text-xs font-small leading-6 text-red-400 uppercase p-1">
                    {formik.touched.lastname && formik.errors.lastname}
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
                    placeholder="Email address"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="block text-xs font-small leading-6 text-red-400 uppercase p-1">
                    {formik.touched.email && formik.errors.email}
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
                        checked={formik.values.gender===true}
                        onChange={() => formik.setFieldValue('gender', true)}
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
                        checked={formik.values.gender===false}
                        onChange={() => formik.setFieldValue('gender', false)}
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
                htmlFor="phonenumber"
                className="block text-xs font-small leading-6 text-gray-100 uppercase"
              >
                Phone Number
              </label>
              <div className="mt-2 p-0.5 bg-secondary rounded-md">
                <input
                  placeholder="Phone number"
                  name="contactnumber"
                  value={formik.values.contactnumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  autoComplete="tel"
                  inputMode="tel"
                  maxLength={9}
                  className="font-sm pl-2 text-poppins block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                />
                  </div>
                <div className="block text-xs font-small leading-6 text-red-400 uppercase p-1">
                    {formik.touched.contactnumber && formik.errors.contactnumber}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="Password"
                  className="block text-xs font-small leading-6 text-gray-100 uppercase"
                >
                  Password
                </label>
              </div>
              <div className="mt-2">
                <div className="mt-2 p-0.5 bg-secondary rounded-md">
                  <input
                    type="password"
                    placeholder="Password"
                    name="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="current-password"
                    className="pl-2 block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="block text-xs font-small leading-6 text-red-400 uppercase p-1">
                    {formik.touched.password && formik.errors.password}
                  </div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label
                  htmlFor="confirmpassword"
                  className="block text-xs font-small leading-6 text-gray-100 uppercase"
                >
                  Confirm Password
                </label>
              </div>
              <div className="mt-2">
                <div className="mt-2 p-0.5 bg-secondary rounded-md">
                  <input
                    type="password"
                    placeholder="Confirm password"
                    name="confirmpassword"
                    value={formik.values.confirmpassword}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    autoComplete="current-password"
                    className="pl-2 block w-full rounded-md border-0  py-1.5 text-gray-900 shadow-sm ring-2 ring-inset ring-primary placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-gray-300 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="block text-xs font-small leading-6 text-red-400 uppercase p-1">
                    {formik.touched.confirmpassword && formik.errors.confirmpassword}
                  </div>
              </div>
            </div>

            <div>
              <button
                type="submit"
                disabled={formik.isSubmitting}
                className="transition ease-in-out duration-500 flex w-full justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Sign up
              </button>
              <div className="block text-xs font-small leading-6 text-white uppercase p-1">
                {isAuthenticated && <p>Registration successful!</p>}
              </div>
              <div className="block text-xs font-small leading-6 text-red-400 uppercase p-1">
               {registrationError && <p>Error: {registrationError}</p>}
              </div>
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
          {formik.touched.email && formik.errors.email && (
          <div>{formik.errors.email}</div>
        )}
        {formik.touched.password && formik.errors.password && (
          <div>{formik.errors.password}</div>
        )}
        </div>
      </div>
    </>
  );
}

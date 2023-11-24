import { useEffect, useState } from "react";
import useUserStore from "@/scripts/usersStore";
import { Link, useParams } from "react-router-dom";
import User from "../userInterface";
import { XSquare } from "lucide-react";
import { Avatar } from "@material-tailwind/react";
import MaleAvatar from "@/assets/male_avatar.svg";
import FemaleAvatar from "@/assets/female_avatar.svg";
import {useFormik} from "formik";
import { date } from "yup";
import * as Yup from "yup";
import { APPLICATION_ROLES } from "@/config";

const UserEdit = () => {
  const { id } = useParams();
  const { getUserById, editUser } = useUserStore();
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchUser = async () => {
      const maybeUser: User | null = await getUserById(Number(id));

      if (maybeUser !== null) {
        const user: User = maybeUser;
        setCurrentUser(user);
      } else {
        setCurrentUser(null);
      }
    };

    fetchUser();
  }, [id, getUserById]);

  const datestring = { time: currentUser?.whenJoined };
  let dateObject = null;

  if (datestring.time) {
    dateObject = new Date(datestring.time);
  } else {
    console.error("Invalid or undefined date string");
  }

  const formik = useFormik({
    initialValues: {
      name: currentUser?.name || "",
      lastname: currentUser?.lastName|| "",
      email: currentUser?.email|| "",
      contactnumber:currentUser?.contactNumber || "",
      gender: currentUser?.gender || true,
    },
    onSubmit: async (values, formikHelpers) => {
      try {
        await editUser(values, formikHelpers);
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
    <div className="w-[70rem] bg-opacity-90 bg-primary rounded-xl p-7  mt-0 pt-0 pr-4 text-secondary justify-center max-h-[42rem] min-h-[40rem]">
      <div className="flex flex-col flex-1 text-secondary">
        <div className="self-end mt-3">
          <Link className="mt-0 pt-0" to="/admin/panel/users">
            <XSquare className="opacity-80 hover:opacity-100" />
          </Link>
        </div>
        <div className="m-12 border-[0.2rem] mx-[7rem] rounded-md">
          <div className="profileBackground h-[5rem]">
            <Avatar
              src={currentUser?.gender === true ? MaleAvatar : FemaleAvatar}
              alt="avatar"
              variant="rounded"
              size="lg"
              className="mt-10 bg-slate-600 border-[0.2rem] rounded-full w-[4.5rem] [4.5rem] mx-6"
            ></Avatar>
          </div>
          <div className="flex flex-row justify-center p-3 mt-2 text-xl font-bold">
            <div className="flex flex-row justify-center border-b-2">
              <p className="p-1 uppercase">{currentUser?.name}</p>
              <p className="p-1 uppercase ">{currentUser?.lastName}</p>
            </div>
          </div>
          <div>
            <form 
            className="flex flex-row justify-center mt-[2rem] mb-[2rem]"
            onSubmit={formik.handleSubmit}>
              <div className="flex-col ml-[12rem]">
                <div className="flex flex-col my-2">
                  <span className="font-semibold text-md">Email</span>
                  <input 
                  className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md"
                  defaultValue={currentUser?.email}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <span className="font-semibold text-md">Contact number</span>
                  <input 
                  className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md"
                  defaultValue={currentUser?.contactNumber}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  />
                </div>
                <div className="flex flex-col my-2">
                  <span className="font-semibold text-md">Gender</span>
                  {currentUser?.gender === true ? (
                    <p className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md">
                      Male
                    </p>
                  ) : (
                    <p className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md">
                      Female
                    </p>
                  )}
                </div>
                <Link
                  className="mt-10 transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  to={`/admin/panel/users/edit/${currentUser?.id}`}
                >
                  Edit user
                </Link>
              </div>

              <div className="flex flex-col">
                <div className="flex flex-col mx-[10rem] my-2">
                  <span className="font-semibold text-md">Name</span>
                  <p className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md">
                    {dateObject ? (
                      <div>{dateObject.toLocaleDateString()}</div>
                    ) : (
                      <div>invalid data</div>
                    )}
                  </p>
                  <div className="flex flex-col my-2">
                    <span className="font-semibold text-md">Last Name</span>
                    {currentUser?.roleId === APPLICATION_ROLES.ADMIN ? (
                      <p className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md">
                        Admin
                      </p>
                    ) : (
                      <p className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md">
                        User
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col my-2">
                    <span className="font-semibold text-md">{"‎"}</span>
                    <p className="bg-white bg-opacity-10 p-2 my-1 text-gray-200 rounded-md">
                      {"‎"}
                    </p>
                  </div>
                  <Link
                  className="mt-6 transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border-2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-secondary hover:text-primary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  to={`/admin/panel/users/edit/${currentUser?.id}`}
                >
                  Assign role
                </Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserEdit;

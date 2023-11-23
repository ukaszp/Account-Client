import { Route, Routes} from "react-router-dom";
import Navbar from "./layouts/Navbar";
import SignUp from "./layouts/SignUp";
import BgImage from "./assets/background.jpg";
import Footer from "./layouts/Footer";
import AdminPanel from "./layouts/AdminPanel";
import AuthPage from "./layouts/AuthPage";
import useAuthStore from "./scripts/authLoginStore";
import { APPLICATION_ROLES } from "./config";



export default function App():JSX.Element {
  const user = useAuthStore((state) => state.user);
  

  return (
    <div className="max-h-screen flex flex-col">
      <div className="fixed w-screen h-12 top-0">
        <Navbar></Navbar>
      </div>
      <div
        className="flex justify-center items-center p-20 bg-cover bg-center min-h-[85vh] mt-[2rem]" 
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="flex justify-center p-15 w-full">
          <Routes >
              <Route path="/" element={<AuthPage/>}/>
              <Route path="/register" element={<SignUp/>}/>              
              /*{user?.roleId === APPLICATION_ROLES.ADMIN? <Route path="/admin/panel" element={<AdminPanel/>}/> : null}*/
              <Route path="/admin/panel/*" element={<AdminPanel/>}/> 
          </Routes>
        </div>
      </div>
      <div className="sticky bottom-0"><Footer/></div>
    </div>
  );
}

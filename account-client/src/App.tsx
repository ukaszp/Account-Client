import { Route, Routes} from "react-router-dom";
import Navbar from "./layouts/Navbar";
import SignUp from "./layouts/SignUp";
import BgImage from "./assets/background.jpg";
import Footer from "./layouts/Footer";
import SignIn from "./layouts/SignIn";


export default function App() {
  return (
    <div className="max-h-screen flex flex-col">
      <div className="sticky top-0">
        <Navbar></Navbar>
      </div>
      <div
        className="flex justify-center items-center p-20 bg-cover bg-center min-h-[85vh]"
        style={{
          backgroundImage: `url(${BgImage})`,
        }}
      >
        <div className="flex justify-center p-15 max-w-xl w-full">
          <Routes >
            <Route path="/" element={<SignIn/>}/>
            <Route path="/register" element={<SignUp/>}/>
          </Routes>
        </div>
      </div>
      <div className="sticky bottom-0"><Footer/></div>
    </div>
  );
}

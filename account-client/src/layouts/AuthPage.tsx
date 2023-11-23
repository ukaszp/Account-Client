import { Route, Routes } from "react-router-dom";
import SignUp from "./SignUp";
import SignIn from "./SignIn";

const AuthPage = () => {
    return (

    <div className="flex gap-1">
        <Routes>
         <Route path="/" element={<SignIn/>}/>
         <Route path="/register" element={<SignUp/>}/>
        </Routes>
        
    </div>
        )
}

export default AuthPage;
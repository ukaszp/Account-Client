import Navbar from "./layouts/Navbar";
import SignUp from "./layouts/SignUp";
import BgImage from "./assets/background.jpg"
import Footer from "./layouts/Footer"

export default function App(){
    return(
        <div className="max-h-screen flex flex-col " >
            <Navbar></Navbar>
            <div className="flex justify-center items-center p-20 bg-cover bg-center min-h-[78.2vh]"
            style={{
                backgroundImage: `url(${BgImage})`,
            }}>
                <div className="flex justify-center p-15 max-w-xl w-full">
                    <SignUp></SignUp>
                </div>
             </div>
             <Footer></Footer>
            
        </div>
        
    )
}
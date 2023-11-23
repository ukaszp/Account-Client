import { AdminSideNav } from "@/components/ui/AdminPanel/adminSideNav";
import AdminUsers from "@/components/ui/AdminPanel/adminUsers";
import useAuthStore from "@/scripts/authLoginStore";
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import UserInfo from "@/components/ui/AdminPanel/userInfo";

const AdminPanel = () => {
    const user = useAuthStore((state) => state.user);

    return (

    <div className="flex gap-1">
        <div className="left-0 ">
            <AdminSideNav/>
        </div>
        <div>
            <Routes>
                <Route path="/" element={<AdminUsers/>}/>
                <Route path="/users" element={<AdminUsers/>}/>
                <Route path="/users/profile/:id" element={<UserInfo/>}/>
            </Routes>
        </div>
    </div>

    )
}

export default AdminPanel;
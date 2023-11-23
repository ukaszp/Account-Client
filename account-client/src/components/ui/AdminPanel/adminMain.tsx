import useAuthStore from "@/scripts/authLoginStore";

const AdminMain = () => {
    const user = useAuthStore((state) => state.user);

    return (

    <div className="w-[95rem] bg-opacity-90 bg-primary rounded-xl p-7 min-h-[75vh] text-secondary">
        <p>Zalogowano, jako: {user?.name}</p>
        <p>Rola: {user?.roleId === 1? "Administrator" : "User"}</p>
    </div>

    )
}

export default AdminMain;
import useAuthStore from "@/scripts/authLoginStore";

const AdminMain = () => {
    const user = useAuthStore((state) => state.user);

    return (

        <div className="w-[70rem] bg-opacity-90 bg-primary rounded-xl p-7  mt-0 pt-0 pr-4 text-secondary justify-center max-h-[42rem] min-h-[42rem]">
        <p>Zalogowano, jako: {user?.name}</p>
        <p>Rola: {user?.roleId === 1? "Administrator" : "User"}</p>
    </div>

    )
}

export default AdminMain;
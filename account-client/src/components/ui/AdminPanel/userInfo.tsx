import { useEffect, useState } from "react";
import useUserStore from "@/scripts/usersStore";
import { useParams } from "react-router-dom";
import User from "../userInterface";

const UserInfo = () => {
    const {id} = useParams();
    const { getUserById } = useUserStore();
    const [currentUser, setCurrentUser] = useState<User | null>(null);

    useEffect(() => {
        const fetchUser = async () => {
          const maybeUser: User | null  = await getUserById(Number(id));
          if(maybeUser !== null) {
            const user: User = maybeUser;
            setCurrentUser(user);
          }
          else {
            setCurrentUser(null);
          }
        };
    
        fetchUser();
      }, [id, getUserById]);
    
    return(
    <div className="flex w-[70rem] bg-opacity-90 bg-primary rounded-xl p-7  text-secondary justify-center max-h-[48rem] min-h-[43.5rem]">
        { currentUser ? currentUser.name : "User not found"}
    </div>
    )
}

export default UserInfo;
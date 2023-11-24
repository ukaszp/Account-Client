import {
    Popover,
    PopoverHandler,
    PopoverContent,
    Button,
    Typography,
  } from "@material-tailwind/react";
  import useUserStore from "@/scripts/usersStore";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import User from "../userInterface";
   
  const SubscriptionPopover = () => {
    const {id} = useParams();
    const { getUserById } = useUserStore();

    useEffect(() => {
        const fetchUser = async () => {
          const maybeUser: User | null  = await getUserById(Number(id));
          try{
            const user: User = maybeUser;
            setCurrentUser(user);
          }
          catch(err) {
            console.log(err);
          }
        };
    
        fetchUser();
      }, [id, getUserById]);


    return (
      <Popover placement="bottom">
        <PopoverHandler>
          <Button>Subscribe</Button>
        </PopoverHandler>
        <PopoverContent className="flex justify-center">
          <Typography variant="h6" color="blue-gray" className="mb-6">
            Are you sure, you want to delete this user? this action is irreversible
          </Typography>
          <Typography
            variant="small"
            color="blue-gray"
            className="mb-1 font-bold"
          >
            Cancel
          </Typography>
          <div className="flex gap-2">
            <Button variant="gradient" className="flex-shrink-0">
              Delete
            </Button>
          </div>
        </PopoverContent>
      </Popover>
    );
  };

  export default SubscriptionPopover;

function setCurrentUser(user: User) {
    throw new Error("Function not implemented.");
}

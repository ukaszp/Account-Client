import useUserStore from "@/scripts/usersStore";
import * as ScrollArea from "@radix-ui/react-scroll-area";
import { useEffect } from "react";
import User from "../userInterface";
import { Avatar, Button } from "@material-tailwind/react";
import MaleAvatar from "@/assets/male_avatar.svg";
import FemaleAvatar from "@/assets/female_avatar.svg";
import { ChevronDown } from "lucide-react";
import UserInfo from  "./userInfo"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Link } from "react-router-dom";

const AdminUsers = () => {
  const { selectedUser, users, getAllUsers, setSelectedUser } = useUserStore();

  useEffect(() => {
    getAllUsers();
  }, []);

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };
  return (
    <div className="flex w-[70rem] bg-opacity-90 bg-primary rounded-xl p-7  text-secondary justify-center max-h-[48rem] min-h-[43.5rem]">
      <div>
        <p className="p-1 uppercase border-b-2 border-transparent hover:border-b-2 hover:border-secondary transition duration-500 text-xl flex justify-center pb-5">Users</p>
        <ScrollArea.Root className="w-[30rem] border-secondary border-2 rounded-lg">
          <ScrollArea.Viewport className="w-full max-h-[35rem] rounded">
            <div className="p-4">
              <ul>
                {users.map((user) => (
                  <li
                    key={user.id}
                    onClick={() => handleUserClick(user)}
                    style={{ cursor: "pointer" }}
                    className="py-1"
                  >
                    <div className="flex min-w-0 gap-x-4 text-gray-100 p-1">
                      {user.gender === true ? (
                        <Avatar
                          src={MaleAvatar}
                          alt="avatar"
                          variant="rounded"
                          size="md"
                          className="border rounded-full"
                        ></Avatar>
                      ) : (
                        <Avatar
                          src={FemaleAvatar}
                          alt="avatar"
                          size="md"
                          variant="rounded"
                          className="border rounded-full"
                        ></Avatar>
                      )}
                      <div className="min-w-0 flex-auto">
                        <p className="text-sm font-semibold leading-6 text-gray-100">
                          {user.name} {user.lastName}
                        </p>
                        <p className="mt-1 truncate text-xs leading-5 text-gray-100">
                          {user.email}
                        </p>
                      </div>
                      <div className="ml-5 min-w-0 gap-x-4 p-1 text-sm font-semibold leading-6 text-gray-100">
                        <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                          <DropdownMenu>
                            <DropdownMenuTrigger asChild>
                              <Button className="p-1.5 text-thin text-poppins font-light transition ease-in-out duration-300 uppercase flex w-full lg:w-auto justify-center rounded-md bg-primary border px-1 py-1.5 text-white shadow-sm hover:bg-secondary hover:text-primary">
                                Options<ChevronDown size={16} strokeWidth={3} className=" pl-1"/>
                              </Button>
                            </DropdownMenuTrigger>
                            {selectedUser && user.id === selectedUser.id && (
                              <DropdownMenuContent className="w-56 bg-zinc-900 text-gray-200">
                                <DropdownMenuLabel className="flex justify-center">
                                  {selectedUser.name} {selectedUser.lastName}
                                </DropdownMenuLabel>
                                <DropdownMenuSeparator />
                                <DropdownMenuGroup>
                                <Link to={`profile/${selectedUser.id}`}><DropdownMenuItem>LProfile</DropdownMenuItem></Link>
                                  <DropdownMenuItem>Edit</DropdownMenuItem>
                                  <DropdownMenuItem>Settings</DropdownMenuItem>
                                  <DropdownMenuItem>
                                    Keyboard shortcuts
                                  </DropdownMenuItem>
                                </DropdownMenuGroup>
                              </DropdownMenuContent>
                            )}
                          </DropdownMenu>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </ScrollArea.Viewport>
          <ScrollArea.Scrollbar
            className="flex select-none touch-none p-0.5 bg-blackA3 transition-colors duration-[160ms] ease-out hover:bg-blackA5 data-[orientation=vertical]:w-2.5 data-[orientation=horizontal]:flex-col data-[orientation=horizontal]:h-2.5"
            orientation="vertical"
          >
            <ScrollArea.Thumb className="flex-1 bg-gray-500 bg-opacity-30 rounded-[10px] relative before:content-[''] before:absolute before:top-1/2 before:left-1/2 before:-translate-x-1/2 before:-translate-y-1/2 before:w-full before:h-full before:min-w-[44px] before:min-h-[44px]" />
          </ScrollArea.Scrollbar>
          <ScrollArea.Corner className="bg-blackA5" />
        </ScrollArea.Root>
      </div>
    </div>
  );
};

export default AdminUsers;

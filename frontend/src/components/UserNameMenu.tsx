import { CircleUserRound} from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react";
import { Separator } from "@radix-ui/react-separator";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

const UserNameMenu = () => {
    const {user, logout} = useAuth0()
    return(
        <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center px-3 font-bold hover:text-violet-500 gap-2">
                <CircleUserRound className="text-violet-500"/>
                {user?.name}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="/user-profile" className="font-bold hover:text-violet-500">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator/>
                <DropdownMenuItem>
                    <Button onClick={()=>logout()} className="flex flex-1 font-bold bg-violet-500">
                        Log Out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default UserNameMenu;
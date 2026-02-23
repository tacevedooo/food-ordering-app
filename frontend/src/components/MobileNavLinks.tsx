import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
    const { logout } = useAuth0();

    return (
        <div className="flex flex-col gap-3 p-4">

            {/* User Profile */}
            <Link
                to="/user-profile"
                className="
                    flex items-center
                    px-4 py-3
                    font-bold
                    rounded-lg
                    bg-violet-100
                    text-violet-600
                "
            >
                User Profile
            </Link>


            {/* Logout Button */}
            <Button
                onClick={() => logout()}
                className="
                    w-full
                    px-4 py-3
                    font-semibold
                    rounded-lg
                    bg-violet-600
                    text-white
                    hover:bg-violet-700
                "
            >
                Log Out
            </Button>

        </div>
    );
};

export default MobileNavLinks;
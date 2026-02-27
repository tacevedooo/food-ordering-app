import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UserNameMenu";
import { Link } from "react-router-dom";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-2 items-center">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="font-bold text-black hover:text-violet-600 transition-colors"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="
            bg-violet-600 
            text-white 
            font-bold 
            px-5 
            py-2 
            rounded-md 
            transition-all 
            duration-300
            hover:bg-black 
            hover:text-violet-600
          "
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default DesktopNav;
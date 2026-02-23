import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button"
import UserNameMenu from "./UserNameMenu";

const DesktopNav = () => {
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    return(
      <span className="flex space-x-2 items-center">
        {isAuthenticated ? <UserNameMenu/> : <Button 
          variant="ghost"
          className="font-bold
                      text-violet-500
                      px-6 py-3
                      text-lg
                      hover:!text-violet-600
                      hover:!bg-white"
          onClick={async () => await loginWithRedirect() }
        >
          Log In
        </Button>}
      </span>

    )
}

export default DesktopNav;
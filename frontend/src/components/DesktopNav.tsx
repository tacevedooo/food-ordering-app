import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UserNameMenu";
import { NavLink } from "react-router-dom";

const DesktopNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  const baseStyle =
    "font-bold pb-1 border-b-2 transition-all duration-300";

  const activeStyle = "text-violet-600 border-violet-600";
  const inactiveStyle =
    "text-black border-transparent hover:text-violet-600 hover:border-violet-600";

  return (
    <span className="flex space-x-6 items-center">
      {/* Home */}
      <NavLink
        to="/"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Home
      </NavLink>

      {/* Restaurants */}
      <NavLink
        to="/restaurants"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        Restaurants
      </NavLink>

      {/* About */}
      <NavLink
        to="/about"
        className={({ isActive }) =>
          `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
        }
      >
        About
      </NavLink>

      {/* Orders (only authenticated) */}
      {isAuthenticated && (
        <NavLink
          to="/order-status"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          Orders
        </NavLink>
      )}

      {/* Auth Section */}
      {isAuthenticated ? (
        <UsernameMenu />
      ) : (
        <Button
          className="bg-violet-600 text-white font-bold px-5 py-2 rounded-md transition-all duration-300 hover:bg-black hover:text-violet-600"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default DesktopNav;
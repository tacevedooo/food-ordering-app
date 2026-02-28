import { NavLink } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";

const MobileNavLinks = () => {
  const { isAuthenticated, logout } = useAuth0();

  const baseStyle =
    "px-4 py-3 font-semibold rounded-lg transition-all duration-300";

  const activeStyle = "bg-violet-100 text-violet-600";
  const inactiveStyle =
    "text-gray-800 hover:bg-violet-50 hover:text-violet-600";

  return (
    <div className="flex flex-col gap-3 p-4">

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

      {/* Divider spacing */}
      {isAuthenticated && <div className="h-2" />}

      {/* User Profile */}
      {isAuthenticated && (
        <NavLink
          to="/user-profile"
          className={({ isActive }) =>
            `${baseStyle} ${isActive ? activeStyle : inactiveStyle}`
          }
        >
          User Profile
        </NavLink>
      )}

      {/* Logout */}
      {isAuthenticated && (
        <Button
          onClick={() => logout()}
          className="w-full px-4 py-3 font-semibold rounded-lg bg-violet-600 text-white hover:bg-violet-700"
        >
          Log Out
        </Button>
      )}
    </div>
  );
};

export default MobileNavLinks;
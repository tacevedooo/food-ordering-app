import { Link } from "react-router-dom";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";

const Header = () => {
  return(
    <div className="border-b-2 border-b-violet-500 py-6">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-4xl font-extrabold tracking-tight text-violet-500">
          StackFood
        </Link>
        <div className="md:hidden">
          <MobileNav/>
        </div>
        <div className="hidden md:block">
          <DesktopNav/>
        </div>
      </div>
    </div>
  )
};

export default Header;
import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="p-2 rounded-md hover:bg-violet-100 transition">
          <Menu className="text-violet-600 w-6 h-6" />
        </button>
      </SheetTrigger>

      <SheetContent className="flex flex-col justify-between py-8 px-6">
        
        <div className="space-y-6">
          <SheetTitle className="text-center">
            {isAuthenticated ? (
              <div className="flex flex-col items-center gap-2">
                <CircleUserRound className="text-violet-600 w-10 h-10" />
                <span className="font-semibold text-gray-800 break-all">
                  {user?.name}
                </span>
              </div>
            ) : (
              <span className="text-lg font-semibold text-gray-800">
                Welcome to StackFood
              </span>
            )}
          </SheetTitle>

          <Separator />

          <SheetDescription className="flex flex-col gap-4">
  {isAuthenticated ? (
    <MobileNavLinks />
  ) : (
    <Button onClick={() => loginWithRedirect()}>Log In</Button>
  )}
</SheetDescription>
        </div>

      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;
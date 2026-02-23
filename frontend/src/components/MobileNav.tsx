import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
    const {isAuthenticated, loginWithRedirect, user} = useAuth0();

    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-violet-500"/>
            </SheetTrigger>
            <SheetContent className="space-y-3 ">
                <SheetTitle className="mt-6 flex justify-center items-center gap-2 font-bold">
                    {isAuthenticated ? (<span className="flex items-center font-bold gap-2">
                <CircleUserRound className="text-violet-500"/>
                    {user?.name}
                        </span>) :
                    (<span> Welcome to StackFood! </span>)}
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? <MobileNavLinks/>: 
                    ( <Button onClick={()=>loginWithRedirect()} className="w-80
                        mx-auto
                        px-4 py-3
                        font-semibold
                        rounded-lg
                        bg-violet-600
                        text-white
                        hover:bg-violet-700"> Log In </Button>)}
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
}
export default MobileNav;
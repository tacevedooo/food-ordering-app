// 1. Rename your original import for clarity
import heroDesktop from "../assets/hero.png"
// 2. Import your new mobile-specific image
import heroMobile from "../assets/hero-mobile.png" 

const Hero = () => {
    return(
        <>
            {/* Desktop View: Visible only on medium screens and up */}
            <div className="hidden md:block">
                <img 
                    src={heroDesktop} 
                    className="w-full max-h-[300px] object-cover" 
                    alt="Desktop Hero"
                />
            </div>

            {/* Mobile View: Hidden on medium screens and up */}
            <div className="md:hidden">
                <img 
                    src={heroMobile} 
                    className="w-full max-h-[300px] object-cover" 
                    alt="Mobile Hero"
                />
            </div>
        </>
    )
}

export default Hero;
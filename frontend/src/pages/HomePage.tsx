import landingImage from '../assets/landing.png';
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-4xl font-bold tracking-tight text-violet-600">
                    Your favorite food, just a tap away
                </h1>
            </div>
            <div className="flex justify-center">
                <img src={landingImage} className="w-60" />
            </div>

            <div className='flex flex-col items-center justify-center gap-4 text-center'>
                <span className='font-bold text-3xl tracking-tighter'>
                    Order takeaway even faster!
                </span>
                <span>
                    Download the StackFood App for faster ordering and personalized recommendations.
                </span>
                <img src={appDownload} />
            </div>

        </div>
    )
}

export default HomePage;
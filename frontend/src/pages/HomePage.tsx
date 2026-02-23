import landingImage from '../assets/landing.png';
import appDownload from "../assets/appDownload.png"

const HomePage = () => {
    return (
        <div className="flex flex-col gap-12">
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
                <h1 className="text-5xl font-bold tracking-tight text-violet-600">
                    Your favorite food, just a tap away
                </h1>
                <span className="text-x1">Fresh, fast, and delivered right to your door</span>
            </div>
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} className='w-60 ml-50'/>
                <div className='flex flex-col items-center justify-center gap-4 text-center'>
                    <span className='font-bold text-3x1 tracking-tighter'>
                        Order takeaway even faster!
                    </span>
                    <span>
                        Download the StackFood App for faster ordering and personalized recommendations.
                    </span>
                    <img src={appDownload} />
                </div>
            </div>
        </div>
    )
}

export default HomePage;
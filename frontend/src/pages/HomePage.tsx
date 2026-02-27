import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { type SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-4xl font-bold tracking-tight text-violet-600">
          Your favorite food, just a tap away
        </h1>
        
        <SearchBar
          placeHolder="Search by City or Town"
          onSubmit={handleSearchSubmit}
        />
      </div>

      <div className="flex justify-center">
        <img src={landingImage} className="w-100" />
      </div>

      <div className="flex flex-col items-center justify-center gap-4 text-center">
        <span className="font-bold text-3xl tracking-tighter">
          Order takeaway even faster!
        </span>
        <span>
          Download the StackFood App for faster ordering and personalized
          recommendations.
        </span>
        <img src={appDownloadImage} />
      </div>
    </div>
  );
};

export default HomePage;
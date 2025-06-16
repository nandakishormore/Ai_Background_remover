import { useContext } from "react";
import { AppContext } from "../../context/AppContext";
import { assets } from "../../assets/assets";

const Result = () => {
  const { image, resultImage } = useContext(AppContext);
  return (
    <div className="mx-4 my-3 lg:mx-44 mt-14 min-h-[75vh]">
      {/* image contailner */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* left */}
        <div className="flex flex-col">
          <p className="font-semibold text-gray-600 mb-2">Original image:</p>
          <img
            src={assets.peopleOriginal}
            alt=""
            className="rounded-md w-full object-cover"
          />
        </div>
        {/* right */}
        <div>
          <div className="flex flex-col">
            <p className="font-semibold text-gray-600 mb-2">
              Backgorund Removed
            </p>
            <img
              src={assets.peopleRemoved}
              alt=""
              className="rounded-md w-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Result;

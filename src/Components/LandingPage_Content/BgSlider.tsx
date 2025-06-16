import { useState } from "react";
import { assets, categories } from "../../assets/assets";

const BgSlider = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [activeCategory, setActiveCategory] = useState("People");

  const handleSliderChange = (e: any) => {
    setSliderPosition(e.target.value);
  };

  return (
    <div className="mt=16">
      <div className="Bgremoval-steps text-center flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          How it looks before and after?
        </h1>
      </div>
      <div className="Bgremoval-steps-cards text-center flex flex-wrap items-center justify-center mt-12 mx-[38px]">
        <div className="inline-flex gap-4 bg-cyan-50 p-2 rounded-full flex-wrap justify-center">
          {categories.map((cat) => (
            <button
              key={cat}
              className={` px-6 py-2 rounded-full font-medium ${
                activeCategory === cat
                  ? "bg-white text-blue-800 shadow-sm"
                  : "text-blue-600 hover:bg-white"
              }`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
      <div className="relative w-full max-w-4xl overflow-hidden m-auto rounded-xl shadow-lg mt-10">
        <img
          src={assets.peopleOriginal}
          alt="original image"
          style={{ clipPath: `inset(0 ${100.2 - sliderPosition}% 0 0)` }}
        />
        <img
          src={assets.peopleRemoved}
          alt="Bg removed image"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
          className="absolute top-0 left-0 w-full h-full"
        />
        <input
          type="range"
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full z-10 slider"
          min={0}
          max={100}
          onChange={handleSliderChange}
          value={sliderPosition}
        />
      </div>
    </div>
  );
};

export default BgSlider;

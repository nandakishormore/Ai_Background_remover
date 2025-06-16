import { Plans } from "../../assets/assets";

const Pricing = () => {
  return (
    <div className="mx-6">
      {/* title section */}
      <div className="text-center mt-14">
        <h1 className="text-3xl md:text-4xl font-bold">
          Choose your perfect choice
        </h1>
        <h3 className="text-blue-400 text-xl font-semibold mt-3">
          We have some best plans curated as per your need.
          <span className="text-red-400"> Get yours now!</span>
        </h3>
      </div>

      {/* plans section */}
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-10">
        {Plans.map((Plan) => {
          const isPopular = Plan.popular;

          return (
            <div
              key={Plan.id}
              className={`relative pt-6 p-6 rounded-3xl transition-all duration-300 hover:-translate-y-2 ${
                isPopular
                  ? "backdrop-blur-lg bg-black border border-purple-600 shadow-lg"
                  : "bg-[#1A1A1A] border border-gray-800 shadow"
              }`}
            >
              {isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 transform rounded-full bg-purple-600 px-3 py-2 text-white text-sm font-semibold shadow-md">
                  Most Popular
                </div>
              )}
              <div className="text-center">
                <h1 className="text-3xl font-bold text-white">{Plan.name}</h1>
                <h2 className="text-purple-600 text-2xl mt-3 font-semibold">
                  ₹ {Plan.price}
                </h2>

                <ul className="my-6 space-y-4 text-white text-sm">
                  <li className="flex justify-center">{Plan.credits}</li>
                  <li className="flex justify-center">{Plan.description}</li>
                </ul>

                <button className="w-full py-3 mt-4 bg-purple-600 text-white font-semibold rounded-2xl transition-transform hover:-translate-y-1">
                  Choose Plan
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Pricing;

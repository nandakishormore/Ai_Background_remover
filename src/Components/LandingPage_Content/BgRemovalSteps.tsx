import { steps } from "../../assets/assets";

const BgRemovalSteps = () => {
  return (
    <div>
      <div className="Bgremoval-steps text-center flex items-center justify-center">
        <h1 className="text-3xl md:text-4xl font-bold">
          How to remove background in seconds?
        </h1>
      </div>
      <div className="text-center mt-12 mx-6 mb-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {steps.map((item, i) => (
            <div
              key={i}
              className="bg-cyan-100 p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col items-center">
                <span className="text-4xl mb-3">{item.Icon}</span>
                <h3 className="text-xl text-fuchsia-700 font-bold">
                  {item.title}
                </h3>
                <h4 className="text-sm text-gray-700 mt-2">
                  {item.description}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BgRemovalSteps;

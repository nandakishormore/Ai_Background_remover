import { Quote } from "lucide-react";
import { testimonials } from "../../assets/assets";

const Testimonials = () => {
  return (
    <div className="max-w-7xl px-4 mx-auto sm:px-6 lg:px-8 py-12">
      {/* title section */}
      <h2 className=" mt-4 text-center text-3xl md:text-4xl font-bold">
        They love us and you'll also!
      </h2>
      {/* testimonials card section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {testimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col justify-between rounded-xl shadow-md hover:shadow-lg transition-shadow bg-white"
          >
            <div className="flex flex-col px-6 pt-6 space-y-4">
              <Quote size={28} className="text-blue-500" />
              <p
                className="text-gray-700 text-base"
                style={{ hyphens: "auto" }}
              >
                {testimonial.quote}
              </p>
            </div>
            <div className="flex items-center px-6 py-4 bg-cyan-50 rounded-b-xl border-t mt-4">
              <div className="flex flex-col">
                <p className="font-semibold text-blue-800">
                  {testimonial.author}
                </p>
                <p className="text-sm text-blue-400">{testimonial.handle}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;

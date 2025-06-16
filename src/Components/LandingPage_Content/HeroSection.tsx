import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { assets } from "../../assets/assets";
import toast from "react-hot-toast";

const HeroSection = () => {
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewUrl(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: { "image/*": [] },
    multiple: false,
  });

  return (
    <div className="bg-cyan-100 rounded-2xl grid grid-cols-1 md:grid-cols-2 gap-10 items-center p-8 md:p-16 m-4 mt-10 justify-around">
      {/* Left side: Video Banner */}
      <div className="order-2 md:order-1 flex justify-center">
        <div className="shadow-lg shadow-blue-300 overflow-hidden rounded-2xl">
          <video
            src={assets.hero_video}
            autoPlay
            loop
            muted
            title="Hero Demo Video"
            className="w-full max-w-[600px] h-auto object-cover"
          />
        </div>
      </div>

      {/* Right side: Text & Dropzone */}
      <div className="order-1 md:order-2 flex flex-col items-center text-center w-full">
        <h1 className="text-3xl text-fuchsia-700 font-bold">
          Instantly Remove Backgrounds.
        </h1>
        <h4 className="text-xl mt-2">
          Powered by <b className="text-red-600">AI</b>.
        </h4>
        <p className="text-sm text-gray-700 mt-2 mb-8 max-w-md">
          Effortless, precise, and stunning results in seconds.
        </p>

        <div
          {...getRootProps()}
          className={`w-full max-w-md p-6 border-2 rounded-lg bg-white transition-colors cursor-pointer ${
            isDragActive
              ? "border-fuchsia-700"
              : "border-dashed border-gray-400"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-base text-gray-700">
            {isDragActive ? (
              <span className="text-fuchsia-700 font-semibold">
                Drop the image here...
              </span>
            ) : (
              <>
                Drag & drop an image here or{" "}
                <span className="text-fuchsia-700 font-semibold underline">
                  click to upload
                </span>
              </>
            )}
          </p>
        </div>

        {/* Preview Section */}
        {/* {previewUrl && (
          <div className="mt-6">
            <p className="text-sm text-gray-600 mb-2">Preview:</p>
            <img
              src={previewUrl}
              alt="Preview"
              className="max-w-xs rounded-xl shadow-md"
            />
          </div> 
        )} */}

        {/* <button onClick={() => toast.success("Image upload Successfully")}>
          test toast notification
        </button> */}
      </div>
    </div>
  );
};

export default HeroSection;

import {
  SignedIn,
  SignedOut,
  UserButton,
  useClerk,
  useUser,
} from "@clerk/clerk-react";
import { Coins, Menu, ReceiptIndianRupee, X } from "lucide-react";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const Menubar = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("Menubar must be used within an AppContextProvider");
  }
  const { credits } = context;
  const [menuOpen, setMenuOpen] = useState(false);
  const { openSignIn, openSignUp } = useClerk();
  const { user } = useUser();
  // const { credits } = useContext(AppContext);
  const OpenLogin = () => {
    setMenuOpen(false);
    openSignIn({});
  };
  const OpenRegister = () => {
    setMenuOpen(false);
    openSignUp({});
  };

  return (
    <nav className="bg-white pl-18 pr-4 pt-8 flex justify-between items-center">
      <Link className="logo+name flex items-center space-x-3" to="/">
        <img
          className="h-12 w-12 cursor-pointer object-contain"
          src="src\assets\BGremover-favicon-colorful.svg"
          alt=""
        />
        <h3 className="font-semibold text-3xl ml-2 align-middle text-blue-800">
          BgRemover
        </h3>
      </Link>
      <div className="Action_buttons hidden md:flex items-center space-x-4 mr-10">
        <SignedOut>
          <button
            className="text-blue-400 hover:text-blue-800 font-medium"
            onClick={OpenLogin}
          >
            Login
          </button>
          <button
            className="bg-gray-100 hover:bg-gray-200 text-blue-400 hover:text-blue-800 font-medium p-2 rounded-2xl transition-all"
            onClick={OpenRegister}
          >
            Sign Up
          </button>
        </SignedOut>
        <SignedIn>
          <div className="flex items-center gap-2 sm:gap-3">
            <button className="flex items-center gap-2 bg-blue-50 p-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
              <Coins className="text-yellow-500"></Coins>
              <p className="text-sm font-medium text-gray-700">
                {" "}
                Credits: {credits == null ? 0 : credits}
              </p>
            </button>
            <button className="bg-gray-100 rounded-full p-3 text-blue-800">
              {" "}
              hi, {user?.firstName + " " + user?.lastName}
            </button>
          </div>
          <UserButton />
        </SignedIn>
      </div>

      {/* Mobile Hamburger */}
      <div className="flex md:hidden">
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="absolute top-16 right-8 bg-white shadow-md rounded-md flex flex-col space-y-2 w-40 p-2">
          <SignedOut>
            <button
              className="hover:bg-gray-200 text-blue-400 hover:text-blue-800 font-medium rounded-2xl transition-all"
              onClick={OpenLogin}
            >
              Login
            </button>
            <button
              className="hover:bg-gray-200 text-blue-400 hover:text-blue-800 font-medium rounded-2xl transition-all"
              onClick={OpenRegister}
            >
              Sign Up
            </button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-2 sm:gap-3">
              <button className="flex items-center gap-2 bg-blue-50 p-2 rounded-full hover:scale-105 transition-all duration-300 cursor-pointer">
                <ReceiptIndianRupee className="text-yellow-500"></ReceiptIndianRupee>
                <p className="text-sm font-medium text-gray-700">
                  {" "}
                  Credits: {credits == null ? 0 : credits}
                </p>
              </button>
            </div>
            <UserButton />
          </SignedIn>
        </div>
      )}
    </nav>
  );
};

export default Menubar;

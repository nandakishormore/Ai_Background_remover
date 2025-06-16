import { Route, Routes } from "react-router-dom";
import Footer from "./Components/Footer";
import LandingPage from "./Components/LandingPage";
import Menubar from "./Components/Menubar";
import { Toaster } from "react-hot-toast";
import UserSyncHandler from "./Components/UserSyncHandler";
import Result from "./Components/Result_content/Result";
import { RedirectToSignIn, SignedIn, SignedOut } from "@clerk/clerk-react";

const app = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 font-['Outfit']">
      <UserSyncHandler />
      <Menubar />
      <Toaster />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/result"
          element={
            <>
              <SignedIn>
                <Result />
              </SignedIn>
              <SignedOut>
                <RedirectToSignIn />
              </SignedOut>
            </>
          }
        />
      </Routes>
      <Footer />
    </div>
  );
};

export default app;

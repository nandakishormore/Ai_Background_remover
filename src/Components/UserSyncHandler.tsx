import { useAuth, useUser } from "@clerk/clerk-react";
import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import toast from "react-hot-toast";

const UserSyncHandler = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useContext must be used within an AppContextProvider");
  }
  const { BackEndUrl, loadCredits } = context;
  const { isLoaded, isSignedIn, getToken } = useAuth();
  const { user } = useUser();
  //   const { BackEndUrl, loadCredits } = useContext(AppContext);
  const [synced, setSynced] = useState(false);

  useEffect(() => {
    // Ensure user is loaded and signed in, and haven't already synced
    if (!isLoaded || !isSignedIn || !user || synced) {
      return;
    }

    const syncUser = async () => {
      try {
        const token = await getToken();
        const UserData = {
          clerkId: user.id,
          email: user.primaryEmailAddress?.emailAddress,
          firstName: user.firstName,
          lastName: user.lastName,
          photoUrl: user.imageUrl,
        };

        const response = await axios.post(`${BackEndUrl}/users/`, UserData, {
          headers: { Authorization: `Bearer ${token}` },
        });

        if (response.data?.success) {
          toast.success("User created Successfully!");
        } else {
          toast.error("Failed to create account. Please try again!");
        }

        setSynced(true);
        await loadCredits();
      } catch (error) {
        console.error(
          "User failed to store in database. AUTHORISATION_ERROR",
          error
        );
        toast.error("Failed to create account. Please try again!");
      }
    };

    syncUser();
  }, [isLoaded, isSignedIn, getToken, user, synced, BackEndUrl, loadCredits]);

  return null;
};

export default UserSyncHandler;

import React, { createContext, useState, type ReactNode } from "react";
import { useAuth } from "@clerk/clerk-react";
import axios from "axios";
import toast from "react-hot-toast";

// Define the shape of your context value
interface AppContextType {
  credits: number | null;
  setCredits: React.Dispatch<React.SetStateAction<number | null>>;
  BackEndUrl: string;
  loadCredits: () => Promise<void>;
}

// Create context with default value as undefined
export const AppContext = createContext<AppContextType | undefined>(undefined);

interface AppContextProviderProps {
  children: ReactNode;
}

const AppContextProvider = ({ children }: AppContextProviderProps) => {
  const BackEndUrl = import.meta.env.VITE_BACKEND_URL as string;
  const [credits, setCredits] = useState<number | null>(null);
  const { getToken } = useAuth();
  const [image, setImage] = useState(false);
  const [resultImage, setResultImage] = useState(false);

  const loadCredits = async () => {
    try {
      const token = await getToken();
      const response = await axios.get(`${BackEndUrl}/users/credits`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (response.data.success) {
        setCredits(response.data.data.credits);
      } else {
        toast.error("Something went wrong. Failed to fetch credits!");
      }
    } catch (error) {
      toast.error("Something went wrong. Failed to fetch credits!");
    }
  };

  const contextValue: AppContextType = {
    credits,
    setCredits,
    BackEndUrl,
    image,
    setImage,
    resultImage,
    setResultImage,
    loadCredits,
  };

  return (
    <AppContext.Provider value={contextValue}>{children}</AppContext.Provider>
  );
};

export default AppContextProvider;

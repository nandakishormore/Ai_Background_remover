import { ImageDown, WandSparkles, HardDriveUpload } from "lucide-react";
import BGremoverfavicon from "./BGremover-favicon-colorful.svg";
import hero_video from "./Hero_video.mp4";

import peopleOriginal from "./people_org.jpg";
import peopleRemoved from "./people_removed.png";
import productOriginal from "./product_org.jpg";
import productRemoved from "./product_removed.png";
import GraphicsOriginal from "./Graphics_org.jpg";
import GraphicsRemoved from "./graphics_removed.png";
import carOriginal from "./car_org.jpg";
import carRemoved from "./car_removed.png";
import AnimalOriginal from "./animal_org.jpg";
import AnimalRemoved from "./animal_removed.png";

export const assets = {
  BGremoverfavicon,
  hero_video,
  peopleOriginal,
  peopleRemoved,
  productOriginal,
  productRemoved,
  GraphicsOriginal,
  GraphicsRemoved,
  carOriginal,
  carRemoved,
  AnimalOriginal,
  AnimalRemoved,
};

export const steps = [
  {
    Icon: <HardDriveUpload size={28} />,
    title: "1. Upload Your Image",
    description: "Drag and drop any image or click to upload. Our AI is ready!",
  },
  {
    Icon: <WandSparkles size={28} />,
    title: "2. AI Does the Work",
    description:
      "Our advanced AI instantly detects and removes the background with pixel-perfect accuracy.",
  },
  {
    Icon: <ImageDown size={28} />,
    title: "3. Download Your Result",
    description:
      "Get your clean cutout image in high resolution, ready for any project.",
  },
];

export const categories = ["People", "Products", "Animals", "Cars", "Graphics"];

export const Plans = [
  {
    id: "Basic",
    name: "Basic  Package",
    price: 499,
    credits: "100 credits",
    description: "Best for personal use",
    popular: false,
  },
  {
    id: "Premium",
    name: "Premium Package",
    price: 899,
    credits: "250 credits",
    description: "Best for business use",
    popular: true,
  },
  {
    id: "Ultimate",
    name: "Ultimate Package",
    price: 1499,
    credits: "1000 credits",
    description: "Best for enterprise use",
    popular: false,
  },
];

export const testimonials = [
  {
    id: 1,
    quote:
      "We are impressed by the AI and think it's the best choice on the market.",
    author: "Anthony Walker",
    handle: "@_webarchitect_",
  },
  {
    id: 2,
    quote:
      "remove.bg is leaps and bounds ahead of the competition. A thousand times better. It simplified the whole process.",
    author: "Sarah Johnson",
    handle: "@techlead_sarah",
  },
  {
    id: 3,
    quote:
      "We were impressed by its ability to account for pesky, feathery hair without making an image look jagged and amateurish.",
    author: "Michael Chen",
    handle: "@coding_newbie",
  },
];

import { Project } from "../types";
import fintech from "/fintech.png";
import notion from "/notion.png";
import woytrip from "/woytrip.png";
import financial_Agent from "/financial agent.png";
import voidtech from "/voidtech.png";
import chatbot from "/chatbot.png";
import iot from "/iot.png";
import ai from "/ai.jpg";
import agrimrt from "/agrimart.png";

export const projects: Project[] = [
  {
    id: 1,
    title: "PredictAI - Multi-Model Prediction & Recommendation System",
    description:
      "Web app combining prediction, classification, and recommendation models for personalized results.",
    category: ["Web App", "AI"],
    image:
      ai,
    tags: [
      "AI",
      "Machine Learning",
      "Prediction",
      "Classification",
      "Recommendation",
      "Streamlit",
      "Flask",
    ],
    github: "https://github.com/manitejagaddam/Projects",
  },
  {
    id: 2,
    title: "Multiple Full-Stack Applications",
    description:
      "Built several full-stack applications across various domains, including Fintech, Void Tech, WoyTrip, and SEO Optimizer, focusing on delivering seamless user experiences and scalable solutions.",
    category: ["Web App"],
    image: voidtech,
    tags: [
      "React",
      "Node.js",
      "MongoDB",
      "AWS",
      "Tailwind CSS",
      "Web Development",
    ],
    github: "https://github.com/manitejagaddam/Web-Dev",
  },
  {
    id: 3,
    title: "Fintech Solutions - Digital Finance Platform",
    description:
      "Comprehensive fintech platform for banking, investment tracking, and financial planning.",
    category: ["Web App", "AI"],
    image: fintech,
    tags: [
      "Fintech",
      "React",
      "Node.js",
      "MongoDB",
      "Tailwind CSS",
      "Data Visualization",
    ],
    link: "https://manitejagaddam.github.io/FinTech/",
    github: "https://github.com/manitejagaddam/FinTech",
  },
  {
    id: 4,
    title: "Woy Trip - Travel Booking Platform",
    description:
      "Travel booking site to explore, inquire, and book trips with smooth UI/UX.",
    category: ["Web App", "UI/UX"],
    image: woytrip,
    tags: ["React", "Tailwind CSS", "Framer Motion", "EmailJS", "WhatsApp API"],
    link: "https://woytrip.vercel.app/",
    github: "https://github.com/manitejagaddam/WoyTrip",
  },
  {
    id: 5,
    title: "Multiple Chatbots",
    description:
      "Platform with AI-powered chatbots for customer support, travel, and FAQs.",
    category: ["Web App", "AI"],
    image: chatbot,
    tags: [
      "Streamlit",
      "Grok",
      "MistralAI",
      "AI Chatbots",
      "Python",
      "Web Development",
    ],
    github: "https://github.com/manitejagaddam/LLM-Projects",
  },
  {
    id: 6,
    title: "Website Clones - Notion, Spotify, Microsoft, Flickr",
    description:
      "Cloned websites like Notion, Spotify, and Microsoft with core functionalities.",
    category: ["Web App", "UI/UX"],
    image: notion,
    tags: ["React", "Node.js", "Tailwind CSS", "Spotify API", "Firebase"],
    link: "https://manitejagaddam.github.io/Notion-Application/",
    github: "https://github.com/manitejagaddam/Web-Dev/tree/web/Clones",
  },
  {
    id: 7,
    title: "Financial Agent - Personal Finance Assistant",
    description:
      "AI-powered platform to manage finances, track spending, and offer investment advice.",
    category: ["AI"],
    image: financial_Agent,
    tags: ["AI", "Finance", "Machine Learning", "Python", "API Integration"],
    github: "https://github.com/manitejagaddam/FinTech",
  },
  {
    id: 8,
    title: "AgriMart - Connecting Farmers and Buyers",
    description:
      "Marketplace app connecting farmers with buyers for fresh produce transactions.",
    category: ["AI"],
    image:
      agrimrt,
    tags: [
      "Marketplace",
      "Agriculture",
      "Mobile App",
      "Secure Payment",
      "Real-Time Listings",
      "AI",
      "Machine Learning",
      "Recommendation",
    ],
    github: "https://github.com/manitejagaddam/AgriMarket ",
  },
  {
    id: 9,
    title: "Interactive Learning Board for Kids",
    description:
      "Educational IoT board with capacitive touch and sound feedback for teaching children.",
    category: ["IoT"],
    image:
      iot,
    tags: ["IoT", "ESP32", "Capacitive Touch", "Education", "Hardware"],
    // github: "https://github.com/manitejagaddam/IoT-Interactive-Board",
  },
];

import { DiCss3, DiJavascript, DiHtml5, DiReact } from "react-icons/di";
import { SiNextdotjs } from "react-icons/si";

const techs = [
  {
    id: 1,
    name: "HTML",
    description: "Markup language for documents.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: DiHtml5,
  },
  {
    id: 2,
    name: "CSS",
    description: "Style sheet language.",
    primaryColor: "#fd71af",
    secondaryColor: "#faf0f5",
    icon: DiCss3,
  },
  {
    id: 3,
    name: "JavaScript",
    description: "Programming language.",
    primaryColor: "#059669",
    secondaryColor: "#dcf5ed",
    icon: DiJavascript,
  },
  {
    id: 4,
    name: "React JS",
    description: "JavaScript library.",
    primaryColor: "#fd71af",
    secondaryColor: "#faf0f5",
    icon: DiReact,
  },
  {
    id: 5,
    name: "Next JS",
    description: "Framework for React apps.",
    primaryColor: "#7b68ee",
    secondaryColor: "#F7F5FE",
    icon: SiNextdotjs,
  },
];

const techsDetails = [
  {
    id: 1,
    name: "HTML",
    link: "https://en.wikipedia.org/wiki/HTML",
  },
  {
    id: 2,
    name: "CSS",
    link: "https://en.wikipedia.org/wiki/CSS",
  },
  {
    id: 3,
    name: "JavaScript",
    link: "https://en.wikipedia.org/wiki/Javascript",
  },
  {
    id: 4,
    name: "React JS",
    link: "https://en.wikipedia.org/wiki/Reactjs",
  },
  {
    id: 5,
    name: "Next JS",
    link: "https://en.wikipedia.org/wiki/Next.js",
  },
];

export { techs, techsDetails };

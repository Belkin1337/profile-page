import { AiFillSetting } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";

export const data = (skillsT: Function) => {
  return [
    {
      name: skillsT("languages"),
      icon: LiaLanguageSolid,
      content: [
        { name: "Typescript" },
        { name: "Javascript" },
        { name: "Rust" },
        { name: "Java" },
      ],
    },
    {
      name: skillsT("frameworks"),
      icon: AiFillSetting,
      content: [
        { name: "React" },
        { name: "Solid " },
        { name: "Next JS" },
        { name: "Node JS" },
      ],
    },
    {
      name: skillsT("tools"),
      icon: VscTools,
      content: [
        { name: "Visual Studio Code" },
        { name: "ESLint" },
        { name: "Prettier" },
        { name: "Git" },
        { name: "Github" },
        { name: "Webpack" },
        { name: "Vite" },
      ],
    },
  ];
};

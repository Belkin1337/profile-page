import { AiFillSetting } from "react-icons/ai";
import { LiaLanguageSolid } from "react-icons/lia";
import { VscTools } from "react-icons/vsc";

export const skillsData = (t: Function) => {
	return [{
		name: t("languages"),
		icon: LiaLanguageSolid,
		content: [
			{ name: "Typescript" },
			{ name: "Javascript" },
			{ name: "C#" },
			{ name: "Rust" },
			{ name: "Java" },
			{ name: "Kotlin" }
		],
	}, {
		name: t("frameworks"),
		icon: AiFillSetting,
		content: [
			{ name: "React" },
			{ name: "Astro" },
			{ name: "Solid" },
			{ name: "Next.jS" },
			{ name: "Node.js" },
		],
	}, {
		name: t("tools"),
		icon: VscTools,
		content: [
			{ name: "WebStorm" },
			{ name: "VS Code" },
			{ name: "ESLint" },
			{ name: "Prettier" },
			{ name: "Git" },
			{ name: "Github" },
			{ name: "Webpack" },
			{ name: "Vite" },
		],
	}];
};
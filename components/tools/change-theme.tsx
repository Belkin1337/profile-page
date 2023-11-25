import { useScopedI18n } from "@/lib/next-international";
import { BlockCard } from "../ui/blockCard";
import { useTheme } from "next-themes";

const ChangeTheme = () => {
  const { setTheme } = useTheme()
  const servicalT = useScopedI18n('servical')

  const themeList = [
    { name: servicalT('dark'), onClick: () => setTheme("dark") },
    { name: servicalT('light'), onClick: () => setTheme("light") },
  ]

  return (
    <>
      {themeList.map((item) => (
        <BlockCard
          key={item.name}
          variant="pink"
          className="flex rounded-md p-2 gap-x-2 cursor-pointer w-full"
          onClick={item.onClick}
        >
          <button className="text-neutral-200 text-xl">
           {item.name}
          </button>
        </BlockCard>
      ))
      }
    </>
  );
}

export default ChangeTheme;
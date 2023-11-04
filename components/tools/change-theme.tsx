import { useScopedI18n } from "@/lib/next-international";
import { BlockCard } from "../ui/blockCard";

const ChangeTheme = () => {
  const servicalT = useScopedI18n('servical')

  const themeList = [
    {
      name: servicalT('dark'),
      onClick: () => { }
    },
    {
      name: servicalT('light'),
      onClick: () => { }
    },
    {
      name: servicalT('mycolor'),
      onClick: () => { }
    }
  ]

  return (
    <>
      {themeList.map((item) => (
        <BlockCard
          key={item.name}
          variant="pink"
          className="flex bg-neutral-800 hover:bg-neutral-700 rounded-md p-2 gap-x-2 cursor-pointer w-full"
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
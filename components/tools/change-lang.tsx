import { useChangeLocale, useScopedI18n } from '@/lib/next-international'
import { BlockCard } from '../ui/blockCard';

const ChangeLang = () => {
  const changeLocale = useChangeLocale()
  const localesT = useScopedI18n('locales');

  const langList = [
    { name: localesT('english'), onClick: () => changeLocale('en') },
    { name: localesT('russian'), onClick: () => changeLocale('ru') }
  ]

  return (
    <>
      {langList.map((item) => (
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

export default ChangeLang;
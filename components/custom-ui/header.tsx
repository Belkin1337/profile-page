import ToolsPanel from "./tools-panel";
import Card from "./card";

const Header = () => {
  return (
    <div className="xl:hidden w-full px-2 py-1 flex items-center justify-between bg-gradient-to-l from-gray-700 to-gray-700">
      <p className="text-servical-button text-sm font-normal">Справа находится панель с настройками: где можно сменить язык и тему.</p>
      <Card size="md" className="w-[22%] flex justify-end ">
        <ToolsPanel isMobile />
      </Card>
    </div>
  );
}

export default Header;
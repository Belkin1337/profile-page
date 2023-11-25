import ToolsPanel from "./tools-panel";
import Card from "./card";

const Header = () => {
  return (
    <div className="xl:hidden w-full px-2 flex items-center justify-end bg-gradient-to-l from-gray-700 to-gray-700">
      <Card padding="md" className="flex justify-end">
        <ToolsPanel isMobile />
      </Card>
    </div>
  );
}

export default Header;
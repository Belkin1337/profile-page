// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger
// } from "@radix-ui/react-dropdown-menu";
// import {
//   Dialog,
//   DialogContent,
//   DialogTrigger,
// } from "@/components/ui/dialog"

// import { Languages, SunMoon } from "lucide-react";

// import { VscSettings } from "react-icons/vsc"
// import { useScopedI18n } from '@/lib/next-international'
// import Card from "./card";
// import { BlockCard } from "../ui/blockCard";
// import ChangeLang from "../tools/change-lang";
// import ChangeTheme from "../tools/change-theme";

// interface ToolsPanelProps {
//   isDesktop?: boolean,
//   isMobile?: boolean
// }

// const ToolsPanel: React.FC<ToolsPanelProps> = ({ isDesktop, isMobile }) => {
//   const servicalT = useScopedI18n('servical')

//   const toolsList = [
//     {
//       name: servicalT('language'),
//       isDisabled: false,
//       icon: Languages,
//       contentName: "",
//       component: ChangeLang
//     },
//     {
//       name: servicalT('theme'),
//       isDisabled: true,
//       icon: SunMoon,
//       contentName: "",
//       component: ChangeTheme
//     },
//   ]

//   return (
//     <>
//       {isDesktop ? (
//         <DropdownMenu>
//           <DropdownMenuTrigger>
//             <VscSettings className={`${isDesktop && 'h-[50px] w-[50px]'} ${isMobile && 'h-[24px] w-[24px]'} hover:fill-[#059b84] transition`} color="white" />
//           </DropdownMenuTrigger>
//           <DropdownMenuContent>
//             <Card padding="md" variant="salem" className={`flex flex-col gap-2 p-4 ${isDesktop && 'absolute right-8 -top-10'} w-[256px] z-10000`}>
//               <DropdownMenuLabel>
//                 <span className="text-white text-lg">{servicalT('settings')}</span>
//               </DropdownMenuLabel>
//               <DropdownMenuSeparator />
//               <DropdownMenuItem className="flex flex-col gap-y-2">
//                 {toolsList.map((item) => (
//                   <DropdownMenu key={item.name}>
//                     <DropdownMenuTrigger>
//                       <BlockCard variant="pink" className="flex bg-neutral-600 hover:bg-neutral-500 rounded-md p-2 gap-x-2 cursor-pointer w-full">
//                         <item.icon size={20} color="white" />
//                         <button className="pointer-events-none text-neutral-100 text-xl">
//                           {item.name}
//                         </button>
//                       </BlockCard>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="outline-none ring-0">
//                       <Card padding="md" variant="salem" className={`flex flex-col gap-2 p-4 ${isDesktop && 'absolute right-32 -top-10'} w-[256px]`}>
//                         <item.component />
//                       </Card>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ))}
//               </DropdownMenuItem>
//             </Card>
//           </DropdownMenuContent>
//         </DropdownMenu>) : null}
//       {isMobile ? (
//         <Dialog>
//           <DialogTrigger>
//             <VscSettings className={`
//                 ${isDesktop && 'h-[50px] w-[50px]'} 
//                 ${isMobile && 'h-[22px] w-[22px]'} hover:fill-[#059b84] transition`}
//               color="white"
//             />
//           </DialogTrigger>
//           <DialogContent className="bg-transparent border-none outline-none flex items-center justify-center">
//             <Card padding="md" variant="salem" className={`flex flex-col gap-2 w-full`}>
//               <span className="text-white text-lg">{servicalT('settings')}</span>
//               <div className="flex flex-col gap-y-2">
//                 {toolsList.map((item) => (
//                   <DropdownMenu key={item.name}>
//                     <DropdownMenuTrigger>
//                       <BlockCard variant="pink" className="flex bg-neutral-600 hover:bg-neutral-500 rounded-md p-2 gap-x-2 cursor-pointer w-full">
//                         <item.icon size={20} color="white" />
//                         <button className="pointer-events-none text-neutral-100 text-xl">
//                           {item.name}
//                         </button>
//                       </BlockCard>
//                     </DropdownMenuTrigger>
//                     <DropdownMenuContent className="outline-none ring-0">
//                       <Card padding="md" variant="salem" className={`flex flex-col gap-2 p-4 w-[256px]`}>
//                         <item.component />
//                       </Card>
//                     </DropdownMenuContent>
//                   </DropdownMenu>
//                 ))}
//               </div>
//             </Card>
//           </DialogContent>
//         </Dialog>) : null}
//     </>
//   );
// }

// export default ToolsPanel;
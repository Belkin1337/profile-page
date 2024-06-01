// import { LampContainer } from "@/ui/components/lamp"
// import Link from "next/link"
// import { motion } from "framer-motion";
// import { TextRevealCard } from "@/ui/components/text-reveal-card";
// import { TELEGRAM_PROFILE_LINK } from "@/lib/constants/media-links";
//
// export const WorkSection = () => {
//   return (
//     <div className="flex flex-col min-h-screen w-full">
//       <LampContainer>
//         <motion.h1
//           initial={{ opacity: 0.5, y: 100 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           transition={{
//             delay: 0.3,
//             duration: 0.8,
//             ease: "easeInOut",
//           }}
//           className="mt-8 bg-gradient-to-br from-emerald-400 to-cyan-400 py-4 text-4xl font-medium bg-clip-text text-left tracking-tight text-transparent"
//         >
//           Нужен сайт-визитка? Или что-то сложнее, чем красивая обертка?
//           <div className="flex items-center mt-4">
//             <Link
//               href={TELEGRAM_PROFILE_LINK}
//               target="_blank"
//               className="text-white inline text-4xl font-bold"
//             >
//               Пиши мне в&nbsp;
//               <TextRevealCard
//                 text="телеграм"
//                 revealText="@kenuki_chan"
//               />
//             </Link>
//           </div>
//         </motion.h1>
//       </LampContainer>
//     </div>
//   )
// }
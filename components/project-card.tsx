import { useScopedI18n } from "@/lib/next-international";
import Link from "next/link";
import { Badge } from "./ui/badge";
import Image from "next/image"

interface ProjectCardProps {
  image: string,
  title: string,
  description: string,
  demo?: string,
  source?: string,
  tags: any,
}

export const ProjectCard = ({ image, title, description, tags }: ProjectCardProps) => {
  const servicalT = useScopedI18n("servical");

  return (
    <div className="flex items-center justify-start relative overflow-hidden group">
      <Image width={1280} height={720} src={image} alt={title} className="rounded-lg" />
      <div className="flex flex-col py-4 cursor-pointer px-4 items-start justify-between w-full h-full absolute z-10 bg-black/80 group-hover:opacity-100 opacity-0 group-hover:transition group-hover:duration-500 duration-500 transition">
        <div className="flex flex-col gap-2">
          <p className="text-[1.2rem] md:text-[1.8rem] text-MAIN_SEAWAVE font-normal">{title}</p>
          <p className="text-[1rem] md:text-[1.5rem] text-neutral-200">{description}</p>
        </div>
        <div className="flex items-center gap-x-2 gap-y-2">
          {tags?.map((tag: any, tdx: any) => (
            <Badge key={tdx} variant="secondary">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
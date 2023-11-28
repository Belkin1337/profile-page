import { useScopedI18n } from "@/lib/next-international";
import Link from "next/link";
import { Badge } from "./badge";

interface ProjectCardProps {
  id: string,
  image: string,
  title: string,
  description: string,
  demo?: string,
  source?: string,
  tags: any,
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  id,
  image,
  title,
  description,
  demo,
  source,
  tags
}) => {
  const servicalT = useScopedI18n("servical");

  return (
    <div id={id} className="flex items-center justify-start relative overflow-hidden group">
      <img src={image} alt={title} className="rounded-lg" />
      <div className="flex flex-col py-4 cursor-pointer px-4 items-start justify-between w-full h-full absolute z-10 bg-black/80 group-hover:opacity-100 opacity-0 group-hover:transition group-hover:duration-500 duration-500 transition">
        <div className="flex flex-col gap-2">
          <p className="text-[1.2rem] md:text-[1.8rem] text-MAIN_SEAWAVE font-normal">{title}</p>
          <p className="text-[1rem] md:text-[1.5rem] text-neutral-200">{description}</p>
          <div className="flex flex-row flex-wrap gap-2 mt-4">
            {demo || source ? (
              <>
                <Link target="_blank" href={demo || ""}
                  className={`${demo ? "text-black text-[1.4rem] px-4 lg:px-12 py-1 wisteria-badge" : "hidden"}`}
                >
                  {servicalT('demo')}
                </Link>
                <Link target="_blank" href={source || ""}
                  className={`${source ? "text-black text-[1.4rem] px-4 lg:px-12 py-1 wisteria-badge" : "hidden"}`}
                >
                  {servicalT('sources')}
                </Link>
              </>
            ) : null}
          </div>
        </div>
        <div className="flex items-center gap-x-2 gap-y-2">
          {tags?.map((tag: any, tdx: any) => (
            <Badge key={tdx} variant="outline">{tag}</Badge>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ProjectCard;
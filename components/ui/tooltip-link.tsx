import Link from "next/link"
import { useScopedI18n } from "@/lib/next-international";

import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip"

interface TooltipLinkProps {
  href: string,
  children?: React.ReactNode;
}

const TooltipLink: React.FC<TooltipLinkProps> = ({
  href,
  children
}) => {
  const servicalT = useScopedI18n('servical');

  return (
    <TooltipProvider>
      <Tooltip delayDuration={600}>
        <TooltipTrigger asChild className="cursor-pointer">
          {children}
        </TooltipTrigger>
        <TooltipContent className="bg-neutral-900 px-4 border-neutral-600">
          <Link
            className="text-lg text-pink hover:underline hover:underline-offset-1"
            href={href}
          >
            {servicalT('tooltip-link')}
          </Link>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}

export default TooltipLink;
import { Skeleton } from "@/ui/components/skeleton";

export const SpotifySkeleton = () => {
	return (
		<div className="flex items-center justify-start">
			<div className="flex items-center gap-2 cursor-pointer max-h-[128px] pt-4 w-full">
				<div className="overflow-hidden w-[84px] rounded-xl">
					<Skeleton className="h-[82px]"/>
				</div>
				<div className="flex flex-col gap-y-4 justify-between w-4/5 overflow-hidden">
					<div className="flex flex-col gap-y-2">
						<Skeleton className={`font-medium text-md md:text-lg text-neutral-100 truncate w-[200px] h-[14px]`}/>
						<Skeleton className={`font-normal text-neutral-400 text-sm md:text-md truncate w-[100px] h-[12px]`}/>
					</div>
					<div className="flex flex-row justify-between items-center gap-x-2">
						<Skeleton className=" text-white text-sm h-[8px] w-[24px]"/>
						<Skeleton className="w-full h-[6px]"/>
						<Skeleton className=" text-white text-sm h-[8px] w-[24px]"/>
					</div>
				</div>
			</div>
		</div>
	)
}
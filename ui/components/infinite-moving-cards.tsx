import { cn } from "@/lib/utils/styles/cn";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export const InfiniteMovingCards = ({
	items,
	direction = "left",
	speed = "fast",
	pauseOnHover = true,
	className,
}: {
	items: {
		name: string;
		description: string;
		image: string;
		tags: string[]
	}[];
	direction?: "left" | "right";
	speed?: "fast" | "normal" | "slow";
	pauseOnHover?: boolean;
	className?: string;
}) => {
	const containerRef = useRef<HTMLDivElement>(null);
	const scrollerRef = useRef<HTMLUListElement>(null);

	useEffect(() => {
		addAnimation();
	}, []);

	const [start, setStart] = useState(false);

	function addAnimation() {
		if (containerRef.current && scrollerRef.current) {
			const scrollerContent = Array.from(scrollerRef.current.children);

			scrollerContent.forEach((item) => {
				const duplicatedItem = item.cloneNode(true);
				if (scrollerRef.current) {
					scrollerRef.current.appendChild(duplicatedItem);
				}
			});

			getDirection();
			getSpeed();
			setStart(true);
		}
	}

	const getDirection = () => {
		if (containerRef.current) {
			if (direction === "left") {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"forwards"
				);
			} else {
				containerRef.current.style.setProperty(
					"--animation-direction",
					"reverse"
				);
			}
		}
	};

	const getSpeed = () => {
		if (containerRef.current) {
			if (speed === "fast") {
				containerRef.current.style.setProperty("--animation-duration", "20s");
			} else if (speed === "normal") {
				containerRef.current.style.setProperty("--animation-duration", "40s");
			} else {
				containerRef.current.style.setProperty("--animation-duration", "80s");
			}
		}
	};

	return (
		<div
			ref={containerRef}
			className={cn(
				"scroller relative z-20 max-w-[1480px] overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_20%,white_80%,transparent)]",
				className
			)}
		>
			<ul
				ref={scrollerRef}
				className={cn(
					"flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap",
					start && "animate-scroll ",
					pauseOnHover && "hover:[animation-play-state:paused]"
				)}
			>
				{items.map((item,
					idx) => (
					<li
						className="w-[460px] max-w-full group relative rounded-xl flex-shrink-0 overflow-hidden md:w-[450px]"
						style={{ background: "linear-gradient(180deg, var(--emerald-800), var(--pink-900)", }}
						key={item.name}
					>
						<Image width={1280} height={720} src={item.image} alt={item.name} loading="lazy" className="rounded-t-xl"/>
						<div
							aria-hidden="true"
							className="user-select-none -z-1 pointer-events-none absolute -left-0.5 -top-0.5 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
						/>
						<p className="relative z-20 text-xl text-white font-normal px-4 pt-2">
							{item.name}
						</p>
						<div className="relative z-20 my-2 flex flex-row items-center px-4">
							<div className="flex flex-col gap-y-1">
                <span className="text-sm leading-[1.6] text-gray-400 font-normal">
                  {item.description}
                </span>
								<div className="flex flex-wrap items-center gap-1 opacity-0 group-hover:opacity-100 group-hover:duration-300 overflow-y-auto">
									{item.tags.map((item, idx) => (
										<div key={idx} className="bg-black/10 rounded-xl px-3 py-1 flex justify-center items-center">
											<span className="text-sm text-gray-400 font-normal">
                        {item}
                      </span>
										</div>
									))}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

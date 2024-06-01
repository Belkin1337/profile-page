import { SheetContent } from "@/ui/components/sheet";
import { useEffect, useState } from "react";
import { SidebarSettings } from "@/components/sidebar/components/settings/sidebar-settings";
import { SidebarSpotifyPreview } from "@/components/sidebar/components/integrations/spotify/spotify-preview";
import { SidebarPreviewDescription } from "@/components/sidebar/components/preview/preview-description";
import { SidebarPreviewAvatar } from "@/components/sidebar/components/preview/preview-avatar";

export const Sidebar = () => {
	const [side, setSide] = useState<'right' | 'bottom'>('right');

	useEffect(() => {
		const handleResize = () => {
			const screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
			setSide(screenWidth < 1024 ? 'bottom' : 'right');
		};

		handleResize();
		window.addEventListener('resize', handleResize);

		return () => {
			window.removeEventListener('resize', handleResize);
		};
	}, []);

	return (
		<SheetContent side={side} className="rounded-xl p-0 h-[560px] lg:h-screen overflow-y-auto">
			<div className="flex flex-col bg-neutral-600 dark:bg-neutral-900 pb-4 lg:h-full">
				<SidebarPreviewAvatar/>
				<SidebarPreviewDescription/>
				<SidebarSpotifyPreview/>
				<SidebarSettings/>
			</div>
		</SheetContent>
	)
}
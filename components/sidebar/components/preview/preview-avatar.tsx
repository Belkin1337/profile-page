import Image from "next/image";

export const SidebarPreviewAvatar = () => {
	return (
		<>
			<div className="flex flex-col overflow-hidden h-[196px]">
				<Image
					loading="lazy"
					width={480}
					height={196}
					className="object-cover w-full"
					src="https://cdn.discordapp.com/attachments/904344676587417621/1196494789525393479/doc_2024-01-15_19-40-17.gif?ex=65b7d59b&is=65a5609b&hm=ccb00591b9fccb4f573c17cad1e4cc3184b1947d2019fa7a36a8d387fe1eeb4a&"
					alt="Cat chilled"
				/>
			</div>
			<div
				className="relative -top-14 left-4 w-[112px] h-[112px] overflow-hidden rounded-full border-4 dark:border-neutral-900 border-neutral-600">
				<Image
					alt="Profile Avatar"
					src="https://cdn.discordapp.com/attachments/904344676587417621/1196940894398587031/fb5da2ff-f758-4ff7-b27b-5f4bf9f969e8.jpg?ex=65b97513&is=65a70013&hm=d0068b8ecddc669554735f3622b2ad2a1a9cde5336e3802554bc1c5c8dd09198&"
					width={112}
					height={112}
					className="w-full h-full object-cover cursor-pointer"
					loading="lazy"
				/>
			</div>
		</>
	)
}
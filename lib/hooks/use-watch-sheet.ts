import { useEffect, useState } from "react";

interface WatchSheetProps {
	name: string,
}

export const useWatchSheet = ({
	name
}: WatchSheetProps) => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	const currentUrl = new URLSearchParams(window.location.search);
	const params = currentUrl.get(name);

	useEffect(() => {
		if (params === 'visible') setIsOpen(true);
	}, [params, isOpen]);

	const openSheet = () => {
		const newUrl = new URLSearchParams(window.location.search);

		if (isOpen) {
			newUrl.delete(name);
		} else {
			newUrl.append(name, "visible");
		}

		setIsOpen(!isOpen);

		const searchParamsString = newUrl.toString();
		const url = searchParamsString ? `?${searchParamsString}` : ''; // updated url without symbols

		window.history.replaceState(
			{},
			"",
			`${window.location.pathname}${url}`);
	};

	return { isOpen, openSheet }
}
// Handle smooth scrolling
export const scrollToSection = (
	e: React.MouseEvent<HTMLAnchorElement>,
	href: string,
	action?: (value: boolean) => void
) => {
	e.preventDefault();
	if (action) action(false);

	const targetId = href.replace("#", "");
	const element = document.getElementById(targetId);

	if (element) {
		element.scrollIntoView({
			behavior: "smooth",
			block: "start",
		});

		// Update URL without page reload
		window.history.pushState({}, "", href);
	}
};

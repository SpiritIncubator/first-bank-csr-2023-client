export type LinkType = {
	label: string;
	path: string;
	component?: (params: LinkType) => JSX.Element;
};
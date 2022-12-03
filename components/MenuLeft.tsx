import React, { useEffect } from "react";
import gsap from "gsap";
import { useAppDispatch } from "../hooks/ReduxHooks";
import { showToast } from "../state/actions";

interface MenuLeftProps {}

interface linkInterface {
	text: string;
	href?: string;
	onClick: () => {} | any;
}

export const menuLeftLinks: linkInterface[] = [
	{
		text: "Postal Products Unlimited",
		href: "#",
		onClick: showToast,
	},
	{
		text: "The Postal Uniform Store",
		href: "#",
		onClick: showToast,
	},
	{
		text: "USPS Approved Mailboxes",
		href: "#",
		onClick: showToast,
	},
	{
		text: "Direct Advantage",
		href: "#",
		onClick: showToast,
	},
	{
		text: "BrownCor",
		href: "#",
		onClick: showToast,
	},
];

const MenuLeft = ({}: MenuLeftProps) => {
	const dispatch = useAppDispatch();
	useEffect(() => {
		animateNavEntrance();
	}, []);
	return (
		<div className="flex-col items-start justify-start hidden gap-2 sm:flex">
			<div className="w-full px-2 py-1 text-white bg-sky-700">
				Visit our companies
			</div>
			{menuLeftLinks.map((l, i) => {
				return (
					<a
						href={l.href}
						className="w-full px-2 py-1 text-sm text-left transition-colors duration-300 text-sky-700 hover:text-white hover:bg-sky-700 left-link-item"
						key={`link-left-${i}`}
						onClick={() => {
							dispatch(showToast());
						}}
					>
						{l.text}
					</a>
				);
			})}
		</div>
	);
};

export default MenuLeft;

const animateNavEntrance = () => {
	let tl = gsap.timeline();
	tl.to(".left-link-item", {
		x: 0,
		opacity: 1,
		duration: 0.6,
		stagger: 0.1,
		ease: "elastic.out(1, 0.6)",
	});
};

import React, { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { RootState } from "../../state/store";
import clsx from "clsx";
import { useAppDispatch } from "../../hooks/ReduxHooks";
import { toggleDrawer } from "../../state/actions";
import gsap from "gsap";
import { links } from "./Navbar";
import { menuLeftLinks } from "../MenuLeft";

import DrawerDropdown from "./DrawerDropdown";

interface DrawerProps {
	drawer: RootState["UI"]["drawer"];
}

const Drawer = ({ drawer: { isOpen } }: DrawerProps) => {
	const dispatch = useAppDispatch();
	const [show, setShow] = useState(false);
	const [viewport, setViewport] = useState(9999);
	useEffect(() => {
		setShow(isOpen);
		animateBackdropEntrance(isOpen);
	}, [isOpen]);
	const handleBackdropClick = () => {
		dispatch(toggleDrawer(false));
	};
	const handleViewport = () => {
		if (typeof window === "undefined") {
			return;
		}
		setViewport(window.innerWidth);
	};
	useEffect(() => {
		if (typeof window === "undefined") {
			return;
		}
		handleViewport();
		window.addEventListener("resize", handleViewport);
	}, []);

	return (
		<Fragment>
			<div
				className={clsx(
					"fixed top-0 left-0 h-screen bg-sky-700 w-fit min-w-[150px] flex flex-col justify-start items-center z-[1000] pt-5",
					show ? "transformDrawer_show" : "transformDrawer_hide"
				)}
				id="drawer-outer-container"
			>
				<DrawerDropdown items={links} title="About Us" />
				{viewport < 640 && (
					<DrawerDropdown items={menuLeftLinks} title="Our Stores" />
				)}
				<div className="flex flex-col items-center justify-center gap-1 my-2 text-white">
					<a
						href="https://www.google.com/maps/place/ICM+Corporation/@42.9882149,-87.9162706,20.66z/data=!4m13!1m7!3m6!1s0x8805174255cb12fb:0x8afc1958dc7b209f!2s500+W+Oklahoma+Ave,+Milwaukee,+WI+53207!3b1!8m2!3d42.9882532!4d-87.9162903!3m4!1s0x8805174251122163:0xee6689ecf7115e65!8m2!3d42.988327!4d-87.9160308"
						target="_blank"
					>
						<div className="contact-line">500 W. Oklahoma Ave.</div>
						<div className="contact-line">Milwaukee, WI 53207</div>
					</a>
					<div className="contact-line">
						<a href="tel:18002294500"> Phone: 1-800-229-4500</a>
					</div>
					<div className="contact-line">Fax: 1-800-570-0007</div>
				</div>
			</div>
			<div
				className={clsx(
					"w-screen fixed top-0 left-0 h-screen z-[950] bg-black bg-opacity-30"
				)}
				id="drawer-backdrop"
				onClick={handleBackdropClick}
			/>
		</Fragment>
	);
};

const mapStateToProps = (state: RootState, props: any) => ({
	drawer: state.UI.drawer,
	props: props,
});

export default connect(mapStateToProps)(Drawer);

const animateBackdropEntrance = (isOpen: boolean) => {
	let tl = gsap.timeline();
	if (isOpen) {
		tl.to(`#drawer-backdrop`, {
			scale: isOpen ? 1 : 0,
			duration: 0,
			immediateRender: true,
		});
	}
	tl.to(`#drawer-backdrop`, {
		opacity: isOpen ? 1 : 0,
		duration: 0.5,
		ease: "Power3.out",
	});
	if (!isOpen) {
		tl.to(
			`#drawer-backdrop`,
			{
				scale: isOpen ? 1 : 0,
				duration: 0,
				immediateRender: true,
			},
			"+=0.5"
		);
	}
};

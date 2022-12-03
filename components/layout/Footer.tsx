import React from "react";

interface FooterProps {}

const Footer = ({}: FooterProps) => {
	return (
		<div className="footer-container">
			<div className="max-w-screen-lg footer-container-inner">
				<div className="font-bold">
					Your One Stop Shopping Resource
					<div className="w-full h-[1px] bg-sky-200" />
				</div>
				<div className="pr-1 text-xs text-center sm:text-sm">
					We market, manufacture and distribute thousands of institutional,
					commercial, consumer and government products through color catalogs
					and easy-to-use secure retail websites. ICM takes pride in our
					high-quality products and longstanding reputation as a low-price
					leader.
				</div>
			</div>
		</div>
	);
};

export default Footer;

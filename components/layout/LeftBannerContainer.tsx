import React from "react";
import MenuLeft from "../MenuLeft";
import RightContent from "./RightContent";
interface LeftBannerContainerProps {}

const LeftBannerContainer = ({}: LeftBannerContainerProps) => {
	return (
		<div className="flex flex-row items-start justify-start mt-3">
			<MenuLeft />
			<RightContent />
		</div>
	);
};

export default LeftBannerContainer;

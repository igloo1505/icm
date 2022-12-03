// import styles from "../styles/Home.module.scss";

import Navbar from "../components/layout/Navbar";
import BrandBanner from "../components/BrandBanner";
import LeftBannerContainer from "../components/layout/LeftBannerContainer";
import Footer from "../components/layout/Footer";
const Home = () => {
	return (
		<div className="flex flex-col items-center justify-start w-screen min-h-screen">
			<BrandBanner />
			<Navbar />
			<div className="leftBannerContainer-wrapper">
				<LeftBannerContainer />
			</div>
			<Footer />
		</div>
	);
};

export default Home;

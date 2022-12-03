import React from "react";
import Image from "next/image";
import ICM_building from "../../public/assets/ICM_building.jpg";
import ppulogo from "../../public/assets/ppulogo.jpg";
import DALogo from "../../public/assets/DALogo.jpeg";
import dbsLogo from "../../public/assets/dbs-logo.jpg";
import NSF_WEBlogo from "../../public/assets/NSF_WEBlogo.jpg";
import NSS_WEBlogo from "../../public/assets/NSS_WEBlogo.jpg";
import browncor from "../../public/assets/browncor.jpg";

interface RightContentProps {}

interface TextLinkProps {
	children: JSX.Element | JSX.Element[] | string;
	href: string;
}

const TextLink = ({ children, href }: TextLinkProps) => {
	return (
		<a
			href={href}
			style={{
				textDecoration: "none",
			}}
			className="transition-all duration-300 rounded-sm text-sky-700 hover:text-white hover:bg-sky-700 hover:py-1 hover:px-1"
		>
			{children}
		</a>
	);
};

const RightContent = ({}: RightContentProps) => {
	return (
		<div className="flex flex-col items-center justify-start w-full px-2">
			<Image src={ICM_building} alt="ICM Building" priority />
			<a href="https://www.postalproducts.com" className="my-3">
				<Image src={ppulogo} alt="ICM Logo" />
			</a>
			<div className="my-3">
				For nearly 20 years, Postal Products Unlimited, Inc. has supplied the
				United States Postal Service with postal-unique equipment and post
				office supplies, promotional products, hard-to-find items, and much
				more. PPU also offers approved Postal Employee Uniform and Work Clothes
				items from USPS certified manufacturers. The majority of postal uniform
				products are made in the USA, with a strong emphasis on
				union-manufactured items. In addition, PPU manufactures and distribute a
				full-line of USPS approved and private sector mailboxes for both
				residential and commercial customers. Finally, we offer a private sector
				mail center catalog that contains equipment and supplies that help Mail
				Distribution Centers sort, transport, and deliver mail, parcels, and
				packages.
			</div>
			<a href="http://www.directAdvantage.com">
				<Image src={DALogo} alt="Direct Action Logo" priority />
			</a>
			<div className="my-3">
				<TextLink href="https://www.directAdvantage.com">
					Direct Advantage
				</TextLink>{" "}
				features a large selection of school supplies and related items. We
				offer everything from classroom furniture, to teacher resources, the
				latest computer and audio/visual equipment, basic supplies such as pens
				and paper, library furniture, daycare supplies, cafeteria furniture,
				storage cabinets, business office furniture, bulletin board decorations,
				and more. Remember for great products, low prices, and exceptional
				service, we are your Direct Advantage.
			</div>
			<a href="http://www.discountbizsupply.com">
				<Image src={dbsLogo} alt="Discount Biz Supply Logo" />
			</a>
			<div className="my-3">
				<TextLink href="https://www.discountbizsupply.com">
					DiscountBizSupply.com
				</TextLink>{" "}
				is your one stop shop for all your office supplies and office furniture.
				Find a variety of office products from your basic office supplies (pens,
				notepads, paper clips, scissors, file folders) to technology supplies
				(ink toner, keyboards, mice, fax machines, copiers) to janitorial
				supplies (batteries, tissue, cleaning products, towels, appliances).
				Outfit your office with office furniture, office chairs, office desk,
				file cabinets and room accessories.
			</div>
			<a href="http://www.nationalschoolfurniture.com">
				<Image src={NSF_WEBlogo} alt="National School Furniture Logo" />
			</a>
			<div className="my-3">
				<TextLink href="http://www.nationalSchoolFurniture.com">
					National School Furniture
				</TextLink>{" "}
				is your one stop shop for school furniture, classroom furniture and
				equipment. We carry a variety of products, including teacher and student
				chairs and stools, desks, dry-erase boards, interactive whiteboards and
				technology products, AV carts and equipment, office furniture, outdoor
				furniture, cafeteria furniture and so much more. You can also shop our
				biggest name brands, like Copernicus, Virco and Sandusky Lee. Shopping
				at National School Furniture is simple and secure – use our search bar,
				click on the category tabs, or call us at
				<TextLink href="tel:18006697766"> 1-800-669-7766. </TextLink>
				Our knowledgeable staff is always ready to help you find the products
				you need.
			</div>
			<a href="http://www.nationalschoolsupply.com">
				<Image src={NSS_WEBlogo} alt="National School Supply Logo" />
			</a>
			<div className="my-3">
				<TextLink href="https://www.nationalSchoolSupply.com">
					National School Supply
				</TextLink>{" "}
				is a one stop shop for all of your school supplies, classroom supplies,
				teacher resources, office supplies and school equipment. You'll find a
				huge selection of your favorite school supply products, including arts &
				crafts, pens and writing utensils, markers and highlighters, crayons,
				paints, construction paper, subject materials, Maps and Globes, teaching
				resources, Dr. Seuss classroom decorations, incentives, manipulatives,
				dramatic and active play and so much more. Shopping at National School
				Supply is simple and secure – use our search bar, click on the category
				tabs, or call us at 1-800-669-7766. Our knowledgeable staff is always
				ready to help you find the products you need.
			</div>
			<a href="http://www.browncor.com">
				<Image src={browncor} alt="BrownCor Logo" />
			</a>
			<div className="my-3">
				<TextLink href="http://www.browncor.com">BrownCor </TextLink>is a
				leading distributor of packaging, storage, and shipping supplies. We
				distribute quality products through our nationwide mail order catalogs
				from our 200,000 square foot distribution facility located at 530 West
				Oklahoma Avenue, Milwaukee, WI. We offer a variety of Box Sealing Tape
				and Dispensers from the economical to tape that will handle the
				toughest, most demanding packaging applications. Choose from thousands
				of Corrugated Boxes and Mailers that can ship, store, or package
				practically any item. Wrap and protect your package contents from the
				most fragile pieces to the heaviest items with our large selection of
				Bubble Wrap and Protective Cushioning.
			</div>
		</div>
	);
};

export default RightContent;

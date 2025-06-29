"use client";

import { scrollToSection } from "@/app/shared/handleScroll";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import logo from "/public/logo.png";

interface NavItem {
	name: string;
	href: string;
}

const navItems: NavItem[] = [
	{ name: "Home", href: "#home" },
	{ name: "About", href: "#about" },
	{ name: "Product", href: "#product" },
	{ name: "FAQ", href: "#faq" },
	{ name: "Contact", href: "#contact" },
];

export default function Navigation() {
	const [isScrolled, setIsScrolled] = useState(false);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	// Handle scroll effect
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 10) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				isScrolled
					? "bg-black/80 backdrop-blur-md shadow-lg"
					: "bg-transparent"
			}`}
		>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
				<div className='flex justify-between items-center h-16'>
					{/* Logo */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ duration: 0.5 }}
						className='flex-shrink-0 flex items-center'
					>
						<Link
							href='#home'
							onClick={(e) => scrollToSection(e, "#home")}
							className='flex items-center'
						>
							<Image
								src={logo}
								alt='Kronos'
								className='h-12 w-max'
							/>
							{/* <div className='w-10 h-10 rounded-lg bg-gradient-to-br from-purple-600 to-cyan-500 flex items-center justify-center mr-2'>
								<span className='text-white font-bold text-xl'>
									K
								</span>
							</div>
							<span className='text-white font-mono font-bold text-xl'>
								KRONOS
							</span> */}
						</Link>
					</motion.div>

					{/* Desktop Navigation */}
					<nav className='hidden md:flex space-x-8'>
						{navItems.map((item, index) => (
							<motion.div
								key={item.name}
								initial={{ opacity: 0, y: -10 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
							>
								<Link
									href={item.href}
									onClick={(e) =>
										scrollToSection(e, item.href)
									}
									className='text-gray-300 hover:text-blue-400 px-3 py-2 text-sm font-medium transition-colors duration-200'
								>
									{item.name}
								</Link>
							</motion.div>
						))}
					</nav>

					{/* Mobile menu button */}
					<div className='md:hidden flex items-center'>
						<button
							onClick={() =>
								setIsMobileMenuOpen(!isMobileMenuOpen)
							}
							className='text-gray-300 hover:text-white focus:outline-none'
						>
							{isMobileMenuOpen ? (
								<X className='h-6 w-6' />
							) : (
								<Menu className='h-6 w-6' />
							)}
						</button>
					</div>
				</div>
			</div>

			{/* Mobile Navigation */}
			<AnimatePresence>
				{isMobileMenuOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.3 }}
						className='md:hidden bg-gray-900/95 backdrop-blur-md'
					>
						<div className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
							{navItems.map((item) => (
								<Link
									key={item.name}
									href={item.href}
									onClick={(e) =>
										scrollToSection(e, item.href)
									}
									className='text-gray-300 hover:text-purple-400 block px-3 py-2 text-base font-medium border-l-2 border-transparent hover:border-purple-400 transition-colors duration-200'
								>
									{item.name}
								</Link>
							))}
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}

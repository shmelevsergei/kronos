"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import bg from "/public/promo.webp";

export default function Hero() {
	const [isGlitching, setIsGlitching] = useState(false);

	useEffect(() => {
		// Random glitch effect timing
		const glitchInterval = setInterval(() => {
			setIsGlitching(true);
			setTimeout(() => setIsGlitching(false), 200);
		}, Math.random() * 5000 + 3000);

		return () => clearInterval(glitchInterval);
	}, []);

	return (
		<section className='h-screen flex flex-col justify-center px-4 md:px-8 relative pt-16 overflow-hidden'>
			{/* Background Image with Overlay */}
			<div className='absolute inset-0 z-0'>
				<Image
					src={bg}
					alt='Futuristic Background'
					fill
					className='object-cover'
					priority
				/>
				<div className='absolute inset-0 bg-gradient-to-r from-black via-black/50 to-transparent z-10'></div>
				<div className='absolute inset-0 bg-black/20 z-10'></div>
			</div>

			<div className='container mx-auto max-w-7xl relative z-20'>
				<div className='grid grid-cols-1 md:grid-cols-2 gap-8 items-center'>
					{/* Text Content - Left Aligned */}
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
						className='text-left'
					>
						<h1
							className={`text-5xl md:text-7xl font-bold font-mono mb-6 ${
								isGlitching ? "glitch" : ""
							}`}
							style={{
								background:
									"linear-gradient(to right, #ff0000, #ffc45d)",
								WebkitBackgroundClip: "text",
								WebkitTextFillColor: "transparent",
								textShadow: isGlitching
									? "2px 2px #22d3ff, -2px -2px #ff0000"
									: "none",
							}}
						>
							KRONOS SYNAPSE
						</h1>

						<p className='text-xl md:text-2xl font-mono text-gray-300 mb-8 max-w-xl'>
							The World&apos;s First AI That Remembers You
						</p>

						<p className='text-gray-400 mb-10 max-w-xl'>
							Experience a revolutionary AI companion that evolves
							with every interaction, creating a persistent memory
							that transforms your digital experience forever.
						</p>

						<motion.button
							whileHover={{
								scale: 1.05,
								boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
							}}
							className='bg-gradient-to-r from-red-600 to-yellow-500 px-8 py-4 rounded-lg text-white font-medium transition-all duration-300 hover:shadow-lg hover:shadow-red-500/30'
						>
							Join the Revelation
						</motion.button>
					</motion.div>

					{/* Empty space or could add a floating element here */}
					<div className='hidden md:block'></div>
				</div>
			</div>

			{/* Decorative elements */}
			<div className='absolute bottom-10 left-0 right-0 flex justify-center z-20'>
				<motion.div
					animate={{ y: [0, 10, 0] }}
					transition={{
						repeat: Number.POSITIVE_INFINITY,
						duration: 2,
					}}
				>
					<svg
						xmlns='http://www.w3.org/2000/svg'
						width='24'
						height='24'
						viewBox='0 0 24 24'
						fill='none'
						stroke='currentColor'
						strokeWidth='2'
						strokeLinecap='round'
						strokeLinejoin='round'
						className='text-purple-400'
					>
						<path d='M12 5v14'></path>
						<path d='m19 12-7 7-7-7'></path>
					</svg>
				</motion.div>
			</div>
		</section>
	);
}

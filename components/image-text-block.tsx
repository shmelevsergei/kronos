"use client";

import { motion } from "framer-motion";
import Image from "next/image";

interface ImageTextBlockProps {
	imageUrl: string;
	imageAlt: string;
	title: string;
	description: string;
	imageOnLeft?: boolean;
}

export default function ImageTextBlock({
	imageUrl,
	imageAlt,
	title,
	description,
	imageOnLeft = true,
}: ImageTextBlockProps) {
	return (
		<section className='py-20 px-4 md:px-8'>
			<div className='max-w-7xl mx-auto'>
				<div
					className={`flex flex-col ${
						imageOnLeft ? "md:flex-row" : "md:flex-row-reverse"
					} gap-8 md:gap-16 items-center`}
				>
					{/* Image Column */}
					<motion.div
						initial={{ opacity: 0, x: imageOnLeft ? -50 : 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7 }}
						viewport={{ once: true }}
						className='w-full md:w-1/2'
					>
						<div className='relative aspect-square md:aspect-[4/3] overflow-hidden rounded-xl border border-blue-500/20'>
							<Image
								src={imageUrl || "/placeholder.svg"}
								alt={imageAlt}
								fill
								className='object-cover hover:scale-105 transition-transform duration-700'
							/>
							<div className='absolute inset-0 bg-gradient-to-tr from-black/60 via-transparent to-transparent' />
						</div>
					</motion.div>

					{/* Text Column */}
					<motion.div
						initial={{ opacity: 0, x: imageOnLeft ? 50 : -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.7, delay: 0.2 }}
						viewport={{ once: true }}
						className='w-full md:w-1/2'
					>
						<h2 className='text-3xl md:text-4xl font-bold mb-6 font-mono text-blue-400/80'>
							{title}
						</h2>
						<div className='prose prose-invert max-w-none'>
							<p className='text-gray-300 leading-relaxed'>
								{description}
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

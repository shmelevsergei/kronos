"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ImageShowcase() {
	return (
		<section className='py-20 px-4 md:px-8 bg-black/50'>
			<div className='max-w-7xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-3xl md:text-4xl font-bold text-center mb-16 font-mono text-blue-400/80'
				>
					Glimpse Into The Future
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5 }}
						viewport={{ once: true }}
						className='relative aspect-square overflow-hidden rounded-lg group'
					>
						<Image
							src='/placeholder.svg?height=600&width=600'
							alt='Kronos Memory Architecture'
							width={600}
							height={600}
							className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
							<p className='p-4 text-white font-mono text-sm'>
								Kronos Memory Architecture
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.1 }}
						viewport={{ once: true }}
						className='relative aspect-square overflow-hidden rounded-lg group'
					>
						<Image
							src='/placeholder.svg?height=600&width=600'
							alt='Neural Network Visualization'
							width={600}
							height={600}
							className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
							<p className='p-4 text-white font-mono text-sm'>
								Neural Network Visualization
							</p>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.9 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
						className='relative aspect-square overflow-hidden rounded-lg group'
					>
						<Image
							src='/placeholder.svg?height=600&width=600'
							alt='Kronos AI Interface'
							width={600}
							height={600}
							className='object-cover w-full h-full transition-transform duration-500 group-hover:scale-110'
						/>
						<div className='absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end'>
							<p className='p-4 text-white font-mono text-sm'>
								Kronos AI Interface
							</p>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

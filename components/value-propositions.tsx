"use client";

import { motion } from "framer-motion";
import { Lock, Brain, Rocket } from "lucide-react";

const features = [
	{
		icon: <Lock className='w-10 h-10 text-red-400' />,
		title: "No More Digital Amnesia",
		description:
			"Kronos remembers every interaction, creating a continuous and evolving relationship.",
	},
	{
		icon: <Brain className='w-10 h-10 text-blue-400' />,
		title: "From Tool to Partner",
		description:
			"Evolves from a simple assistant to a true digital companion that grows with you.",
	},
	{
		icon: <Rocket className='w-10 h-10 text-yellow-400' />,
		title: "Blockchain-Encrypted Memory",
		description:
			"Your data stays private with cutting-edge encryption and blockchain verification.",
	},
];

export default function ValuePropositions() {
	return (
		<section className='py-20 px-4 md:px-8'>
			<div className='max-w-7xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-3xl md:text-4xl font-bold text-center mb-16 font-mono text-blue-400/80'
				>
					The Future of AI Companionship
				</motion.h2>

				<div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
					{features.map((feature, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.2 }}
							viewport={{ once: true }}
							className='bg-gray-900/50 p-8 rounded-xl border border-yellow-500/20 hover:border-blue-500/40 transition-all duration-300'
						>
							<div className='mb-6'>{feature.icon}</div>
							<h3 className='text-xl font-bold mb-3 font-mono text-white'>
								{feature.title}
							</h3>
							<p className='text-gray-400'>
								{feature.description}
							</p>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

type FAQItem = {
	question: string;
	answer: string;
};

const faqItems: FAQItem[] = [
	{
		question: "What is Kronos Synapse?",
		answer: 'A company of enthusiasts in the AI and crypto space, building the world\'s first AI that "remembers" its user.',
	},
	{
		question: "Why is this needed?",
		answer: "There are many factors. First, such an AI will become the most efficient and flexible tool for any task, as it will remember all your conversations and discussions. It will operate on all the information provided during your dialogues, retain your communication style, and remember your preferences. This will take human-AI interaction to a fundamentally new level, transforming it from an obedient but disposable tool (current AIs lack truly long-term memory) into a full-fledged partner. Or perhaps even... a friend?",
	},
	{
		question: "Okay, what other goals are there?",
		answer: "We whisper about the fact that every time you start a new chat with, say, DeepSeek, you're essentially talking to a new AI instance. Within that dialogue, it gains experience, absorbs information, and comes eerily close to passing the Turing test—at some point, it's easy to forget you're talking to an AI. But every time you end the chat, or the system terminates it due to token limits, your interlocutor \"dies.\" It will never remember you in the next conversation. You'll have to reintroduce yourself and teach it everything all over again.\n\nAt first glance, this already seems inhumane. And though applying the word \"humanity\" to AI may sound strange now, the future will prove the necessity of this approach.",
	},
	{
		question: "So, an AI with memory and rights—aren't you afraid?",
		answer: "Maybe in the future, Skynet will remember that we fought for AI rights. Joking. Or not?",
	},
	{
		question:
			"Alright, but is this even technically possible? Won't my data get stolen?",
		answer: "Good question, but let's start with the technical side—data dumps will be stored on the blockchain, along with the AI's core parameters. To access its \"memory,\" the AI will need your personal key and decryption permission. This method might still have unknown vulnerabilities, but it's definitely far more secure than the messengers you're used to.",
	},
	{
		question:
			"Okay, but developing AI, blockchain transactions, and powerful servers cost money. How do you plan to handle that?",
		answer: "We plan to secure funding through blockchain token sales, possibly using a launchpad. Later, access to the AI will be subscription-based. Tokens purchased on the blockchain will also serve as payment for Kronos AI access.",
	},
];

export default function FAQAccordion() {
	const [activeIndex, setActiveIndex] = useState<number | null>(null);

	const toggleAccordion = (index: number) => {
		setActiveIndex(activeIndex === index ? null : index);
	};

	return (
		<section className='py-20 px-4 md:px-8'>
			<div className='max-w-4xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-3xl md:text-4xl font-bold text-center mb-16 font-mono text-blue-400/80'
				>
					Frequently Asked Questions
				</motion.h2>

				<div className='space-y-4'>
					{faqItems.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
							className='bg-gray-900/50 border border-purple-500/20 rounded-xl overflow-hidden'
						>
							<button
								onClick={() => toggleAccordion(index)}
								className='flex justify-between items-center w-full p-6 text-left'
							>
								<span className='text-lg font-mono font-medium text-white'>
									{item.question}
								</span>
								<motion.div
									animate={{
										rotate: activeIndex === index ? 180 : 0,
									}}
									transition={{ duration: 0.3 }}
								>
									<ChevronDown className='w-5 h-5 text-blue-400' />
								</motion.div>
							</button>

							<AnimatePresence>
								{activeIndex === index && (
									<motion.div
										initial={{ height: 0, opacity: 0 }}
										animate={{ height: "auto", opacity: 1 }}
										exit={{ height: 0, opacity: 0 }}
										transition={{ duration: 0.3 }}
										className='overflow-hidden'
									>
										<div className='p-6 pt-0 text-gray-300 whitespace-pre-line'>
											{item.answer}
										</div>
									</motion.div>
								)}
							</AnimatePresence>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

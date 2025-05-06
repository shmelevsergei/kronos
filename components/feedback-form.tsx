"use client";

import type React from "react";

import { motion } from "framer-motion";
import { useState } from "react";

export default function FeedbackForm() {
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		setFormState({
			...formState,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		try {
			const response = await fetch("/api/send", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: JSON.stringify(formState),
			});

			const data = await response.json();

			if (data.success) {
				console.log("Email sent:", formState);
				setFormState({ name: "", email: "", message: "" });
				alert("Message sent successfully!");
			} else {
				throw new Error(data.message || "Failed to send email");
			}
		} catch (error) {
			console.error("Error:", error);
			alert("Error sending. Try again later.");
		}
	};

	return (
		<section className='py-20 px-4 md:px-8'>
			<div className='max-w-3xl mx-auto'>
				<motion.h2
					initial={{ opacity: 0 }}
					whileInView={{ opacity: 1 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className='text-3xl md:text-4xl font-bold text-center mb-16 font-mono text-blue-400/80'
				>
					Join The Revelation
				</motion.h2>

				<motion.div
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
				>
					<form
						onSubmit={handleSubmit}
						className='bg-gray-900/50 p-8 rounded-xl border border-yellow-500/20'
					>
						<div className='mb-6'>
							<label
								htmlFor='name'
								className='block text-sm font-medium text-gray-400 mb-2 font-mono'
							>
								NAME
							</label>
							<input
								type='text'
								id='name'
								name='name'
								value={formState.name}
								onChange={handleChange}
								placeholder='Enter your name'
								className='bg-gray-800 w-full p-3 rounded border border-yellow-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
								required
							/>
						</div>

						<div className='mb-6'>
							<label
								htmlFor='email'
								className='block text-sm font-medium text-gray-400 mb-2 font-mono'
							>
								EMAIL
							</label>
							<input
								type='email'
								id='email'
								name='email'
								value={formState.email}
								onChange={handleChange}
								placeholder='Enter your email'
								className='bg-gray-800 w-full p-3 rounded border border-yellow-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
								required
							/>
						</div>

						<div className='mb-6'>
							<label
								htmlFor='message'
								className='block text-sm font-medium text-gray-400 mb-2 font-mono'
							>
								MESSAGE
							</label>
							<textarea
								id='message'
								name='message'
								value={formState.message}
								onChange={handleChange}
								placeholder='Your message'
								rows={4}
								className='bg-gray-800 w-full p-3 rounded border border-yellow-700 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 outline-none transition-all duration-200 text-white'
								required
							/>
						</div>

						<motion.button
							whileHover={{
								scale: 1.02,
								boxShadow: "0 0 15px rgba(147, 51, 234, 0.5)",
							}}
							type='submit'
							className='bg-gradient-to-r from-red-600 to-yellow-500 w-full px-6 py-3 rounded-lg hover:shadow-blue-500/30 hover:shadow-lg transition-all duration-300 font-medium'
						>
							Send Message
						</motion.button>
					</form>
				</motion.div>
			</div>
		</section>
	);
}

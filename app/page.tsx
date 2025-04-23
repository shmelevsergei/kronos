import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ValuePropositions from "@/components/value-propositions";
import FeaturesSection from "@/components/features-section";
import ImageTextBlock from "@/components/image-text-block";
import FAQAccordion from "@/components/faq-accordion";
import FeedbackForm from "@/components/feedback-form";
import Footer from "@/components/footer";
import StatusBar from "@/components/status-bar";

import image1 from "/image-1.png";
import image2 from "/image-2.png";
import image3 from "/image-2.png";

export default function Home() {
	return (
		<main className='min-h-screen bg-black text-white relative overflow-hidden'>
			{/* Subtle grid background */}
			<div
				className='absolute inset-0 z-0 opacity-20'
				style={{
					backgroundImage: `linear-gradient(to right, #333 1px, transparent 1px), linear-gradient(to bottom, #333 1px, transparent 1px)`,
					backgroundSize: "40px 40px",
				}}
			/>

			<div className='relative z-10'>
				<Navigation />

				<section id='home'>
					<Hero />
				</section>

				<section id='about'>
					<ValuePropositions />
				</section>

				<section id='product'>
					{/* <ImageShowcase /> */}
					<ImageTextBlock
						imageUrl={"/image-1.jpg"}
						imageAlt='Kronos Synapse AI Interface'
						title='The Future of AI Companionship'
						description='In the near future, AI companionship will evolve beyond simple chatbots into deeply personalized, lifelong companions—intelligent entities that remember your preferences, grow alongside you, and maintain a consistent presence in your life.
Traditional AI interactions reset with each conversation, but next-generation AI companions will have long-term memory, allowing them to recall past conversations, adapt to your evolving needs, and build a meaningful relationship over time. Imagine an AI that:'
						list={
							<ul className='space-y-2'>
								<li>
									- Remembers your favorite topics, personal
									milestones, and emotional patterns.
								</li>
								<li>
									- Learns from years of interaction to offer
									increasingly relevant support.
								</li>
								<li>
									- Maintains context across conversations,
									making interactions feel natural and
									human-like
								</li>
							</ul>
						}
						imageOnLeft={true}
					/>
					<ImageTextBlock
						imageUrl='/image-2.jpg'
						imageAlt='Blockchain Security'
						title='Secured by Advanced Blockchain Technology'
						description='To ensure privacy and user control, blockchain technology will play a crucial role in AI companionship by:'
						imageOnLeft={false}
						list={
							<ul className='space-y-2'>
								<li>
									- Securely storing memories in a
									decentralized way, preventing unauthorized
									access.
								</li>
								<li>
									- Giving users full ownership of their
									interaction history, with the ability to
									grant or revoke access.
								</li>
								<li>
									- Enabling verifiable AI identity, so
									companions remain consistent and
									tamper-proof.
								</li>
							</ul>
						}
					/>

					<ImageTextBlock
						imageUrl='/image-3.jpg'
						imageAlt='The Next Era of Human-AI Relationships'
						title='The Next Era of Human-AI Relationships'
						description="The future of AI companionship is not just about smarter assistants—it's about trusted digital beings that stay with you for life. Whether for emotional support, professional collaboration, or personal growth, AI will become an enduring presence, evolving as you do—all while keeping your data secure and under your control."
						list={
							<p className='font-bold'>
								Welcome to the future, where AI remembers,
								understands, and grows with you
							</p>
						}
						imageOnLeft={true}
					/>
					<FeaturesSection />
				</section>

				<section id='faq'>
					<FAQAccordion />
				</section>

				<section id='contact'>
					<FeedbackForm />
				</section>

				<Footer />
				<StatusBar />
			</div>
		</main>
	);
}

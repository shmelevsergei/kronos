import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import ValuePropositions from "@/components/value-propositions";
import ImageShowcase from "@/components/image-showcase";
import FeaturesSection from "@/components/features-section";
import ImageTextBlock from "@/components/image-text-block";
import FAQAccordion from "@/components/faq-accordion";
import FeedbackForm from "@/components/feedback-form";
import Footer from "@/components/footer";
import StatusBar from "@/components/status-bar";

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
					<ImageShowcase />
					<ImageTextBlock
						imageUrl='/placeholder.svg?height=800&width=800'
						imageAlt='Kronos Synapse AI Interface'
						title='The Future of AI Companionship'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.'
						imageOnLeft={true}
					/>
					<ImageTextBlock
						imageUrl='/placeholder.svg?height=800&width=800'
						imageAlt='Blockchain Security'
						title='Secured by Advanced Blockchain Technology'
						description='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.'
						imageOnLeft={false}
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

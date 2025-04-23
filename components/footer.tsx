import { RiTelegramLine } from "react-icons/ri";
import { RiTwitterXFill } from "react-icons/ri";

export default function Footer() {
	return (
		<footer className='pt-20 pb-10 px-4 md:px-8 border-t border-gray-800'>
			<div className='max-w-7xl mx-auto'>
				<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-10'>
					<div>
						<h3 className='text-xl font-bold mb-4 font-mono text-white'>
							KRONOS SYNAPSE
						</h3>
						<p className='text-gray-400 mb-4'>
							Redefining the future of AI companionship with
							memory that persists.
						</p>
						<p className='text-gray-500 text-sm'>
							© 2025 Kronos Synapse. All rights reserved.
						</p>
					</div>

					<div>
						<h3 className='text-lg font-bold mb-4 font-mono text-white'>
							QUICK LINKS
						</h3>
						<ul className='space-y-2'>
							<li>
								<a
									href='#'
									className='text-gray-400 hover:text-blue-400 transition-colors'
								>
									About Us
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-400 hover:text-blue-400 transition-colors'
								>
									Privacy Policy
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-400 hover:text-blue-400 transition-colors'
								>
									Tokenomics
								</a>
							</li>
							<li>
								<a
									href='#'
									className='text-gray-400 hover:text-blue-400 transition-colors'
								>
									Terms of Service
								</a>
							</li>
						</ul>
					</div>

					<div>
						<h3 className='text-lg font-bold mb-4 font-mono text-white'>
							CONTACT
						</h3>
						<p className='text-gray-400 mb-2'>
							Have questions? Reach out to us.
						</p>
						<p className='text-blue-400'>info@kronossynapse.com</p>
					</div>

					<div>
						<h3 className='text-lg font-bold mb-4 font-mono text-white'>
							FOLLOW US
						</h3>
						<div className='flex space-x-4'>
							<a
								href='https://x.com/KronosSynapse'
								className='text-gray-400 hover:text-blue-400 transition-colors'
							>
								<RiTwitterXFill className='w-6 h-6' />
								<span className='sr-only'>X</span>
							</a>
							{/* <a href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                <Github className="w-6 h-6" />
                <span className="sr-only">GitHub</span>
              </a> */}
							<a
								href='https://t.me/kronossynapse'
								className='text-gray-400 hover:text-blue-400 transition-colors'
							>
								<RiTelegramLine className='w-6 h-6' />
								<span className='sr-only'>Telegram</span>
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

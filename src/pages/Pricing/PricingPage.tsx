import {Check} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import mainLoginImage from '../../assets/loginMain1.jpg';

const tiers = [
	{
		name: 'Hobby',
		id: 'tier-hobby',
		href: '#',
		priceMonthly: '$29',
		description: "The perfect plan if you're just getting started with our product.",
		features: ['25 products', 'Up to 10,000 subscribers', 'Advanced analytics', '24-hour support response time'],
		featured: false,
	},
	{
		name: 'Pro',
		id: 'tier-pro',
		href: '#',
		priceMonthly: '$59',
		description: 'A plan for growing businesses that need more flexibility.',
		features: ['100 products', 'Up to 50,000 subscribers', 'Advanced analytics', 'Priority support', 'A/B testing'],
		featured: false,
	},
	{
		name: 'Enterprise',
		id: 'tier-enterprise',
		href: '#',
		priceMonthly: '$99',
		description: 'Dedicated support and infrastructure for your company.',
		features: ['Unlimited products', 'Unlimited subscribers', 'Advanced analytics', 'Dedicated support representative', 'Marketing automations', 'Custom integrations'],
		featured: true,
	},
];

const PricingPage = () => {
	const navigate = useNavigate();
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-left" style={{backgroundImage: `url(${mainLoginImage})`}}>
			<div className="relative mx-auto max-w-6xl px-6 mt-6">
				<div className="mx-auto max-w-4xl text-center">
					<p className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-6xl">Choose the right plan for you</p>
				</div>
				<p className="mx-auto mt-6 max-w-2xl text-center text-lg text-gray-600 sm:text-xl">
					Choose an affordable plan that’s packed with the best features for engaging your audience, creating customer loyalty, and driving sales.
				</p>

				<div className="mx-auto mt-16 grid max-w-5xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
					{tiers.map((tier) => (
						<div
							key={tier.id}
							className="relative group flex flex-col rounded-3xl p-8 ring-1 ring-gray-900/10 shadow-md transition-transform duration-300 
										hover:scale-108 hover:z-10 hover:ring-2 hover:ring-cyan-400 
										hover:shadow-[0px_0px_20px_5px_rgba(34,211,238,0.6)] bg-white mb-10">
							<h3 className="text-base font-semibold text-cyan-400">{tier.name}</h3>
							<p className="mt-4 flex items-baseline gap-x-2">
								<span className="text-5xl font-semibold tracking-tight text-gray-900">{tier.priceMonthly}</span>
								<span className="text-base text-gray-500">/month</span>
							</p>
							<p className="mt-6 text-base text-gray-600">{tier.description}</p>
							<ul className="mt-4 space-y-3 text-sm text-gray-600 mb-6">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-center gap-x-3">
										<Check className="h-5 w-5 text-cyan-400" />
										{feature}
									</li>
								))}
							</ul>
							{/* Button positioned at the bottom */}
							<button className="mt-auto w-full text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white py-2 rounded-lg font-semibold cursor-pointer transition duration-200 mt-4">
								Get started today
							</button>
						</div>
					))}
				</div>
				<div className="w-full flex justify-center">
					<button
						className="w-1/3 text-cyan-400 bg-white border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white py-2 rounded-lg font-semibold cursor-pointer transition duration-200 
							"
						onClick={() => navigate('/login')}>
						Get back to login
					</button>
				</div>
			</div>
		</div>
	);
};

export default PricingPage;

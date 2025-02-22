import mainLoginImage from '../../assets/loginMain1.jpg';
import cardLoginImage from '../../assets/loginCard1.jpg';
import {useNavigate} from 'react-router-dom';

export default function LoginPage() {
	const navigate = useNavigate();
	const tiers = [
		{
			headline: 'AI-Powered Documentation',
			description: 'Transform voice recordings into accurate, structured reports in seconds.',
			id: 'headline-1',
		},
		{
			headline: 'Seamless Workflow Integration',
			description: 'Easily integrate with existing systems to enhance documentation efficiency without disrupting your workflow.',
			id: 'headline-2',
		},
		{
			headline: 'Empowering Healthcare Professionals',
			description: 'Free up valuable time for patient care by automating repetitive documentation tasks with cutting-edge AI.',
			id: 'headline-3',
		},
	];
	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-left" style={{backgroundImage: `url(${mainLoginImage})`}}>
			{/* Card Container with two sections */}
			<div className="w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden flex h-[500px] bg-white">
				{/* Left Side: Login Form */}
				<div className="flex w-[calc(3/7*100%)] items-center justify-center p-8">
					<div className="w-full">
						<h2 className="text-center text-cyan-400 text-2xl font-semibold mb-6">Welcome Back</h2>

						{/* Login Form */}
						<form className="space-y-6">
							{/* Email Input */}
							<div>
								<label className="block text-gray-600 text-sm mb-1">Email</label>
								<input type="email" placeholder="Enter your email" className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400" />
							</div>

							{/* Password Input */}
							<div>
								<label className="block text-gray-600 text-sm mb-1">Password</label>
								<input
									type="password"
									placeholder="Enter your password"
									className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400"
								/>
							</div>

							{/* Forgot Password */}
							<div className="text-left text-sm">
								<a href="#" className="text-cyan-400 hover:underline">
									Forgot password?
								</a>
							</div>

							{/* Sign In Button */}
							<button
								className="w-full text-cyan-400 border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white py-2 rounded-lg font-semibold cursor-pointer transition duration-200"
								onClick={() => navigate('/')}>
								Sign In
							</button>
						</form>

						{/* Sign Up Link */}
						<p className="text-center text-sm text-gray-500 mt-6">
							Don’t have an account?{' '}
							<a href="pricing" className="text-cyan-400 hover:underline">
								Sign up
							</a>
						</p>
					</div>
				</div>

				{/* Right Side: Background Image */}
				<div className="w-[calc(4/7*100%)] bg-cover bg-center text-gray-800 p-4" style={{backgroundImage: `url(${cardLoginImage})`}}>
					{tiers.map((tier) => (
						<div key={tier.id} className="text-center glass mb-2 p-6 rounded-lg shadow-lg inline-block max-w-lg">
							<h2 className="text-2xl font-bold">{tier.headline}</h2>
							<p className="text-lg">{tier.description}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
}

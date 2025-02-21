import mainLoginImage from '../../assets/loginMain1.jpg';
import cardLoginImage from '../../assets/loginCard1.jpg';
import {useNavigate} from 'react-router-dom';

export default function LoginPage() {
	const navigate = useNavigate();
	return (
		<div className="flex min-h-screen items-center justify-center bg-cover bg-center" style={{backgroundImage: `url(${mainLoginImage})`}}>
			{/* Card Container with two sections */}
			<div className="w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden flex h-[500px] bg-white">
				{/* Left Side: Login Form */}
				<div className="flex w-3/7 items-center justify-center p-8">
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
				<div className="w-4/7 bg-cover bg-center text-gray-800 p-4" style={{backgroundImage: `url(${cardLoginImage})`}}>
					<div className="text-center bg-white/90 mb-2 p-6 rounded-lg shadow-lg inline-block max-w-lg">
						<h2 className="text-2xl font-bold">AI-Powered Documentation</h2>
						<p className="text-lg">Transform voice recordings into accurate, structured reports in seconds.</p>
					</div>
					<div className="text-center bg-white/90 mb-2 p-6 rounded-lg shadow-lg inline-block max-w-lg">
						<h2 className="text-2xl font-bold mb-2">Seamless Workflow Integration</h2>
						<p className="text-lg">Easily integrate with existing systems to enhance documentation efficiency without disrupting your workflow.</p>
					</div>
					<div className="text-center bg-white/90 mb-2 p-6 rounded-lg shadow-lg inline-block max-w-lg">
						<h2 className="text-2xl font-bold mb-2">Empowering Healthcare Professionals</h2>
						<p className="text-lg">Free up valuable time for patient care by automating repetitive documentation tasks with cutting-edge AI.</p>
					</div>
				</div>
			</div>
		</div>
	);
}

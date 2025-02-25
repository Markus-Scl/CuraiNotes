import mainLoginImage from '../../assets/loginMain1.jpg';
import cardLoginImage from '../../assets/loginCard1.jpg';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';
import {tiers} from './utils';

export default function LoginPage() {
	const navigate = useNavigate();
	const {t} = useTranslation();

	return (
		<div className="flex min-h-screen w-full items-center justify-center bg-cover bg-no-repeat bg-left" style={{backgroundImage: `url(${mainLoginImage})`}}>
			{/* Card Container with two sections */}
			<div className="w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden flex h-[500px] bg-white">
				{/* Left Side: Login Form */}
				<div className="flex w-[calc(3/7*100%)] items-center justify-center p-8">
					<div className="w-full">
						<h2 className="text-center text-primary text-2xl font-semibold mb-6">{t('login.headline')}</h2>

						{/* Login Form */}
						<form className="space-y-6">
							{/* Email Input */}
							<div>
								<label className="block text-gray-600 text-sm mb-1">{t('login.email')}</label>
								<input
									type="email"
									placeholder={t('login.enterEmail')}
									className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
								/>
							</div>

							{/* Password Input */}
							<div>
								<label className="block text-gray-600 text-sm mb-1">{t('login.password')}</label>
								<input
									type="password"
									placeholder={t('login.enterPassword')}
									className="w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-cyan-400 text-black"
								/>
							</div>

							{/* Forgot Password */}
							<div className="text-left text-sm">
								<a href="#" className="text-primary hover:underline">
									{t('login.forgot')}
								</a>
							</div>

							{/* Sign In Button */}
							<button
								className="w-full text-primary border-2 border-cyan-400 hover:bg-cyan-400 hover:text-white py-2 rounded-lg font-semibold cursor-pointer transition duration-200"
								onClick={() => navigate('/')}>
								{t('login.signIn')}
							</button>
						</form>

						{/* Sign Up Link */}
						<p className="text-center text-sm text-gray-500 mt-6">
							{t('login.signUpQuestion')}{' '}
							<a href="pricing" className="text-primary hover:underline">
								{t('login.signUp')}
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

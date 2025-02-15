import {Box, Card, CardContent, TextField, Button, Typography, FormControl} from '@mui/material';
import mainLoginImage from '../../assets/loginMain1.jpg';
import cardLoginImage from '../../assets/loginCard1.jpg';

export default function LoginPage() {
	return (
		<Box
			className="flex min-h-screen items-center justify-center"
			style={{
				backgroundImage: `url(${mainLoginImage})`,
				backgroundSize: 'cover',
				backgroundPosition: 'center',
			}}>
			{/* Card Container with two sections */}
			<Card className="w-full max-w-4xl shadow-lg rounded-2xl overflow-hidden flex h-140">
				{/* Left Side: Image & Text */}
				<Box className="flex w-3/7 bg-white items-center justify-center">
					<Box>
						<Typography variant="h4" className="text-center text-cyan-400 font-semibold">
							Welcome Back
						</Typography>

						<FormControl className="space-y-3">
							{/* Email Input */}
							<Box className="relative mt-4">
								<TextField fullWidth label="Email" variant="outlined" type="email" placeholder="Enter your email" className="bg-white" />
							</Box>

							{/* Password Input */}
							<Box className="relative">
								<TextField fullWidth label="Password" variant="outlined" type="password" placeholder="Enter your password" className="bg-white" />
							</Box>

							{/* Remember me & Forgot password */}
							{/*<Box className="flex items-center justify-between">
								<label className="flex items-center text-sm text-gray-500">
									<input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300" />
									Remember me
								</label>
								<Typography className="text-sm text-blue-500 hover:underline cursor-pointer">Forgot password?</Typography>
							</Box>*/}
							<Box className="mb-6">
								<Typography className="text-sm text-cyan-400 hover:underline cursor-pointer">Forgot password?</Typography>
							</Box>

							{/* Sign In Button */}
							<Box className="mb-2">
								<Button
									sx={{
										color: '#06b6d4', // Tailwind cyan-400 hex code
										borderColor: '#06b6d4', // Tailwind cyan-400 hex code
										'&:hover': {
											backgroundColor: '#b3f3f3', // Tailwind cyan-100 hex code
										},
									}}
									variant="outlined"
									fullWidth>
									Sign In
								</Button>
							</Box>
						</FormControl>

						{/* Sign up */}
						<Typography className="text-center text-sm text-gray-500 mt-8 block">
							Don’t have an account? <span className="text-cyan-400 hover:underline cursor-pointer">Sign up</span>
						</Typography>
					</Box>
				</Box>

				{/* Right Side: Login Form */}
				<Box
					className="w-4/7 p-8 bg-blue-600 text-white flex items-center justify-center"
					style={{
						backgroundImage: `url(${cardLoginImage})`,
						backgroundSize: 'cover',
						backgroundPosition: 'center',
						backgroundRepeat: 'no-repeat',
						height: '100%',
					}}>
					{/*<Box>
						<Typography variant="h4" className="font-semibold mb-4">
							Welcome to the Future of Healthcare
						</Typography>
						<Typography variant="body1">
							Seamlessly manage your healthcare tasks with our intuitive platform. Stay organized and access patient data with ease, anytime and anywhere.
						</Typography>
					</Box>*/}
				</Box>
			</Card>
		</Box>
	);
}

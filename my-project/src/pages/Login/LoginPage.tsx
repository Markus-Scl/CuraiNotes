import {Box, Card, CardContent, TextField, Button, Typography} from '@mui/material';

export default function LoginPage() {
	return (
		<Box className="flex min-h-screen items-center justify-center bg-gradient-to-br from-blue-50 to-blue-100 p-6">
			<Card className="w-full max-w-md shadow-lg rounded-2xl">
				<CardContent className="p-8">
					<Typography variant="h4" className="text-center text-blue-600 font-semibold mb-6">
						Welcome Back
					</Typography>

					<form className="space-y-5">
						{/* Email Input */}
						<div className="relative">
							<TextField fullWidth label="Email" variant="outlined" type="email" placeholder="Enter your email" className="bg-white" />
						</div>

						{/* Password Input */}
						<div className="relative">
							<TextField fullWidth label="Password" variant="outlined" type="password" placeholder="Enter your password" className="bg-white" />
						</div>

						{/* Remember me & Forgot password */}
						<Box className="flex items-center justify-between">
							<label className="flex items-center text-sm text-gray-600">
								<input type="checkbox" className="mr-2 h-4 w-4 rounded border-gray-300" />
								Remember me
							</label>
							<Typography className="text-sm text-blue-600 hover:underline cursor-pointer">Forgot password?</Typography>
						</Box>

						{/* Sign In Button */}
						<Button fullWidth variant="contained" color="primary" className="mt-2">
							Sign In
						</Button>
					</form>

					{/* Sign up */}
					<Typography className="text-center text-sm text-gray-600 mt-4">
						Don’t have an account? <span className="text-blue-600 hover:underline cursor-pointer">Sign up</span>
					</Typography>
				</CardContent>
			</Card>
		</Box>
	);
}

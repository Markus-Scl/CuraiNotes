import ThemeToggle from '../../../components/ThemeToggle';
import {Logout} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';

export default function TopNavBar() {
	const navigate = useNavigate();
	return (
		<div className="w-full bg-white shadow-md py-3 px-6 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<h1 className="text-xl font-bold text-cyan-400 dark:text-white">CurAINotes</h1>
			</div>

			{/* Right Side (Search, Theme Toggle & Logout) */}
			<div className="flex items-center space-x-4">
				<input
					type="text"
					placeholder="Search..."
					className="py-1 px-4 rounded-md text-gray-700 dark:bg-gray-800 dark:text-white dark:placeholder-gray-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 mr-4"
				/>
				<ThemeToggle />
				<a href="#" className="text-cyan-400 hover:text-cyan-600 transition ml-4">
					<Logout fontSize="large" className="text-cyan-400" onClick={() => navigate('/login')} />
				</a>
			</div>
		</div>
	);
}

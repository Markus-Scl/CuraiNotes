import {useState} from 'react';
import {Logout} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThemeToggle from '../../../components/ThemeToggle';

export default function TopNavBar() {
	const [menuOpen, setMenuOpen] = useState(false); // State for the dropdown menu
	const navigate = useNavigate();

	// Toggle menu visibility
	const toggleMenu = () => setMenuOpen((prev) => !prev);

	return (
		<div className="w-full bg-white/10 shadow-md py-3 px-6 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<h1 className="text-xl font-bold text-cyan-400 cursor-pointer" onClick={() => navigate('/home')}>
					CurAINotes
				</h1>
			</div>

			{/* Right Side (Search, Theme Toggle & User Menu) */}
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search..."
					className="py-1 px-4 rounded-md text-cyan-400 dark:bg-gray-800 dark:text-cyan-400 placeholder-cyan-400 dark:placeholder-cyan-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 mr-4"
				/>
				<ThemeToggle />

				{/* Person Icon with Dropdown */}
				<div className="relative">
					<button onClick={toggleMenu} className="rounded-md hover:text-cyan-600 transition ml-6 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500">
						<PersonOutlineIcon fontSize="large" className="text-cyan-400" />
					</button>

					{/* Dropdown Menu */}
					{menuOpen && (
						<div className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-48">
							<button
								className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
								onClick={() => navigate('/settings')}>
								<PersonOutlineIcon fontSize="large" className="text-cyan-400 mr-4" />
								<h1>Your Profile</h1>
							</button>
							<button
								className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
								onClick={() => {
									navigate('/login'); // Simulate logout or handle logout logic here
								}}>
								<Logout fontSize="large" className="text-cyan-400 mr-4" />
								<h1>Logout</h1>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}

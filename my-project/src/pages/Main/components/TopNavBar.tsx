import {useState, useEffect, useRef} from 'react';
import {Logout} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThemeToggle from '../../../components/ThemeToggle';

export default function TopNavBar() {
	const [menuOpen, setMenuOpen] = useState(false);
	const navigate = useNavigate();
	const menuRef = useRef<HTMLDivElement | null>(null);
	const buttonRef = useRef<HTMLButtonElement | null>(null);
	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			if (menuRef.current && !menuRef.current.contains(event.target as Node) && buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
				setMenuOpen(false);
			}
		}

		if (menuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [menuOpen]);

	return (
		<div className="w-full bg-white/10 shadow-md py-3 px-6 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<h1 className="text-xl font-bold text-cyan-400 cursor-pointer" onClick={() => navigate('/home')}>
					CurAINotes
				</h1>
			</div>

			{/* Right Side */}
			<div className="flex items-center">
				<input
					type="text"
					placeholder="Search..."
					className="py-1 px-4 rounded-md text-cyan-400 dark:bg-gray-800 dark:text-cyan-400 placeholder-cyan-400 dark:placeholder-cyan-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 mr-4"
				/>
				<ThemeToggle />

				{/* Person Icon with Dropdown */}
				<div className="relative">
					<button
						ref={buttonRef}
						onClick={() => setMenuOpen((prev) => !prev)}
						className="rounded-md hover:text-cyan-600 transition ml-6 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500">
						<PersonOutlineIcon fontSize="large" className="text-cyan-400" />
					</button>

					{/* Dropdown Menu */}
					{menuOpen && (
						<div ref={menuRef} className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-48">
							<button className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer" onClick={() => navigate('/profile')}>
								<PersonOutlineIcon fontSize="large" className="text-cyan-400 mr-4" />
								<h1>Your Profile</h1>
							</button>
							<button
								className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
								onClick={() => {
									navigate('/login');
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

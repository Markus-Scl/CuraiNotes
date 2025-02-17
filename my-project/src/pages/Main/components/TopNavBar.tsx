import {useState, useEffect, useRef} from 'react';
import {Logout} from '@mui/icons-material';
import {useNavigate} from 'react-router-dom';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import ThemeToggle from '../../../components/ThemeToggle';
import OutlinedFlagIcon from '@mui/icons-material/OutlinedFlag';
import {useTranslation} from 'react-i18next';

const TopNavBar = () => {
	const [profileMenuOpen, setProfileMenuOpen] = useState(false);
	const [languageMenuOpen, setLanguageMenuOpen] = useState(false);
	const navigate = useNavigate();

	// Separate refs for profile and language menu
	const profileMenuRef = useRef<HTMLDivElement | null>(null);
	const profileButtonRef = useRef<HTMLButtonElement | null>(null);
	const languageMenuRef = useRef<HTMLDivElement | null>(null);
	const languageButtonRef = useRef<HTMLButtonElement | null>(null);

	const {t, i18n} = useTranslation();

	useEffect(() => {
		function handleClickOutside(event: MouseEvent) {
			// Check if click is outside of profile menu
			if (profileMenuRef.current && !profileMenuRef.current.contains(event.target as Node) && profileButtonRef.current && !profileButtonRef.current.contains(event.target as Node)) {
				setProfileMenuOpen(false);
			}

			// Check if click is outside of language menu
			if (languageMenuRef.current && !languageMenuRef.current.contains(event.target as Node) && languageButtonRef.current && !languageButtonRef.current.contains(event.target as Node)) {
				setLanguageMenuOpen(false);
			}
		}

		if (profileMenuOpen || languageMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [profileMenuOpen, languageMenuOpen]);

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
					placeholder={t('topNavbar.search')}
					className="py-1 px-4 rounded-md text-cyan-400 dark:bg-gray-800 dark:text-cyan-400 placeholder-cyan-400 dark:placeholder-cyan-400 border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-cyan-400 mr-4"
				/>
				<ThemeToggle />

				{/* Language Menu */}
				<div className="relative">
					<button
						ref={languageButtonRef}
						onClick={() => setLanguageMenuOpen((prev) => !prev)}
						className="rounded-md hover:text-cyan-600 transition ml-6 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500">
						<OutlinedFlagIcon fontSize="large" className="text-cyan-400" />
					</button>
					{languageMenuOpen && (
						<div ref={languageMenuRef} className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-48">
							<button
								className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
								onClick={() => {
									i18n.changeLanguage('en');
								}}>
								<h1>EN</h1>
							</button>
							<button
								className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
								onClick={() => {
									i18n.changeLanguage('de');
								}}>
								<h1>DE</h1>
							</button>
						</div>
					)}
				</div>

				{/* Profile Menu */}
				<div className="relative">
					<button
						ref={profileButtonRef}
						onClick={() => setProfileMenuOpen((prev) => !prev)}
						className="rounded-md hover:text-cyan-600 transition ml-6 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500">
						<PersonOutlineIcon fontSize="large" className="text-cyan-400" />
					</button>

					{/* Dropdown Menu */}
					{profileMenuOpen && (
						<div ref={profileMenuRef} className="absolute right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-md shadow-lg w-48">
							<button className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer" onClick={() => navigate('/profile')}>
								<PersonOutlineIcon fontSize="large" className="text-cyan-400 mr-4" />
								<h1>{t('topNavbar.profile')}</h1>
							</button>
							<button
								className="w-full flex items-center text-left py-2 px-4 text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600 cursor-pointer"
								onClick={() => {
									navigate('/login');
								}}>
								<Logout fontSize="large" className="text-cyan-400 mr-4" />
								<h1>{t('topNavbar.logout')}</h1>
							</button>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default TopNavBar;

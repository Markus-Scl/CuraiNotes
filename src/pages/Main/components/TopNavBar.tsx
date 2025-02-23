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
		<div className="w-full bg-neutral shadow-md py-3 px-6 flex items-center justify-between">
			{/* Logo */}
			<div className="flex items-center">
				<h1 className="text-xl font-bold text-primary cursor-pointer" onClick={() => navigate('/')}>
					CurAINotes
				</h1>
			</div>

			{/* Right Side */}
			<div className="flex items-center">
				<input
					type="text"
					placeholder={t('topNavbar.search')}
					className="py-1 px-4 rounded-md bg-neutral text-primary placeholder-primary border border-accent focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary mr-4 hover:bg-accent"
				/>
				<ThemeToggle />

				{/* Language Menu */}
				<div className="relative">
					<button ref={languageButtonRef} onClick={() => setLanguageMenuOpen((prev) => !prev)} className="rounded-md transition ml-6 cursor-pointer hover:bg-accent">
						<OutlinedFlagIcon fontSize="large" className="text-primary" />
					</button>
					{languageMenuOpen && (
						<div ref={languageMenuRef} className="absolute right-0 mt-2 bg-neutral border border-accent rounded-md shadow-lg w-24">
							<button
								className="w-full flex items-center text-left py-2 px-4 text-primary hover:bg-accent cursor-pointer"
								onClick={() => {
									i18n.changeLanguage('en');
									setLanguageMenuOpen((prev) => !prev);
								}}>
								<h1>EN</h1>
							</button>
							<button
								className="w-full flex items-center text-left py-2 px-4 text-primary hover:bg-accent cursor-pointer"
								onClick={() => {
									i18n.changeLanguage('de');
									setLanguageMenuOpen((prev) => !prev);
								}}>
								<h1>DE</h1>
							</button>
						</div>
					)}
				</div>

				{/* Profile Menu */}
				<div className="relative">
					<button ref={profileButtonRef} onClick={() => setProfileMenuOpen((prev) => !prev)} className="rounded-md hover:bg-accent transition ml-6 cursor-pointer">
						<PersonOutlineIcon fontSize="large" className="text-primary" />
					</button>

					{/* Dropdown Menu */}
					{profileMenuOpen && (
						<div ref={profileMenuRef} className="absolute right-0 mt-2 bg-neutral  border border-accent rounded-md shadow-lg w-48">
							<button
								className="w-full flex items-center text-left py-2 px-4 text-primary hover:bg-accent  cursor-pointer"
								onClick={() => {
									setProfileMenuOpen(false);
									navigate('/profile');
								}}>
								<PersonOutlineIcon fontSize="large" className="text-primary mr-4" />
								<h1>{t('topNavbar.profile')}</h1>
							</button>
							<button
								className="w-full flex items-center text-left py-2 px-4 text-primary hover:bg-accent cursor-pointer"
								onClick={() => {
									navigate('/login');
								}}>
								<Logout fontSize="large" className="text-primary mr-4" />
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

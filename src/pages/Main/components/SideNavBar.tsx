import {Home, FolderOpen, Settings, Logout} from '@mui/icons-material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const SideNavBar = () => {
	const [active, setActive] = useState('Dashboard');
	const navigate = useNavigate();
	const {t} = useTranslation(); // Access the translation function

	return (
		<nav className="h-screen bg-white/10 shadow-lg text-white w-full flex flex-col relative">
			{/* Dashboard Link */}
			<a
				onClick={() => setActive('Dashboard')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                   ${active === 'Dashboard' ? 'bg-cyan-400 text-white' : 'text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
				<Home fontSize="large" />
				<span>{t('sideNavbar.dashboard')}</span>
			</a>

			{/* Documents Link */}
			<a
				onClick={() => setActive('Documents')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                   ${active === 'Documents' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
				<FolderOpen fontSize="large" />
				<span>{t('sideNavbar.documents')}</span>
			</a>

			{/* Settings Link */}
			<a
				onClick={() => setActive('Settings')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                   ${active === 'Settings' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
				<Settings fontSize="large" />
				<span>{t('sideNavbar.settings')}</span>
			</a>

			{/* Logout Link */}
			<div className="bottom-15 absolute w-full">
				<a
					onClick={() => navigate('/login')}
					className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                     ${active === 'Logout' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
					<Logout fontSize="large" className="text-cyan-400" />
					<span>{t('sideNavbar.logout')}</span>
				</a>
			</div>
		</nav>
	);
};

export default SideNavBar;

import {Home, FolderOpen, Settings, Logout} from '@mui/icons-material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import {useTranslation} from 'react-i18next';

const SideNavBar = () => {
	const [active, setActive] = useState('Dashboard');
	const navigate = useNavigate();
	const {t} = useTranslation(); // Access the translation function

	return (
		<nav className="h-full bg-neutral shadow-lg w-full flex flex-col relative">
			{/* Dashboard Link */}
			<a
				onClick={() => setActive('Dashboard')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                   ${active === 'Dashboard' ? 'bg-primary text-secondary' : 'text-primary hover:bg-accent'}`}>
				<Home fontSize="large" />
				<span>{t('sideNavbar.dashboard')}</span>
			</a>

			{/* Documents Link */}
			<a
				onClick={() => setActive('Documents')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                   ${active === 'Documents' ? 'bg-primary text-secondary' : 'text-primary hover:bg-accent'}`}>
				<FolderOpen fontSize="large" />
				<span>{t('sideNavbar.documents')}</span>
			</a>

			{/* Settings Link */}
			<a
				onClick={() => setActive('Settings')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                   ${active === 'Settings' ? 'bg-primary text-secondary' : 'text-primary hover:bg-accent'}`}>
				<Settings fontSize="large" />
				<span>{t('sideNavbar.settings')}</span>
			</a>

			{/* Logout Link */}
			<div className="bottom-0 absolute w-full">
				<a
					onClick={() => navigate('/login')}
					className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                     ${active === 'Logout' ? 'bg-primary text-secondary' : 'text-primary hover:bg-accent'}`}>
					<Logout fontSize="large" />
					<span>{t('sideNavbar.logout')}</span>
				</a>
			</div>
		</nav>
	);
};

export default SideNavBar;

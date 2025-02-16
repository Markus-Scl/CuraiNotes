import {Home, FolderOpen, Settings, Logout} from '@mui/icons-material';
import {useState} from 'react';
import {useNavigate} from 'react-router-dom';

export default function SideNavBar() {
	const [active, setActive] = useState('Dashboard');
	const navigate = useNavigate();

	return (
		<nav className="h-screen bg-white/10 shadow-lg text-white w-full flex flex-col relative">
			<a
				onClick={() => setActive('Dashboard')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                            ${active === 'Dashboard' ? 'bg-cyan-400 text-white' : 'text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
				<Home fontSize="large" />
				<span>Dashboard</span>
			</a>

			<a
				onClick={() => setActive('Documents')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                            ${active === 'Documents' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
				<FolderOpen fontSize="large" />
				<span>Documents</span>
			</a>

			<a
				onClick={() => setActive('Settings')}
				className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                            ${active === 'Settings' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
				<Settings fontSize="large" />
				<span>Settings</span>
			</a>
			<div className="bottom-20 absolute w-full">
				<a
					onClick={() => navigate('/login')}
					className={`flex items-center space-x-3 p-3 transition w-full cursor-pointer
                            ${active === 'Logout' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
					<Logout fontSize="large" className="text-cyan-400" />
					<span>Logout</span>
				</a>
			</div>
		</nav>
	);
}

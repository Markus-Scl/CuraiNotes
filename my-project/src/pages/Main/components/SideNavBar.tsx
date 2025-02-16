import {Home, FolderOpen, Settings} from '@mui/icons-material';
import {useState} from 'react';

export default function SideNavBar() {
	const [active, setActive] = useState('Dashboard');

	return (
		<div className="h-screen bg-white/10 shadow-lg flex flex-col text-white w-full">
			{/* Navigation Links */}
			<nav className="flex flex-col w-full">
				<a
					href="#"
					onClick={() => setActive('Dashboard')}
					className={`flex items-center space-x-3 p-3 transition w-full
		                ${active === 'Dashboard' ? 'bg-cyan-400 text-white' : ' text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
					<Home fontSize="large" />
					<span>Dashboard</span>
				</a>

				<a
					href="#"
					onClick={() => setActive('Documents')}
					className={`flex items-center space-x-3 p-3 transition w-full 
                        ${active === 'Documents' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
					<FolderOpen fontSize="large" />
					<span>Documents</span>
				</a>

				<a
					href="#"
					onClick={() => setActive('Settings')}
					className={`flex items-center space-x-3 p-3 transition w-full 
                        ${active === 'Settings' ? 'bg-cyan-400 text-white' : 'bg-transparent text-cyan-400 hover:bg-gray-200 dark:hover:bg-gray-600'}`}>
					<Settings fontSize="large" />
					<span>Settings</span>
				</a>
			</nav>
		</div>
	);
}

import {Home, FolderOpen, Settings} from '@mui/icons-material';

export default function SideNavBar() {
	return (
		<div className="h-screen bg-white/10 shadow-lg flex flex-col p-4 text-white">
			{/* Navigation Links */}
			<nav className="flex flex-col space-y-4">
				<a href="#" className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-600 transition">
					<Home fontSize="large" className="text-cyan-400" />
					<span>Dashboard</span>
				</a>
				<a href="#" className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-600 transition">
					<FolderOpen fontSize="large" className="text-cyan-400" />
					<span>Documents</span>
				</a>
				<a href="#" className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-600 transition">
					<Settings fontSize="large" className="text-cyan-400" />
					<span>Settings</span>
				</a>
			</nav>
		</div>
	);
}

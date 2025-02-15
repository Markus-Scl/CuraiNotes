import {Home, FolderOpen, Settings} from '@mui/icons-material';

export default function SideNavBar() {
	return (
		<div className="h-screen  shadow-lg flex flex-col p-4">
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

			{/* Logout */}
			<div className="mt-auto">
				<a href="#" className="flex items-center space-x-3 text-cyan-400 hover:text-cyan-600 transition">
					<span className="text-lg">🚪</span>
					<span>Logout</span>
				</a>
			</div>
		</div>
	);
}

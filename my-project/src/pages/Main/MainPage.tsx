import TopNavBar from './components/TopNavBar'; // Assuming you created the TopNavBar component
import SideNavBar from './components/SideNavBar'; // Assuming you created the SideNavBar component

export default function MainPage() {
	return (
		<div className="h-screen flex flex-col">
			{/* Top Navigation Bar */}

			<div className="w-full ml-auto">
				<TopNavBar />
			</div>

			{/* Flex container for sidebar and main content */}
			<div className="flex flex-1">
				{/* Sidebar taking 20% of the screen width */}
				<div className="w-1/8 bg-white shadow-md dark:bg-gray-800">
					<SideNavBar />
				</div>

				{/* Main content taking 80% of the screen width */}
			</div>
		</div>
	);
}

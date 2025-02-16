import TopNavBar from './components/TopNavBar'; // Assuming you created the TopNavBar component
import SideNavBar from './components/SideNavBar'; // Assuming you created the SideNavBar component

export default function MainPage() {
	return (
		<div className="h-screen flex flex-col">
			{/* Top Navigation Bar */}
			<div className="w-full">
				<TopNavBar />
			</div>

			{/* Flex container for sidebar and main content */}
			<div className="flex flex-1">
				<div className="w-1/8 min-w-[180px] shadow-md dark:bg-gray-800">
					<SideNavBar />
				</div>

				{/* Main content taking remaining width */}
				<div className="flex-1 p-4">
					{/* Your main content goes here */}
					<h1 className="text-2xl font-bold">Main Content</h1>
				</div>
			</div>
		</div>
	);
}

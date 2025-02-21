import {useState, useEffect} from 'react';
import {WbSunny, NightlightRound} from '@mui/icons-material';

export default function ThemeToggle() {
	const [isDark, setIsDark] = useState(localStorage.getItem('theme') === 'dark');

	// Apply theme on mount
	useEffect(() => {
		if (isDark) {
			document.documentElement.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		} else {
			document.documentElement.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		}
	}, [isDark]);

	return (
		<button onClick={() => setIsDark(!isDark)} className="rounded-md hover:text-cyan-600 transition ml-6 cursor-pointer hover:bg-gray-300 dark:hover:bg-gray-500">
			{isDark ? <NightlightRound fontSize="large" className="text-cyan-400" /> : <WbSunny fontSize="large" className="text-cyan-400" />}
		</button>
	);
}

import {useState, useEffect} from 'react';
import {IconButton} from '@mui/material';
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
		<IconButton onClick={() => setIsDark(!isDark)} className="text-cyan-400 dark:text-white">
			{isDark ? <NightlightRound fontSize="large" className="text-cyan-400" /> : <WbSunny fontSize="large" className="text-cyan-400" />}
		</IconButton>
	);
}

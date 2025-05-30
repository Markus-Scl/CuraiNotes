import {useState} from 'react';
import {WbSunny, NightlightRound} from '@mui/icons-material';

export default function ThemeToggle() {
	// Get the initial theme from localStorage, defaulting to 'customLight'
	const [theme, setTheme] = useState(localStorage.getItem('theme') || 'customLight');
	document.documentElement.setAttribute('data-theme', theme);

	// Handler to toggle the theme
	const handleThemeChange = () => {
		const newTheme = theme === 'customLight' ? 'customDark' : 'customLight';
		setTheme(newTheme);
		// Set the new theme to the HTML element
		document.documentElement.setAttribute('data-theme', newTheme);
		// Store the theme in localStorage
		localStorage.setItem('theme', newTheme);
	};

	return (
		<button onClick={handleThemeChange} className="rounded-md hover:bg-accent transition ml-6 cursor-pointer">
			{theme === 'customDark' ? <NightlightRound fontSize="large" className="text-primary" /> : <WbSunny fontSize="large" className="text-primary" />}
		</button>
	);
}

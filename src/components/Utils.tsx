// Format time helper function
export function formatTime(seconds: number) {
	const minutes = Math.floor(seconds / 60);
	const secs = Math.floor(seconds % 60);
	return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

export const speedOptions = [0.5, 0.7, 1.0, 1.2, 1.5, 1.7, 2.0];

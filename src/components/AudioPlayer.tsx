import {useState, useRef, useEffect} from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import {formatTime, speedOptions} from './Utils';

const AudioPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [volume, setVolume] = useState(1); // Track volume state separately
	const [isMuted, setIsMuted] = useState(false); // Track mute state separately
	const [playbackSpeed, setPlaybackSpeed] = useState(1); // Track playback speed
	const [speed, setSpeed] = useState<String>('1.0 X'); // Display speed
	const [speedMenuOpen, setSpeedMenuOpen] = useState<boolean>(false); // Manage speed menu visibility
	const audioRef = useRef<HTMLAudioElement | null>(null);

	// Use useEffect to update audio properties
	useEffect(() => {
		const audio = audioRef.current;
		if (audio) {
			audio.volume = volume; // Apply volume from the state
			audio.playbackRate = playbackSpeed; // Apply playback speed
			audio.addEventListener('timeupdate', updateProgress);
			audio.addEventListener('loadedmetadata', () => setDuration(audio.duration));
		}
		return () => {
			if (audio) {
				audio.removeEventListener('timeupdate', updateProgress);
			}
		};
	}, [volume, playbackSpeed]); // Volume and playback speed dependencies

	// Handle play/pause toggle
	const togglePlay = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	// Update the progress bar
	const updateProgress = () => {
		if (audioRef.current) {
			setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	// Skip forward/backward
	const skip = (seconds: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime += seconds;
		}
	};

	// Handle mute state toggle
	const handleMute = () => {
		if (audioRef.current) {
			audioRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

	// Handle volume change
	const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newVolume = parseFloat(e.target.value);
		if (audioRef.current) {
			audioRef.current.volume = newVolume;
		}
		setVolume(newVolume);
		if (newVolume === 0) {
			setIsMuted(true);
		} else {
			setIsMuted(false);
		}
	};

	// Handle playback speed change
	const handleSpeedChange = (newSpeed: number) => {
		const newS: string = String(newSpeed) + 'X';
		setSpeed(newS);
		setPlaybackSpeed(newSpeed);
		setSpeedMenuOpen(false); // Close speed menu when an option is selected
	};

	// Close the speed menu when clicking outside of it
	const speedButtonRef = useRef<HTMLButtonElement | null>(null);
	const speedMenuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (speedMenuRef.current && !speedMenuRef.current.contains(event.target as Node) && speedButtonRef.current && !speedButtonRef.current.contains(event.target as Node)) {
				setSpeedMenuOpen(false);
			}
		};
		if (speedMenuOpen) {
			document.addEventListener('mousedown', handleClickOutside);
		} else {
			document.removeEventListener('mousedown', handleClickOutside);
		}

		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [speedMenuOpen]);

	return (
		<div className="glass relative flex flex-col items-center justify-center p-6 w-full max-w-lg mx-auto rounded-3xl">
			{/* Audio Element */}
			<audio ref={audioRef} src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3"></audio>

			{/* Progress Bar */}
			<input
				type="range"
				value={progress}
				max="100"
				onChange={(e) => {
					if (audioRef.current) {
						const newTime = (parseFloat(e.target.value) / 100) * duration;
						audioRef.current.currentTime = newTime;
					}
				}}
				className="range range-xs range-primary w-full mb-3"
			/>

			{/* Time Display */}
			<div className="flex justify-between w-full text-xs text-gray-300">
				<span>{formatTime(currentTime)}</span>
				<span>{formatTime(duration)}</span>
			</div>

			{/* Controls */}
			<div className="flex flex-row w-full mt-3">
				{/* Volume Control */}
				<div className="w-1/4 flex justify-center items-center relative">
					{/* Volume Icon */}
					{isMuted || volume === 0 ? (
						<VolumeOffIcon fontSize="large" onClick={handleMute} className="text-primary cursor-pointer" />
					) : (
						<VolumeUpIcon fontSize="large" className="text-primary cursor-pointer" onClick={handleMute} />
					)}

					{/* Volume Slider next to the icon */}
					<input
						type="range"
						min="0"
						max="1"
						step="0.01"
						value={isMuted ? 0 : volume}
						onChange={handleVolumeChange}
						className="range range-xs range-primary w-24 ml-2" // Adjust ml-2 for spacing between the icon and slider
					/>
				</div>

				{/* Play Controls */}
				<div className="flex justify-center gap-5 w-2/3">
					<SkipPreviousIcon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(-duration)} />
					<Replay10Icon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(-10)} />
					<div className="relative flex">
						{isPlaying ? (
							<PauseCircleIcon className="text-primary cursor-pointer" fontSize="large" onClick={togglePlay} />
						) : (
							<PlayCircleIcon className="text-primary cursor-pointer" fontSize="large" onClick={togglePlay} />
						)}
					</div>
					<Forward10Icon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(10)} />
					<SkipNextIcon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(duration)} />
				</div>

				{/* Playback Speed Icon with Dropdown */}
				<div className="relative w-1/6 flex justify-center items-center">
					<button ref={speedButtonRef} className="text-primary cursor-pointer" onClick={() => setSpeedMenuOpen((prev) => !prev)}>
						<h1>{speed}</h1>
					</button>

					{/* Dropdown */}
					{speedMenuOpen && (
						<div ref={speedMenuRef} className="absolute top-8 left-0 bg-neutral rounded shadow-md">
							{speedOptions.map((option) => (
								<button key={option} className="w-full flex items-center text-left py-2 px-4 text-primary hover:bg-accent cursor-pointer" onClick={() => handleSpeedChange(option)}>
									{option}x
								</button>
							))}
						</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;

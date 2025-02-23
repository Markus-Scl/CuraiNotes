import {useState, useRef, useEffect} from 'react';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import PauseCircleIcon from '@mui/icons-material/PauseCircle';
import VolumeUpIcon from '@mui/icons-material/VolumeUp';
import VolumeOffIcon from '@mui/icons-material/VolumeOff';
import Forward10Icon from '@mui/icons-material/Forward10';
import Replay10Icon from '@mui/icons-material/Replay10';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import SpeedIcon from '@mui/icons-material/Speed';
import {formatTime} from './Utils';

const AudioPlayer = () => {
	const [isPlaying, setIsPlaying] = useState(false);
	const [progress, setProgress] = useState(0);
	const [duration, setDuration] = useState(0);
	const [currentTime, setCurrentTime] = useState(0);
	const [volume, setVolume] = useState(1); // Track volume state separately
	const [isMuted, setIsMuted] = useState(false); // Track mute state separately
	const [playbackSpeed, setPlaybackSpeed] = useState(1); // Track playback speed
	const audioRef = useRef<HTMLAudioElement | null>(null);

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

	const togglePlay = () => {
		if (!audioRef.current) return;
		if (isPlaying) {
			audioRef.current.pause();
		} else {
			audioRef.current.play();
		}
		setIsPlaying(!isPlaying);
	};

	const updateProgress = () => {
		if (audioRef.current) {
			setProgress((audioRef.current.currentTime / audioRef.current.duration) * 100);
			setCurrentTime(audioRef.current.currentTime);
		}
	};

	const skip = (seconds: number) => {
		if (audioRef.current) {
			audioRef.current.currentTime += seconds;
		}
	};

	const handleMute = () => {
		if (audioRef.current) {
			// Toggle mute state
			audioRef.current.muted = !isMuted;
			setIsMuted(!isMuted);
		}
	};

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

	const handleSpeedChange = (newSpeed: number) => {
		setPlaybackSpeed(newSpeed);
	};

	return (
		<div className="glass relative flex flex-col items-center justify-center p-6 w-full max-w-lg mx-auto rounded-3xl shadow-lg bg-white/10 backdrop-blur-lg border border-white/20">
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
				className="range range-primary w-full mb-3"
			/>

			{/* Time Display */}
			<div className="flex justify-between w-full text-xs text-gray-300">
				<span>{formatTime(currentTime)}</span>
				<span>{formatTime(duration)}</span>
			</div>

			{/* Controls */}
			<div className="flex flex-row w-full mt-3">
				{/* Volume Control on the Left (Visible only on hover) */}
				<div className="w-1/6 flex justify-center">
					{isMuted || volume === 0 ? (
						<VolumeOffIcon fontSize="large" onClick={handleMute} className="text-primary cursor-pointer" />
					) : (
						<VolumeUpIcon fontSize="large" className="text-primary cursor-pointer" onClick={handleMute} />
					)}

					{/* Volume Slider (hidden by default, shown on hover) */}
					<div className="group-hover:block hidden absolute left-12 transform -translate-x-1/2">
						<input type="range" min="0" max="1" step="0.01" value={isMuted ? 0 : volume} onChange={handleVolumeChange} className="range range-primary w-24 rotate-90" />
					</div>
				</div>

				{/* Play Controls in the Center */}

				{/* Skip All the Way Back */}
				<div className="flex justify-center gap-5 w-2/3">
					<SkipPreviousIcon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(-duration)} />

					{/* Skip Back Button */}
					<Replay10Icon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(-10)} />

					{/* Play/Pause Button */}
					<div className="relative flex">
						{isPlaying ? (
							<PauseCircleIcon className="text-primary cursor-pointer" fontSize="large" onClick={togglePlay} />
						) : (
							<PlayCircleIcon className="text-primary cursor-pointer" fontSize="large" onClick={togglePlay} />
						)}
					</div>

					{/* Skip Forward Button */}
					<Forward10Icon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(10)} />

					{/* Skip All the Way Forward */}
					<SkipNextIcon className="text-primary cursor-pointer" fontSize="large" onClick={() => skip(duration)} />
				</div>

				{/* Playback Speed Icon with Dropdown */}
				<div className="group w-1/6 flex justify-center">
					<SpeedIcon className="text-primary cursor-pointer" fontSize="large" />
					{/* Playback Speed Dropdown (hidden by default, shown on hover) */}
					<div className="group-hover:block hidden absolute top-8 left-0 bg-white text-black p-2 rounded shadow-md">
						<button className="block w-full text-left p-2" onClick={() => handleSpeedChange(0.5)}>
							0.5x
						</button>
						<button className="block w-full text-left p-2" onClick={() => handleSpeedChange(0.75)}>
							0.75x
						</button>
						<button className="block w-full text-left p-2" onClick={() => handleSpeedChange(1)}>
							1x (Default)
						</button>
						<button className="block w-full text-left p-2" onClick={() => handleSpeedChange(1.5)}>
							1.5x
						</button>
						<button className="block w-full text-left p-2" onClick={() => handleSpeedChange(2)}>
							2x
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default AudioPlayer;

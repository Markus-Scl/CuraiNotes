import AudioPlayer from '../../components/AudioPlayer';

const ProfilePage = () => {
	return (
		<div>
			<div className="badge">default</div>
			<div className="badge badge-neutral">neutral</div>
			<div className="badge badge-primary">primary</div>
			<div className="badge badge-secondary">secondary</div>
			<div className="badge badge-accent">accent</div>
			<div className="badge badge-ghost">ghost</div>

			<AudioPlayer />
		</div>
	);
};

export default ProfilePage;

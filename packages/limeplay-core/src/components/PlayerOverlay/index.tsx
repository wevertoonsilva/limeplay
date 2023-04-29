import {
	useLoading,
	usePlayback,
	useTimeline,
	useVolume,
} from '@limeplay/core/src/hooks';
import { useLimeplayStore } from '@limeplay/core/src/store';
import ControlsOverlay from '@limeplay/core/src/components/ControlsOverlay';
import PlayerLoader from '@limeplay/core/src/components/Loader';
import useStyles from './styles';

export default function PlayerOverlay() {
	const { classes } = useStyles();

	const player = useLimeplayStore((state) => state.playback);
	useLoading();
	// useTimeline();

	return (
		<div className={classes.overlayWrapper}>
			<PlayerLoader />
			{player && <ControlsOverlay />}
		</div>
	);
}

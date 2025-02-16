import { useLimeplayStore } from '@limeplay/core/src/store';
import { useLoading } from '@limeplay/core/src/hooks';
import useStyles from './styles';

export default function PlayerLoader() {
	const { classes } = useStyles();
	const isLoading = useLimeplayStore((state) => state.isLoading);
	useLoading();

	return isLoading ? <div className={classes.playerLoader} /> : null;
}

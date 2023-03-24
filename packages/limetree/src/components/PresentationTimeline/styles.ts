import { createStyles, getStylesRef as getRef } from '@mantine/styles';

const useStyles = createStyles((theme, _params) => ({
	// timelineWrrapper: {
	// 	display: 'flex',
	// 	flexDirection: 'row',
	// 	padding: `0 ${theme.spacing.lg}px`,
	// 	alignItems: 'center',
	// 	justifyContent: 'space-between',
	// 	gap: theme.spacing.sm,
	// 	userSelect: 'none',
	// },

	timelineSlider__Container: {
		height: '36px',
		display: 'flex',
		alignItems: 'center',
		alignSelf: 'stretch',
		position: 'relative',
		touchAction: 'none',
		userSelect: 'none',
		margin: `0 ${theme.spacing.xs}`,
		// padding: `0 ${theme.spacing.xs}`,

		[`&:hover .${getRef('timelineSlider__ProgressBar')}`]: {
			height: '6px',
		},

		[`&:hover .${getRef('timelineSlider__Buffer')}`]: {
			height: '6px',
		},

		[`&:hover .${getRef('timelineSlider__DurationBar')}`]: {
			height: '6px',
		},

		[`&:hover .${getRef('timelineSlider__PlayHead')}`]: {
			transform: 'scale(1.5) translateX(-50%)',
		},
	},

	timelineSlider: {
		display: 'flex',
		height: '36px',
		width: '100%',
		alignItems: 'center',
	},

	timelineSlider__ProgressBar: {
		ref: getRef('timelineSlider__ProgressBar'),
		position: 'relative',
		height: '4px',
		width: '100%',
		// borderRadius: '2px',
		transition: 'height border-radius 0.2s ease-in-out',
		flex: '1 1 auto',

		'&:before': {
			content: '""',
			position: 'absolute',
			top: 0,
			height: '100%',
			width: '4px',
			// zIndex: 1,
			borderRadius: '2px 0 0 2px',
			left: '-4px',
			backgroundColor: theme.colors.blue[8],
		},

		'&:after': {
			content: '""',
			position: 'absolute',
			top: 0,
			height: '100%',
			width: '4px',
			// zIndex: 1,
			borderRadius: '0 2px 2px 0',
			right: '-4px',
			backgroundColor: '#808080',
		},
	},

	timelineSlider__DurationBar: {
		ref: getRef('timelineSlider__DurationBar'),
		position: 'absolute',
		height: '100%',
		width: '100%',
		backgroundColor: '#808080',
		// borderRadius: '2px',
		transition: 'transform 0.2s ease-in-out',
	},

	timelineSlider__DurationPlayed: {
		ref: getRef('timelineSlider__DurationPlayed'),
		position: 'absolute',
		height: '100%',
		backgroundColor: theme.colors.blue[8],
		transition: 'transform 0.2s ease-in-out',
		zIndex: 1,
	},

	timelineSlider__Buffer: {
		ref: getRef('timelineSlider__Buffer'),
		position: 'relative',
		height: '100%',
		borderRadius: '2px',
		backgroundColor: theme.colors.red[5],
		zIndex: 2,
		transition: 'width 0.2s ease-in-out',
	},

	timelineSlider__PlayHead: {
		...theme.fn.focusStyles(),

		ref: getRef('timelineSlider__PlayHead'),
		position: 'absolute',
		height: '12px',
		width: '12px',
		borderRadius: '50%',
		backgroundColor: theme.white,
		transform: 'translateX(-50%)',
		transition: 'transform 0.2s cubic-bezier(0.4,0,0.2,1)',
		transformOrigin: 'left',
		zIndex: 1,
		cursor: 'grab',
	},

	timelineSlider__VerticalBar__Hover: {
		position: 'absolute',
		height: '16px',
		width: '4px',
		backgroundColor: theme.white,
		borderRadius: '2px',
		transform: 'translate(-50%)',
		zIndex: 2,
		// transition: 'all 0.2s ease-in-out',
	},

	timelineSlider__VerticalBarDuration__Hover: {
		position: 'absolute',
		// height: '16px',
		// width: '4px',
		padding: '0 8px',
		backgroundColor: theme.colors.dark[7],
		color: theme.white,
		borderRadius: '2px',
		transform: 'translateX(-50%) translateY(-120%)',
	},

	controlButton: {
		display: 'inline-flex',
		alignItems: 'center',
		width: '44px',
		height: '44px',
		opacity: 0.7,
		transition: 'opacity 0.1s ease-in-out',
		backgroundColor: 'transparent',
		border: 'none',

		'&:hover': {
			opacity: 1,
			cursor: 'pointer',
			transform: 'scale(1.1)',
		},

		'&:disabled': {
			opacity: 0.3,
			cursor: 'not-allowed',
			transform: 'none',
		},
	},

	iconStyle: {
		width: '24px',
		height: '24px',
		margin: 'auto',
		pointerEvents: 'none',
	},
}));

export default useStyles;

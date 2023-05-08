import { createStyles, em, getBreakpointValue } from '@mantine/styles';

const useStyles = createStyles((theme) => ({
	iconStyle: {
		width: '24px',
		height: '24px',
		margin: 'auto',
		pointerEvents: 'none',

		[`@media (max-width: ${em(getBreakpointValue(theme.breakpoints.md))})`]:
			{
				width: '20px',
				height: '20px',
			},
	},
}));

export default useStyles;

import { memo } from 'react';
import useStyles from './styles';

function _UnmuteIcon() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<path
				d="M11.765 2.627L5.176 9.19 5 9.262H1a.75.75 0 00-.75.75v3.977c0 .416.333.75.75.75h4l.176.073 6.589 6.562c.624.622.985.472.985-.42V3.048c0-.888-.361-1.041-.985-.42zm3.564.076a.744.744 0 00.335 1c4.405 2.194 6.586 4.94 6.586 8.298 0 3.357-2.18 6.103-6.586 8.297a.744.744 0 00-.335 1 .752.752 0 001.007.335c4.927-2.454 7.414-5.684 7.414-9.632 0-3.948-2.487-7.178-7.414-9.632a.752.752 0 00-1.007.334zm.028 4.93a.744.744 0 00.257 1.023c1.44.86 2.136 1.949 2.136 3.345 0 1.395-.696 2.484-2.136 3.344a.744.744 0 00-.257 1.024.752.752 0 001.03.256c1.892-1.131 2.863-2.699 2.863-4.624 0-1.926-.971-3.493-2.864-4.624a.752.752 0 00-1.03.256z"
				stroke="#FFF"
				strokeWidth=".5"
				fill="#FFF"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function _MuteIcon() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<g fill="#FFF" fillRule="evenodd">
				<path
					d="M1.626 9.262H1a.75.75 0 00-.75.75v3.977c0 .416.333.75.75.75h4l.176.073 6.584 6.558.092.087c.573.517.898.351.898-.502v-4.641L1.626 9.262zm10.139-6.635L8.46 5.92l4.29 2.72V3.047c0-.888-.361-1.041-.985-.42z"
					stroke="#FFF"
					strokeWidth=".5"
				/>
				<path
					d="M17.458 19.029l1.835 1.168a20.86 20.86 0 01-2.846 1.697 1 1 0 11-.894-1.789 20.354 20.354 0 001.905-1.076zm-1.01-16.923C21.422 4.594 24 7.906 24 12a8.82 8.82 0 01-.748 3.604l-1.716-1.091c.31-.798.464-1.635.464-2.513 0-3.24-2.09-5.927-6.447-8.105a1 1 0 01.894-1.79zm.067 5.037C18.47 8.316 19.5 9.964 19.5 12c0 .395-.039.776-.116 1.142l-1.886-1.2-.004-.156c-.067-1.196-.706-2.147-2.008-2.928a1 1 0 011.029-1.715z"
					fillRule="nonzero"
					opacity=".5"
				/>
				<path
					d="M.463 5.844l22 14a1 1 0 001.074-1.688l-22-14A1 1 0 00.463 5.844z"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
}

function _VolumeHalf() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<g fill="#FFF" fillRule="evenodd">
				<path
					d="M7.176 9.19L7 9.262H3a.75.75 0 00-.75.75v3.977c0 .416.333.75.75.75h4l.176.073 6.589 6.562c.624.622.985.472.985-.42V3.048c0-.888-.361-1.041-.985-.42L7.176 9.19z"
					stroke="#FFF"
					strokeWidth=".5"
				/>
				<path
					d="M17.486 8.87c1.378.824 2.014 1.838 2.014 3.13 0 1.293-.636 2.307-2.014 3.13a.994.994 0 00-.343 1.368c.284.471.898.624 1.371.341 1.955-1.168 2.986-2.81 2.986-4.838s-1.03-3.67-2.986-4.839a1.002 1.002 0 00-1.371.342.994.994 0 00.343 1.366z"
					fillRule="nonzero"
				/>
			</g>
		</svg>
	);
}

function _PlayIcon() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<path
				d="M4.245 2.563a.5.5 0 00-.745.435v18.004a.5.5 0 00.745.435l15.997-9.001a.5.5 0 000-.872L4.245 2.563z"
				fill="#FFF"
				stroke="#FFF"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function _PauseIcon() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 24 24"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<path
				d="M18 2.5A1.5 1.5 0 0016.5 4v16a1.5 1.5 0 003 0V4A1.5 1.5 0 0018 2.5zm-12 0A1.5 1.5 0 004.5 4v16a1.5 1.5 0 003 0V4A1.5 1.5 0 006 2.5z"
				fill="#FFF"
				stroke="#FFF"
				fillRule="evenodd"
			/>
		</svg>
	);
}

function _Reverse10() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 28 28"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<g fill="none" fillRule="evenodd">
				<path
					d="M15 8.066V1.934a.5.5 0 00-.777-.416L9.624 4.584a.5.5 0 000 .832l4.599 3.066A.5.5 0 0015 8.066z"
					fill="#FFF"
				/>
				<path
					d="M4 16c0 6.075 4.925 11 11 11h0c6.075 0 11-4.925 11-11S21.075 5 15 5"
					stroke="#FFF"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<text
					fontFamily="Graphik-Medium"
					fontSize={10}
					fontWeight={400}
					fill="#FFF"
					transform="translate(4 2)"
				>
					<tspan x="5.4" y={18}>
						10
					</tspan>
				</text>
			</g>
		</svg>
	);
}

function _Forward10() {
	const { classes } = useStyles();

	return (
		<svg
			viewBox="0 0 28 28"
			xmlns="http://www.w3.org/2000/svg"
			className={classes.iconStyle}
		>
			<g fill="none" fillRule="evenodd">
				<path
					d="M14 8.066V1.934a.5.5 0 01.777-.416l4.599 3.066a.5.5 0 010 .832l-4.599 3.066A.5.5 0 0114 8.066z"
					fill="#FFF"
				/>
				<path
					d="M25 16c0 6.075-4.925 11-11 11S3 22.075 3 16 7.925 5 14 5"
					stroke="#FFF"
					strokeWidth={2}
					strokeLinecap="round"
					strokeLinejoin="round"
				/>
				<text
					fontFamily="Graphik-Medium, Graphik"
					fontSize={10}
					fontWeight={400}
					fill="#FFF"
					transform="translate(0 1)"
				>
					<tspan x="8.4" y={19}>
						10
					</tspan>
				</text>
			</g>
		</svg>
	);
}

export const UnmuteIcon = memo(_UnmuteIcon);
export const MuteIcon = memo(_MuteIcon);
export const VolumeHalf = memo(_VolumeHalf);
export const PlayIcon = memo(_PlayIcon);
export const PauseIcon = memo(_PauseIcon);
export const Reverse10 = memo(_Reverse10);
export const Forward10 = memo(_Forward10);

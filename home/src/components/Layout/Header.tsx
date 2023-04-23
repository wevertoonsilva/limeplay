import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { useCommonStyles } from '@/styles/common';
import NavigationItem from './Navigation';
import { GitHubIcon } from '@/assets/icons/GitHubIcon';
import { DiscordIcon } from '@/assets/icons/DiscordIcon';
import { makeStyles } from '@/styles';
import { Config } from '../../../config';

export type HeaderProps = {
	/** Whether the header should be sticky when scrolling. */
	sticky?: boolean | 'mobile';
	/** Whether the header should blur content underneath it. */
	blur?: boolean;
};

export function Header({ sticky = false, blur = true }: HeaderProps) {
	const { classes: commonClasses } = useCommonStyles();
	const { classes } = useStyles({
		sticky,
		blur,
	});

	return (
		<header className={classes.header}>
			{blur && <div className={classes.blur} />}
			<NavigationMenu.Root delayDuration={0} className={classes.menuRoot}>
				<NavigationMenu.List
					asChild
					aria-label="Site navigation"
					className={classes.menuList}
				>
					<ul className={commonClasses.layoutContent}>
						<NavigationItem href="/" variant="default">
							Limeplay
						</NavigationItem>
						<NavigationItem href="/features" variant="dimmed">
							Features
						</NavigationItem>
						<NavigationItem href="/docs" variant="dimmed">
							Documentation
						</NavigationItem>
						<div className={classes.spacer} />
						<NavigationItem href={Config.GITHUB_URL} type="icon">
							<GitHubIcon size={24} />
						</NavigationItem>
						<NavigationItem href={Config.DISCORD_URL} type="icon">
							<DiscordIcon size={24} />
						</NavigationItem>
					</ul>
				</NavigationMenu.List>
			</NavigationMenu.Root>
		</header>
	);
}

const useStyles = makeStyles<HeaderProps>()((theme, { blur, sticky }) => ({
	header: {
		position: sticky ? 'relative' : 'fixed',
		top: 0,
		background: !blur ? theme.color.pageBg : 'initial',
		display: 'flex',
		flexDirection: 'column',
		left: 0,
		right: 0,
		alignItems: 'center',
		height: 'var(--header-height)',
		zIndex: 'var(--layer-header)',
		transition: 'background 400ms',
		marginBottom: sticky ? 'initial' : `calc(-1 * var(--header-height))`,
		marginRight:
			sticky === 'mobile' || sticky
				? `var(--removed-body-scroll-bar-size)`
				: 'initial',
	},

	blur: {
		'&::before, &::after': {
			content: '""',
			position: 'absolute',
			inset: 0,

			/* Safari / iOS occasionally have 1px gap at the top of screen, ensure it's blurred */
			top: '-1px',
			bottom: '-50%',
			pointerEvents: 'none',
			userSelect: 'none',
		},

		'&::before': {
			backdropFilter: 'blur(12px)',
			maskImage:
				'linear-gradient(to bottom, black var(--header-height), transparent)',
		},
	},

	menuRoot: {
		position: 'relative',
		width: '100%',
	},

	menuList: {
		position: 'relative',
		display: 'flex',
		alignItems: 'center',

		'& > li + li': {
			marginLeft: '24px',

			[theme.breakpoints.max.mobile]: {
				marginLeft: '16px',
			},
		},

		'&::after': {
			content: '""',
			marginLeft: 'var(--page-padding-left)',
			marginRight: 'var(--page-padding-right)',
			position: 'absolute',
			bottom: 0,
			left: 0,
			right: 0,
			height: '1px',
			background: 'rgba(255, 255, 255, 0.08)',
		},
	},

	spacer: {
		flexGrow: 1,
	},
}));

import { useQuality } from '@limeplay/core';
import { ActionIcon, Box, Menu, Text, createStyles } from '@mantine/core';
import { IconCheck } from '@tabler/icons-react';
import { VideoQuality } from '../Icons/Icons';
import { IconButton } from '@/components/common/Buttons';

const useStyles = createStyles((theme) => ({
	backgroundStyle: {},
	dropDown: {},
}));

function SelectIcon({ shown }: { shown: boolean }) {
	return shown ? (
		<IconCheck color="#1db954" size={18} />
	) : (
		<Box w={18} h={18} />
	);
}

export function QualityMenu() {
	const { isAuto, selectedTrack, tracks, selectTrack, setAutoMode } =
		useQuality({
			clearBufferOnChange: 'auto',
		});

	const { classes, cx } = useStyles();

	return (
		<Menu
			shadow="md"
			width={160}
			trigger="hover"
			offset={36}
			withArrow
			transitionProps={{ transition: 'fade', duration: 100 }}
			closeDelay={200}
			styles={{
				dropdown: {
					background: 'rgba(0,0,0,0.64)',
					backdropFilter: 'blur(10px)',
					marginLeft: -24,
				},
				arrow: {
					background: 'rgba(0,0,0,0.64)',
					backdropFilter: 'blur(10px)',
				},
			}}
		>
			<Menu.Target>
				<IconButton aria-label="Select Quality">
					<VideoQuality />
				</IconButton>
			</Menu.Target>
			<Menu.Dropdown
				className={cx(classes.backgroundStyle, classes.backgroundStyle)}
			>
				<Menu.Label>Select Quality</Menu.Label>
				<Menu.Item
					onClick={setAutoMode}
					icon={<SelectIcon shown={isAuto} />}
				>
					Auto
					{isAuto && selectedTrack && (
						<Text fz="xs">Current: {selectedTrack.height}p</Text>
					)}
				</Menu.Item>
				{tracks.map((track) => (
					<Menu.Item
						icon={
							<SelectIcon
								shown={track.id === selectedTrack.id && !isAuto}
							/>
						}
						key={track.id}
						onClick={() => selectTrack(track)}
					>
						<Text>{track.height}p</Text>
					</Menu.Item>
				))}
			</Menu.Dropdown>
		</Menu>
	);
}

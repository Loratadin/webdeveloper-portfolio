import styled from 'styled-components';

import { lime, navy } from '../../theme/variables';
import media from '../../theme/media';

// export const MP3Player = styled(ReactAudioPlayer)`
// 	width: 250px;
// `;

export const MP3PlayerWrapper = styled.div`
	width: 250px;
	height: auto;
	padding: 10px;
	margin: 10px auto;
	border-radius: 10px;
	background-color: ${navy};
	color: ${lime};
	font-size: 10px;
	display: flex;
	align-items: center;
	justify-content: space-around;
	${media.tablet`
		width: 300px;
		font-size: 11px;
 	`}
 	${media.desktop`
		width: 350px;
		font-size: 12px;
	`}
	${media.monitor`
		width: 400px;
		font-size: 14px;
	`}
`;

export const MP3PlayerIcon = styled.div`
	display: none;
	& > img {
	width: 100%;
	display: block;
	}
	${media.desktop`
		display: block;
	`}
	${media.monitor`
		display: block;
	`}
`;

export const ColumnContainer = styled.div`
 	display: flex;
 	flex-direction: column;
`;
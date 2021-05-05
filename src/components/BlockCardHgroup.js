import PropTypes from 'prop-types';
import { Text } from '@chakra-ui/react';

const BlockCardHgroup = ({ title, lede }) => (
	<>
		<Text as="h2" textStyle="text4xl" layerStyle="gapLgB">
			{title}
		</Text>
		<Text as="p" textStyle="textBody" fontWeight="300" layerStyle="gapLgB">
			{lede}
		</Text>
	</>
);

BlockCardHgroup.propTypes = {
	title: PropTypes.string.isRequired,
	lede: PropTypes.string.isRequired,
};

export default BlockCardHgroup;

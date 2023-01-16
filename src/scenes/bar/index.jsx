import { Box } from '@mui/material';
import Header from '../../components/Header';
import BarChart from '../../components/BarChart';

const Bar = () => {
	return (
		<Box m='20px'>
			<Header
				title='Alberta Greenhouse Gas Emissions'
				subtitle='GHG emissions in Alberta by sector every five years from 1990 to 2020 in MT of CO2e.'
			/>
			<Box height='75vh'>
				<BarChart />
			</Box>
		</Box>
	);
};

export default Bar;

import { Box } from '@mui/material';
import Header from '../../components/Header';
import LineChart from '../../components/LineChart';

const Line = () => {
	return (
		<Box m='20px'>
			<Header
				title='Emission Reductions Report for: Your Company'
				subtitle='Monthly Reductions: How Many Tonnes Of CO2 You Mitigated This Year'
			/>
			<Box height='75vh'>
				<LineChart />
			</Box>
		</Box>
	);
};

export default Line;

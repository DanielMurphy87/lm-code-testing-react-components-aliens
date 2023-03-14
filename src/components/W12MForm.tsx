import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './Species_Name';
import PlanetName from './Planet_Name';
import NumberOfBeings from './Number_Of_Beings';
import AmRobot from './Am_Robot';
import SpareReason from './Spare_Reason';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState('');
	const [planetName, setPlanetName] = useState('');
	const [numberOfBeings, setNumberOfBeings] = useState('');
	const [amRobot, setAmRobot] = useState('');
	const [spareReason, setSpareReason] = useState('');

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName name={speciesName }/>
			<PlanetName name={planetName }/>
			<NumberOfBeings name={numberOfBeings }/>
			<AmRobot name={amRobot }/>
			<SpareReason name={spareReason }/>
			<button>Submit</button>
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;

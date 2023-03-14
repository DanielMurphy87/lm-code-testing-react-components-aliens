import { useState } from 'react';
import W12MHeader from './W12MHeader';
import SpeciesName from './Species_Name';
import PlanetName from './Planet_Name';
import NumberOfBeings from './Number_Of_Beings';
import AmRobot from './Am_Robot';
import SpareReason from './Spare_Reason';

const W12MForm = () => {

	const [speciesName, setSpeciesName] = useState<string>('human');
	const [planetName, setPlanetName] = useState<string>('earth');
	const [numberOfBeings, setNumberOfBeings] = useState<number>(0);
	const [amRobot, setAmRobot] = useState<number>(0);
	const [spareReason, setSpareReason] = useState<string>('we like to spare our species');

	const handleClick = () => { console.log(speciesName, planetName, numberOfBeings, amRobot, spareReason);};

	return (
		<section className='w12MForm'>
			<W12MHeader />
			<SpeciesName speciesName={ speciesName } onChangeSpeciesName={(e : any) => setSpeciesName(e.target.value)}/>
			<PlanetName planetName={ planetName } onChangePlanetName={(e : any) => setPlanetName(e.target.value)} />
			<NumberOfBeings numberOfBeings={ numberOfBeings } onChangeNumberOfBeings={(e : any) => setNumberOfBeings(e.target.value)}/>
			<AmRobot sumAnswer={ amRobot } onSumAnswer={(e : any) => setAmRobot(e.target.value)} />
			<SpareReason spareReason={ spareReason } onChangeReason={(e : any) => setSpareReason(e.target.value)}/>
			<button onClick={handleClick}>Submit</button>
			{/* REST OF FORM GOES HERE */}
		</section>
	);
};

export default W12MForm;

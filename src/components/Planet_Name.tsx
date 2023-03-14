interface PlanetNameProps {
    planetName: string;
    onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {
    return (
        <>
            <label htmlFor="planet-name">Planet Name: </label>
            <input type="text" id="planet-name" value={planetName} onChange={onChangePlanetName} />
            <br />
        </>
    );
}

export default PlanetName;
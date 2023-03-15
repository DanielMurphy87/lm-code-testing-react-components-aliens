interface PlanetNameProps {
    planetName: string;
    onChangePlanetName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const PlanetName : React.FC<PlanetNameProps> = ({ planetName, onChangePlanetName }) => {
    const validatePlanetName = (name: string) => {
        if (name.length === 0) {
            return "Planet name cannot be empty";
        }
        if (name.length > 50) {
            return "Planet name cannot be longer than 50 characters";
        }
        return "";
    }

    const planetNameError = validatePlanetName(planetName);

    return (
        <>
            <label htmlFor="planet-name">Planet Name: </label>
            <input type="text" id="planet-name" value={planetName} onChange={onChangePlanetName}/>
            <br />
            {planetNameError && <div style={{color: "red"}}>{planetNameError}</div>}
        </>
    );
}

export default PlanetName;
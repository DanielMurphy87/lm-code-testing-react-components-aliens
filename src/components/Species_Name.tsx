interface SpeciesNameProps {
    speciesName: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {

    const validateSpeciesName = (name: string) => {
        if (name.length === 0) {
            return "Species name cannot be empty";
        }
        if (name.length > 20) {
            return "Species name cannot be longer than 20 characters";
        }
        return "";
    }

    const speciesNameError = validateSpeciesName(speciesName);
    
    return (
        <>
            <label htmlFor="species-name">Species Name: </label>
            <input type="text" id="species-name" value={speciesName} onChange={onChangeSpeciesName}/>
            <br />
            {speciesNameError && <div style={{color: "red"}}>{speciesNameError}</div>}
        </>
    );
}

export default SpeciesName;
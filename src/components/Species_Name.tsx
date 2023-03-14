interface SpeciesNameProps {
    speciesName: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ speciesName, onChangeSpeciesName }) => {
    
    return (
        <>
            <label htmlFor="species-name">Species Name: </label>
            <input type="text" id="species-name" value={speciesName} onChange={onChangeSpeciesName}/>
            <br />
        </>
    );
}

export default SpeciesName;
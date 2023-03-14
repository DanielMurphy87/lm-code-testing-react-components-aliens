interface SpeciesNameProps {
    name: string;
    onChangeSpeciesName: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SpeciesName : React.FC<SpeciesNameProps> = ({ name, onChangeSpeciesName }) => {
    
    return (
        <>
            <label htmlFor="species-name">Species Name: </label>
            <input type="text" id="species-name" value={name} onChange={onChangeSpeciesName}/>
            <br />
        </>
    );
}

export default SpeciesName;
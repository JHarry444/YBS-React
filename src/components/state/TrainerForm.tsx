import { useContext, useState } from "react";
import type { TrainerProps } from "../../types";
import { ThemeContext } from "../../context/themeContext";

function TrainerForm({ setTrainers }: { setTrainers: React.Dispatch<React.SetStateAction<TrainerProps[]>> }) {

    const [name, setName] = useState("");
    const [age, setAge] = useState(0);
    const [specialism, setSpecialism] = useState("");

    const { theme } = useContext(ThemeContext);

    return (<>
        <h2 className={theme}>Add Trainer</h2>
        <form className={theme} onSubmit={e => {
            e.preventDefault();

            setTrainers(currentTrainers => [{ name, age, specialism }, ...currentTrainers]);
        }}>
            <label htmlFor="trainerName">Name </label>
            <input type="text" name="name" id="trainerName"
                value={name} onChange={e => setName(e.target.value)} />
            <br />
            <label htmlFor="trainerAge">Age </label>
            <input type="number" name="age" id="trainerAge"
                value={age} onChange={e => setAge(parseInt(e.target.value))} />
            <br />
            <label htmlFor="trainerSpecialism">Specialism </label>
            <input type="text" name="specialism" id="trainerSpecialism"
                value={specialism} onChange={e => setSpecialism(e.target.value)} />
            <br />
            <button>Add</button>
        </form>
    </>);
}

export default TrainerForm;
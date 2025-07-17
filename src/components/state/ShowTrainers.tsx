import type { TrainerProps } from "../../types";
import Trainer from "../Trainer";

function ShowTrainers({ trainers }: { trainers: TrainerProps[] }) {
    return (<>
        <h2>Trainers</h2>
        {
            trainers.map(({ name, age, specialism }) =>
                <Trainer name={name} age={age} specialism={specialism} />)
        }
    </>);
}

export default ShowTrainers;
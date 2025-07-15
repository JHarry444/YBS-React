import { useParams } from "react-router";
import trainers from "../../data/trainers.json";
import Trainer from "../Trainer";

function TrainerByName() {
    // useParams -> 'hook' that access path parameters from the url (only works inside of the router)
    const params = useParams();
    console.log("PARAMS: ", params);

    const { name } = params;

    const trainer = trainers.find(trainer => trainer.name.toLowerCase() === name?.toLowerCase());
    return (<>
        <h2>Trainer with name: {name}</h2>
        {
            trainer
                ?
                <Trainer name={trainer.name} age={trainer.age} specialism={trainer.specialism} />
                :
                "No trainer with that name!"
        }
    </>);
}

export default TrainerByName;
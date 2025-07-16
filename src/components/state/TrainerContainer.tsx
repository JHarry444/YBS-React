import { useState } from "react";
import ShowTrainers from "./ShowTrainers";
import TrainerForm from "./TrainerForm";
import type { TrainerProps } from "../../types";

function TrainerContainer() {

    const [trainers, setTrainers] = useState<TrainerProps[]>([{
        name: "JH",
        age: 31,
        specialism: "Repeating the same examples"
    }]);

    return (<>
        <h2>Lifting State</h2>
        <section>
            <div>
                <TrainerForm setTrainers={setTrainers} />
            </div>
            <div>
                <ShowTrainers trainers={trainers}/>
            </div>
        </section>
    </>);
}

export default TrainerContainer;
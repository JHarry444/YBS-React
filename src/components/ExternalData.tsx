import trainers from "../data/trainers.json";
import Trainer from "./Trainer";
import { v4 as uuid4 } from "uuid";
function ExternalData() {
    return (
        <>
            <h2>External Data</h2>
            <section>
                {
                    trainers.map(({ name, age, specialism }) => <Trainer key={uuid4()} name={name} age={age} specialism={specialism} />)
                }
            </section>
        </>
    );
}

export default ExternalData;
import type { TrainerProps } from "./Trainer";
import Trainer from "./Trainer";

function PropsPage() {

    const demoTrainer: TrainerProps = {
        name: "Jordan B",
        age: 28,
        specialism: "Service Now"
    }
    return (<>
        <h2>Props</h2>
        <Trainer
            name={demoTrainer.name}
            age={demoTrainer.age}
            specialism={demoTrainer.specialism}
        />
    </>);
}

export default PropsPage;
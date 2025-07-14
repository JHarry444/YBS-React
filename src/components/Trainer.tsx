export type TrainerProps = {
    name: string,
    age: number,
    specialism?: string
}

function Trainer({ name, age, specialism }: TrainerProps) {
    // const name = "JH";
    // const age = 31;
    // const specialism = "Java";

    console.log("Props: ", { name, age, specialism });

    return (
        <>
            <p>Name: {name}</p>
            <p>Age: {age}</p>
            <p>Specialism: {specialism}</p>
        </>
    );
}

export default Trainer;
// const exports = {TrainerProps, Trainer}
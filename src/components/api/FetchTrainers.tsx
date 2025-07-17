import { useEffect, useState } from "react";
import Trainer from "../Trainer";

type TrainerDB = {
    name: string;
    age: number;
    specialism: string;
}

function FetchTrainers() {
    console.log("FETCHTRAINERS RENDERED");

    const [trainers, setTrainers] = useState<TrainerDB[]>([]);
    const [filter, setFilter] = useState("");

    const getTrainers = async function () {
        // fires req
        // then handles the reesponse (parses the response body from json to js)
        // fetch("http://localhost:8080/trainers")
        //     .then(response => response.json())
        //     .then(json => {
        //         console.log("JSON:", json);
        //         setTrainers(json);
        //     })
        //     .catch(err => console.error(err));

        try {
            const response = await fetch("http://localhost:8080/trainers");
            const json = await response.json();
            console.log("JSON:", json);
            setTrainers(json);
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        console.log("ABOUT TO CALL getTrainers!");
        getTrainers();
        console.log("CALLED getTrainers!");

        const trainerInterval = setInterval(getTrainers, 3_000);
        return () => {
            console.log("Component unmounting!");
            clearInterval(trainerInterval);
        }
    }, [])

    useEffect(() => {
        getTrainers();
    }, [filter]);

    return (<>
        <h2>Fetch Trainers</h2>
        <label htmlFor="trainerFilter">Filter:</label>
        <input type="text" name="filter" id="trainerFilter" value={filter} onChange={e => setFilter(e.target.value)} />
        {
            trainers.filter(({ name }) => name.toLowerCase().startsWith(filter)).map(({ name, age, specialism }) =>
                <Trainer name={name} age={age} specialism={specialism} />)
        }
    </>);
}

export default FetchTrainers;
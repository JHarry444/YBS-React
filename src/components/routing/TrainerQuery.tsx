import { useSearchParams } from "react-router";
import trainers from "../../data/trainers.json";
import Trainer from "../Trainer";

function TrainerQuery() {
    const [search] = useSearchParams();

    console.log("SEARCH:", search);


    return (
        <>
            <h2>Search Params</h2>
            {
                trainers.filter(({ name, age, specialism }) => {
                    if (search.get("name") && search.get("name")?.toLowerCase() !== name.toLowerCase()) return false;
                    else if (search.get("age") && parseInt(search.get("age")!) !== age) return false;
                    else if (search.get("specialism") && search.get("specialism")?.toLowerCase() !== specialism.toLowerCase()) return false;
                    else return true;
                }).map(({ name, age, specialism }) => <Trainer name={name} age={age} specialism={specialism} />)
            }
        </>
    );
}

export default TrainerQuery;
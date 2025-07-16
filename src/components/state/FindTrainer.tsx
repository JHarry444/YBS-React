import { useState } from "react";
import { useNavigate } from "react-router";

// type Trainer = {
//     name: string,
//     age: number,
//     specialism: string,
// }

function FindTrainer() {
    const navigate = useNavigate();

    const [name, setName] = useState("");

    // const [data, setData] = useState<Trainer>();

    const [data, setData] = useState({
        name: "",
        age: 0,
        specialism: ""
    });


    return (<>
        <h2>Find Trainer</h2>
        <section>
            <h3>By Name</h3>
            <label htmlFor="trainerName">Name </label>
            {/*  controlled component */}
            <input type="text" name="name" id="trainerName" value={name} onChange={e => setName(e.target.value)} />
            <button onClick={() => navigate(`/trainer/${name}`)}>Search</button>
        </section>
        <section>
            <h3>By Query</h3>
            <form onSubmit={e => {
                e.preventDefault();

                let params = [];

                if (data.name) params.push(`name=${data.name}`);
                if (data.age) params.push(`age=${data.age}`);
                if (data.specialism) params.push(`specialism=${data.specialism}`);

                const url = `/trainerQuery?${params.join('&')}`;

                navigate(url);
            }}>
                <label htmlFor="trainerQueryName">Name </label>
                <input type="text" name="name" id="trainerQueryName"
                    value={data.name} onChange={e => setData({ name: e.target.value, age: data.age, specialism: data.specialism })} />
                <br />
                <label htmlFor="trainerQueryAge">Age </label>
                <input type="number" name="age" id="trainerQueryAge"
                    value={data.age} onChange={e => setData(currentData => ({ ...currentData, age: parseInt(e.target.value) }))} />
                <br />
                <label htmlFor="trainerQuerySpecialism">Specialism </label>
                <input type="text" name="specialism" id="trainerQuerySpecialism"
                    value={data.specialism} onChange={e => setData(currentData => ({ ...currentData, specialism: e.target.value }))} />
                <br />
                <button>Search</button>
            </form>
        </section>
        <pre>
            {
                JSON.stringify(data, null, 2)
            }
        </pre>
    </>);
}

export default FindTrainer;
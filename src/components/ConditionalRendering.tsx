function ConditionalRendering() {
    const num = 12;
    if (2 + 2 === 4) {
        return (<>
            <h2>Conditional Rendering</h2>
            <p>The number is {num % 2 === 0 ? "Even" : "Odd"}</p>
            {num > 10 ? <p>Greater than ten</p> : false}
            {num > 10 && <p>Greater than ten</p>}
        </>);
    } else {
        return <p>Maths has gone a bit wonky</p>;
    }
}

export default ConditionalRendering;
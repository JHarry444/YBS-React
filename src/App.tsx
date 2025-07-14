import './App.css'
import Trainer,{ type TrainerProps} from './components/Trainer';

function App() {
  const demoTrainer: TrainerProps = {
    name: "Jordan B",
    age: 28,
    specialism: "Service Now"
  }

  // return must have only one parent element
  // watch out for ASI -> JS will insert a ; after a return statement
  return (
    // <> -> react fragment (like a div but without appearing on the page)
    <>
      <Trainer name="JH" age={31} specialism="Java" />
      <Trainer name="Shafeeq" age={40} specialism="Oracle" />
      {Trainer({ name: "Cameron", age: 32, specialism: "Web" })}
      <Trainer name='Barry' age={42} specialism='Not existing' />
      <Trainer name='Larry' age={27} />
      <Trainer name='Gary' age={34} />
      <Trainer
        name={demoTrainer.name}
        age={demoTrainer.age}
        specialism={demoTrainer.specialism}
      />
      <input className='bloop' />
      <p>Hello, fssf!</p>
      <p>1 + 1 = {1 + 1}</p>
    </>
  );
}

export default App

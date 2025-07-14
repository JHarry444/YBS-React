import './App.css'
import Input from './components/Input'

function App() {

  // return must have only one parent element
  // watch out for ASI -> JS will insert a ; after a return statement
  return (
    // <> -> react fragment (like a div but without appearing on the page)
    <>
      <Input />
      <Input />
      <Input />
      <Input />
      <input className='bloop' />
      <p>Hello, fssf!</p>
      <p>1 + 1 = {1 + 1}</p>
    </>
  );
}

export default App

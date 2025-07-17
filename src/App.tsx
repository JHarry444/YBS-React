import './App.css'
import ConditionalRendering from './components/ConditionalRendering';
import ExternalData from './components/ExternalData';
import Header from './components/Header';
import PropsPage from './components/PropsPage';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import TrainerByName from './components/routing/TrainerByName';
import NavigateExample from './components/routing/NavigateExample';
import TrainerQuery from './components/routing/TrainerQuery';
import Counter from './components/state/Counter';
import FindTrainer from './components/state/FindTrainer';
import TrainerContainer from './components/state/TrainerContainer';
import FetchTrainers from './components/api/FetchTrainers';

function App() {


  // return must have only one parent element
  // watch out for ASI -> JS will insert a ; after a return statement
  return (
    <Router>
      <Header />
      <Routes>
        <Route path='/' element={<h2>HOME</h2>} />
        <Route path='/props' element={<PropsPage />} />
        <Route path='/conditional' element={<ConditionalRendering />} />
        <Route path='/external' element={<ExternalData />} />
        <Route path='/navigateExample' element={<NavigateExample />} />
        <Route path='/trainer/:name' element={<TrainerByName />} />
        <Route path='/trainerQuery' element={<TrainerQuery />} />
        <Route path='/state' element={<Counter />} />
        <Route path='/find' element={<FindTrainer />} />
        <Route path='/liftingState' element={<TrainerContainer />} />
        <Route path="/fetchTrainers" element={<FetchTrainers />} />
      </Routes>
      <p>App: {new Date().toISOString()}</p>
    </Router>
  );
}

export default App

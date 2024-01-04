import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/Pages/HomePage';
import Gallery from './Gallery/Gallery';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={ <HomePage />} />
      <Route path='/gallery' element={ <Gallery />} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;

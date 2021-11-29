import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home/Home';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home></Home>}>
        </Route>
        <Route path="/home" element={<Home></Home>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

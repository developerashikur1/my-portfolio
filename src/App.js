import { BrowserRouter, Routes, Route, } from 'react-router-dom';
import './App.css';
import Hosting from './components/Home/Experience/Hosting';
import Tools from './components/Home/Experience/Tools';
import WebDevelopment from './components/Home/Experience/WebDevelopment';
import MainHome from './components/Home/MainHome/MainHome';

function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<MainHome></MainHome>}>
        <Route path="/tools" element={<Tools></Tools>}></Route>
        <Route path="/hosting" element={<Hosting></Hosting>}></Route>
        <Route path="/web" element={<WebDevelopment></WebDevelopment>}></Route>
        </Route>
        <Route path="/mainHome" element={<MainHome></MainHome>}>
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;

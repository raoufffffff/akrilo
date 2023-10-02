// import logo from './logo.svg';
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom';
import './App.css';
import Header from './componenet/header/Header';
import state from './stor';
import Loging from './componenet/loging/Loging';
import Allhaous from './componenet/Allhaous/Allhaous';
import VillaInfo from './componenet/VillaInfo/VillaInfo';
function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Header />} >
          <Route index element={<Loging />} />
          <Route path='serch' element={<Allhaous />} />
          {/* <Route path='serch/' element={<Allhaous />} /> */}
          <Route path='serch/:id' element={<VillaInfo />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;

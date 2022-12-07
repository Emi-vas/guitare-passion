import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Electriques from "./pages/Electriques"
import Acoustiques from "./pages/Acoustiques"
import Accessoires from "./pages/Accessoires"
import Amplis from "./pages/Amplis"

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/guitares-electriques' element={<Electriques />} />
        <Route path='/guitares-acoustiques' element={<Acoustiques />} />
        <Route path='/accessoires' element={<Accessoires />} />
        <Route path='/amplis' element={<Amplis />} />
    </Routes>
  </BrowserRouter>
);



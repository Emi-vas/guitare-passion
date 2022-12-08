import ReactDOM from 'react-dom/client';
import Home from './pages/Home';
import './styles/index.scss';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Categories from './pages/Categories';
import { uriReq } from "./helper/uriReq"
import Electriques from './pages/Electriques';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <BrowserRouter>
    <Routes>
        <Route path='/' element={<Home />} />
        <Route 
            path='/guitares-electriques' 
            element={<Electriques />}
        />
        <Route 
            path='/guitares-acoustiques' 
            element={
              <Categories 
                title={"Guitares acoustiques"}
                req={uriReq('guitares-acoustiques')} />} 
        />
        <Route 
            path='/accessoires' 
            element={
              <Categories 
                title={"Accessoires"}
                req={uriReq('accessoires')} />} 
        />
        <Route 
            path='/amplis' 
            element={
              <Categories 
                title={"Amplis"}
                req={uriReq('amplis')}/>} 
        />
        
    </Routes>
  </BrowserRouter>
);



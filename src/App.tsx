import { Routes, Route } from "react-router-dom"
import Electriques from './pages/Electriques';
import Electrique from './pages/Electriques/Electrique';
import Acoustiques from "./pages/Acoustiques"
import Accessoires from "./pages/Accessoires"
import Amplis from "./pages/Amplis"
import Home from './pages/Home';
import { useSelector } from "react-redux";
import { useEffect } from "react";
import Cart from "./pages/Cart";


const App = () => {
    const cart = useSelector((store: any) => store.cart)
    useEffect(() => {
        //console.log(cart)
    },[cart])
    return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/guitares-electriques' element={<Electriques />}/>
            <Route path='/guitares-electriques/:id' element={<Electrique />}/>
                
            <Route path='/guitares-acoustiques' element={<Acoustiques />}/>

            <Route path='/accessoires' element={<Accessoires />}/>

            <Route path='/amplis' element={<Amplis />}/>
            
            <Route path='/cart' element={<Cart />}/>
        </Routes>
    );
};

export default App;
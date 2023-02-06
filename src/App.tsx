//React
import { Routes, Route } from "react-router-dom"
import { useSelector } from "react-redux";
import { useEffect } from "react";
//Compo
import Home from './pages/Home';
import Cart from "./pages/Cart";
import Footer from "./components/Footer";
import MainCategorie from "./pages/MainCategorie";
import Article from "./pages/Article";
//assets
import { AcousticFilters, ElectricFilters, AmplisFilters } from "./assets/filters";
import { reqAcousticsGuitars, reqElectricsGuitars, reqAmplis } from "./assets/req";


const App = () => {
    const cart = useSelector((store: any) => store.cart)
    useEffect(() => {
        //console.log(cart)
    },[cart])
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route 
                path='/guitares-electriques' 
                element={<MainCategorie 
                    title="Guitare Electriques" 
                    req={reqElectricsGuitars}
                    listFilters={ElectricFilters}
                />}
            />
            <Route 
                path='/guitares-electriques/:id' 
                element={<Article 
                    title="Guitare Electriques" 
                    req={reqElectricsGuitars}
                />}
            />
                
            <Route 
                path='/guitares-acoustiques'
                element={<MainCategorie 
                    title="Guitare Electriques" 
                    req={reqAcousticsGuitars}
                    listFilters={AcousticFilters}
                />} 
            />
            <Route 
                path='/guitares-acoustiques/:id' 
                element={<Article 
                    title="Guitare Acoustiques" 
                    req={reqAcousticsGuitars}
                />}
            />

            <Route 
                path='/amplis' 
                element={<MainCategorie 
                    title="Amplis" 
                    req={reqElectricsGuitars}
                    listFilters={AmplisFilters}
                />}
            />

            {/* <Route path='/accessoires' element={<Accessoires />}/>*/}
            
            <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer />
        </>
    );
};

export default App;
import { useState } from "react";
import Header from "../../components/Header";
import { isTelFct } from "../../helper/isTel";

const Home = () => {

    return (
        <div className="Home">
            <Header />
            <Guide />
        </div>
    );
};

export default Home;



const Guide = () => {
    const isTel = isTelFct()
    const [animTitle, setAnimTitle] = useState("")

    const translateTitle = () => {
        if(window.innerWidth > 700) {
            return "translateX(100px)"
        } else {
            return "translateX(50px)"
        }
    }

    return(
        <div className="guide">
             <img 
                src={isTel ? "./images/guide_tel.jpg" : "./images/guide_pc.jpg"}
                alt="" 
            />

            <div className="bloc_txt">
                <h1 style={{ transform: animTitle }} >Guide Débutant</h1>
                <p>
                    Un outil pour vous aider <br />
                    à choisir votre première guitare
                </p>
                <button 
                    className=" btn btn-1"
                    onMouseEnter={()=> setAnimTitle(translateTitle)}
                    onMouseLeave={()=> setAnimTitle("translateX(0)")}
                >Suivre le guide</button>
            </div>
        </div>
    )
}
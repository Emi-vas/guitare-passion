import { useState } from "react";
import Header from "../../components/Header";
import { isTelFct } from "../../helper/isTel";

const Home = () => {

    return (
        <div className="Home">
            <Header />
            <Guide />
            <h2>Nos catégories</h2>
            <Categories />
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

const Categories = () => {
    const categoriesListe = [
        {
            name: 'Amplis',
            img: "./images/cate-ampli.jpg"
        },
        {
            name: 'Electriques',
            img: "./images/cate-electriques.jpg"
        },
        {
            name: 'Acoustiques',
            img: "./images/cate-acoustiques.jpg"
        },
        {
            name: 'Accessoires',
            img: "./images/cate-accessoires.jpg"
        },
    ]

    return(
        <div className="Home categories">
            {
                categoriesListe.map(categorie => (
                    <a key={categorie.name} className="categorie">
                        <img src={categorie.img} alt={categorie.name} className="bg" />
                        <h3>{categorie.name}</h3>
                        <img className="pic" src="./images/pic-cate.png" alt="médiator" />
                    </a>
                ))
            }
        </div>
    )
}
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"

const Header = () => {
    const [displayHeader, setDisplayHeader] = useState(true)

    useEffect(() => {
        console.log(window.innerWidth)
        if(window.innerWidth > 650) {
            // header always ON on desktop
            setDisplayHeader(true)
        } else {
            setDisplayHeader(false)
        }
    }, [])

    return (
        <div>
            { !displayHeader && <i onClick={() => setDisplayHeader(true)} className="fa-solid fa-bars headerTelIcon" data-testid="buttonMenu"></i> }
            { displayHeader && <HeaderBloc setDisplayHeader={setDisplayHeader} /> }
        </div>
    );
};

export default Header;


interface PropsHeaderBloc {
    setDisplayHeader: (value: boolean) => void
}

const HeaderBloc = ({ setDisplayHeader }: PropsHeaderBloc) => {
    return (
        <div className="Header">
            <div className="cross" onClick={() => setDisplayHeader(false)}>&times;</div>
            <nav>
                <div className="blocLien">
                    <Link to="/guitares-electriques" >Guitare électriques</Link>
                </div>
                <div className="blocLien">
                    <Link to="/guitares-acoustiques" >Guitare acoustiques</Link>
                </div>
                <div className="blocLien">
                    <Link to="/amplis" >Amplis</Link>
                </div>
                <div className="blocLien">
                    <Link to="/accessoires" >Accessoires</Link>
                </div>
            </nav>
          
        </div>
    )
}
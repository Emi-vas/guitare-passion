import { useEffect, useState } from "react";

const Header = () => {
    const [displayHeader, setDisplayHeader] = useState(false)

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
            { !displayHeader && <i onClick={() => setDisplayHeader(true)} className="fa-solid fa-bars headerTelIcon"></i> }
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
                    <a href="">Guitare électriques</a>
                </div>
                <div className="blocLien">
                    <a href="">Guitare acoustiques</a>
                </div>
                <div className="blocLien">
                    <a href="">Amplis</a>
                </div>
                <div className="blocLien">
                    <a href="">Accessoires</a>
                </div>
            </nav>
        </div>
    )
}
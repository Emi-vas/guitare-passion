//React
import { useEffect, useState } from "react";
import { Link } from "react-router-dom"
//redux
import { useDispatch, useSelector } from "react-redux";
import { setCart } from "../redux/shoppingCart/shoppingCart.actions";
//assets
import { ICONS } from "../assets/constants";
//types
import { GuitarInCart, Store } from "../assets/types";

interface Props {
    disableCart ?: true
}

const Header = ({disableCart}: Props) => {
    const [displayHeader, setDisplayHeader] = useState(true)

    useEffect(() => {
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
            { displayHeader && <HeaderBloc setDisplayHeader={setDisplayHeader} disableCart={disableCart} /> }
        </div>
    );
};

export default Header;


interface PropsHeaderBloc {
    setDisplayHeader: (value: boolean) => void
    disableCart ?: true
}

const HeaderBloc = ({ setDisplayHeader, disableCart }: PropsHeaderBloc) => {
    const dispatch = useDispatch()
    const cart = useSelector((store: Store) => store.cart.cart)
    const [cartQte, setCartQte] = useState(0)

    useEffect(() => {
        if(cart[0]) return 
        // get cart on storage
        let cartStorageJ = localStorage.getItem('cart')
        if(cartStorageJ == null) return
        const cartStorage = JSON.parse(cartStorageJ)
        dispatch(setCart(cartStorage))
    },[])

    useEffect(() => {
        let qte = 0
        if(cart[0]) {
            cart.forEach((c: GuitarInCart) =>  qte = qte + (1 * c.qte))
        }
        setCartQte(qte)
        //put cart on storage
        localStorage.setItem('cart', JSON.stringify(cart))
    },[cart])

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
                    <Link to="/guide" style={{ color: "#ffd181" }} >Guide</Link>
                </div>
            </nav>

           {
                !disableCart ? 
                <Link to={"/cart"} className="cart">
                    <p data-testid="cart-qte">{cartQte}</p>
                    <i className={ICONS.cart}></i>
                </Link> : null
           }
        </div>
    )
}
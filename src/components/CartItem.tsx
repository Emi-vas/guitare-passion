import { useDispatch } from "react-redux";
import { GuitarInCart } from "../assets/types";
import { removeToCart, addToCart } from "../redux/shoppingCart/shoppingCart.actions";

interface Props {
    item : GuitarInCart
}

const CartItem = ({ item }: Props) => {
    const dispatch = useDispatch()

    return (
        <div className="cartItem">
            <img src={"/images/articles/" + item.img} alt={item.name} />
            <div className="rightBloc">
                <h3>{item.name}</h3>
                <div className='qteBloc'>
                    <button
                        className='btn-1'
                        onClick={()=>dispatch(removeToCart(item))}
                    >-</button>
                    <p data-testid="cart-qte">{item.qte}</p>    
                    <button
                        className='btn-1'
                        onClick={()=>dispatch(addToCart(item))}
                    >+</button>    
                </div>
                <div className="price">
                    <h3>Tarif { item.qte != 1 && "unitaire" } :</h3>
                    <p>{item.price} €</p>
                    {
                        item.qte != 1 && 
                        <>
                            <h3>({item.qte} articles) :</h3>
                            <p>{item.price * item.qte} €</p>
                        </>
                    }
                </div>
            </div>
        </div>
    );
};

export default CartItem;
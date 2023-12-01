import { useContext } from "react";
import { currencyFormatter } from "../../util/formatting";
import CartContext from "../store/CartContext";

export default function CartItem({id, name, quantity, price, itemClone}) {

    const cartCtx = useContext(CartContext); 

    function reduceItem(){
        cartCtx.removeItem(id); 
    }

    function addedItem(){
        cartCtx.addItem(itemClone);
    }
    

    return(
    <li className="cart-item">
    <p>
        {name} - <b>{quantity}</b> x {currencyFormatter.format(price)}
    </p>    
    <p className="cart-item-actions">
    <button onClick={reduceItem}>-</button>
    <span>{quantity}</span> 
    <button onClick={addedItem}>+</button>
    </p>
    </li>
    );
    }

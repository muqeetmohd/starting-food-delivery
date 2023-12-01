import { useContext } from "react"
import CartContext from "../store/CartContext"
import { currencyFormatter } from "../../util/formatting";
import Button from "./Button";
import UserProgressContext from "../store/UserProgressContext";
import Modal from "./Modal";
import CartItem from "./CartItem";

export default function Cart() {
    const cartCtx = useContext(CartContext); 
    const userProgressCtx = useContext(UserProgressContext); //used for modal, here accessing the userContext directly

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );
    

    function handleCloseCart() {
        userProgressCtx.hideCart();
    }

    function goToCheckOut() {
        userProgressCtx.showCheckout();
    }
    let goToCheckoutButton = null;
  if (cartCtx.items.length > 0) {
    goToCheckoutButton = (
      <Button onClick={goToCheckOut}>Go to Checkout</Button>
    );  
  }


    
    return (
    <Modal className = "cart" open = {userProgressCtx.progress ==='cart'}>
        <h2>Your Cart</h2>
        {/* <ul>
            {cartCtx.items.map(item => <li key = {item.id}>{item.name} - {item.quantity}</li>)}
        </ul>
        <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>
        <p className="modal-actions"> */}
        {cartCtx.items.map(item => 
        <CartItem
            key = {item.id}
            id = {item.id}
            name = {item.name}
            quantity = {item.quantity}
            price = {item.price}  
            itemClone = {item}
        />
         )}
         <p className="cart-total">{currencyFormatter.format(cartTotal)}</p>

            <Button textOnly onClick = {handleCloseCart}>Close</Button> 
            {goToCheckoutButton}    
            {/* //why cant we directly write the code here */}
    </Modal>
    );
}
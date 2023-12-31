import { useContext } from "react";
import CartContext from "./store/CartContext";
import Modal from "./UI/Modal";
import { currencyFormatter } from "../util/formatting";
import UserProgressContext from "./store/UserProgressContext";
import Input from "./UI/Input";
import Button from "./UI/Button";

export default function Checkout() {
    const cartCtx = useContext(CartContext);
    const userProgressCtx = useContext(UserProgressContext);

    const cartTotal = cartCtx.items.reduce(
        (totalPrice, item) => totalPrice + item.quantity * item.price,
        0
    );

    function handleClose(){
        userProgressCtx.hideCheckout();
    }
    
    function handleSubmission(event) {
    event.preventDefault();
    const fd = new FormData(event.target).entries();
    const customerData = Object.fromEntries(fd);

    fetch('http://localhost:2023/orders', {
        method: 'POST',
        headers: {
            'content-Type': 'application/json'
        },
        body: JSON.stringify({
            order: {
                items: cartCtx.items,
                customer: customerData
            }
        })
    }).then(() => {
       
        cartCtx.clearCart();
        userProgressCtx.orderSuccess();
    });
}

      

    return(
    <Modal open={userProgressCtx.progress === 'checkout'}> 
        <form onSubmit={handleSubmission}>
          <h2>Checkout</h2>
          <p>Total Amount: {currencyFormatter.format(cartTotal)}</p>

            <Input label="Full Name" type="text" id="name" />
                <Input label="E-Mail Address" type="email" id="email" />
                <Input label="Street" type="text" id="street" />
            <div className="control-row">
                <Input label="Postal Code" type="text" id="postal-code" />
                <Input label="City" type ="text" id="city" />
            </div>
            <p className="modal-actions">
                <Button type="button" textOnly onClick={handleClose}>Close</Button>
                <Button>Submit Order</Button>
            </p>
        </form>
    </Modal>
    );
}
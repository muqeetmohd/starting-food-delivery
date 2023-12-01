import { useContext } from "react";
import Modal from "../UI/Modal";
import CartContext from "./CartContext";
import UserProgressContext from "./UserProgressContext";
import Button from "../UI/Button";

export default function Success(){
    const cartCtx = useContext(CartContext); 
    const userProgressCtx = useContext(UserProgressContext);
    // function handleCloseCart() {
    //     userProgressCtx.hideCart();
    // }
    function handleCloseSuccess() {
        userProgressCtx.closeOrderSuccess();
    }

return(
<Modal open = {userProgressCtx.progress ==='Success'}>
    <h2>Success!</h2>
    <p>Your order was Succesfully placed. you will recive a call shortly for conformation</p>
    <Button type="button" textOnly onClick={handleCloseSuccess}>Close</Button> 
</Modal>
    );
}
import { useState } from "react";
import { createContext } from "react";

//the reason we have two exports here is because while using context, typically we would require two exports(Context and Contextprovider).
//the contextProvider is used a s a tag to wrap around components so that the context can be used in its children components.
//the Context is used to directly access the state of the context variable.

const UserProgressContext = createContext({ 
    progress:'',
    showCart:()=>{},
    hideCart:()=>{},
    showCheckout:()=>{},
    hideCheckout:()=>{},
    orderSuccess:()=>{},
    closeOrderSuccess:()=>{}
});

export function UserProgressContextProvider({children}) { //provider component and a consumer component
    const [userProgress, setUserProgress] = useState('');

    function showCart() {
        setUserProgress('cart');
    }

    function hideCart() {
        setUserProgress('');
    }

    function showCheckout() {
        setUserProgress('checkout');
    }

    function hideCheckout() {
        setUserProgress('');
    }

    function orderSuccess(){
        setUserProgress('Success');
    }

    function closeOrderSuccess(){
        setUserProgress('');
    }

    const userProgressCtx = {
        progress:userProgress,
        showCart,
        hideCart,
        showCheckout,
        hideCheckout,
        orderSuccess,
        closeOrderSuccess
    }

    return (
        <UserProgressContext.Provider value = {userProgressCtx}>
            {children}
        </UserProgressContext.Provider>
    );
}

export default UserProgressContext;
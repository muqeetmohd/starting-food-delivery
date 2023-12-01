
import Checkout from "./components/Checkout";
import Header from "./components/Header";
import Meals from "./components/Meals";
import Cart from "./components/UI/Cart";
import { CartContextProvider } from "./components/store/CartContext";
import Success from "./components/store/Success";
import { UserProgressContextProvider } from "./components/store/UserProgressContext";


function App() {
  return (
    <>
    <UserProgressContextProvider>
    <CartContextProvider>
      <Header/>
      <Meals/>
      <Cart/>
      <Checkout/>
      <Success/>
    </CartContextProvider>
    </UserProgressContextProvider>
    </>
  );
}

export default App;

import { useContext } from "react";
import { currencyFormatter } from "../util/formatting";
import Button from "./UI/Button";
import CartContext from "./store/CartContext";

export default function MealItem({ meal }) {
  const cartCtx = useContext(CartContext);

  function handleAddMealToCart() {
    cartCtx.addItem(meal);
  }

  const mealItem = cartCtx.items.find((item) => item.id === meal.id);

  return (
    <li className="meal-item">
      <article>
        <img src={`http://localhost:2023/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-itemprice">{currencyFormatter.format(meal.price)}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <Button onClick={handleAddMealToCart}>Add to cart</Button>
          {mealItem && (
            <div className="quantity-container">
              <span className="quantity-label">Quantity:</span>
              <span className="quantity">{mealItem.quantity}</span>
            </div>
          )}
        </p>
      </article>
    </li>
  );
}

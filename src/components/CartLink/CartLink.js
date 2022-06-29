import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import cart from "../../assets/cart.jpg";
import classes from "./CartLink.module.css";

export default function CartLink() {
  const number = useSelector(store => {
    return Object.values(store.cart.items).reduce((sum, number) => sum + number, 0);
  });

  return (
    <NavLink className={classes.Cart} to="/cart"> 
    Cart ({number})
    <img alt="cart"
        src={cart}
      />
    </NavLink>
  );
}
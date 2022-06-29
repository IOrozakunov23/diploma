import Header from "../components/Header/Header";
import image from "../assets/header.jpg";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { checkout } from "../redux/cartSlice";
import CartDisplay from "../components/CartDisplay/CartDisplay";
import { useEffect } from "react";

function Checkout() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { items, localId } = useSelector((store) => ({
    items: store.cart.items,
    localId: store.auth.localId,
  }));

  useEffect(() => {
    if (!localId) {
      navigate("/auth");
    }
  }, [localId, navigate]);

  function onCheckout(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const order = { items: items, ...Object.fromEntries(formData.entries()) };
    dispatch(checkout(order));
    navigate("/");
  }
  return (
    <>
      <Header className="Header" title="Checkout" image={image} >
        Please enter your information.
      </Header>

      <CartDisplay />
      <form className="Checkout" onSubmit={onCheckout}>
        <label>
          First name:
          <input type="text" name="FirstName" required />
        </label>
        <label>
          Last name:
          <input type="text" name="LastName" required />
        </label>
        <label>
          Address:
          <input type="text" name="Address" required />
        </label>
        <label>
          Phone:
          <input type="text" name="Phone" required />
        </label>

        <button className="btn-checkout">Complete the order</button>
      </form>
    </>
  );
}

export default Checkout;

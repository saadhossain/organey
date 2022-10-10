import { useContext } from "react";
import { CartContext } from "../../Layout/Main";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    return (
        <div className="my-5 min-h-[200px]">
            <h1 className="text-3xl font-bold">{cart.length ? 'Review Cart Item' : 'Cart is Empty'}</h1>
        </div>
    );
};

export default Cart;
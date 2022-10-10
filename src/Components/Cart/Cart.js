import { useContext } from "react";
import { Link } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { CartContext } from "../../Layout/Main";
import { deleteShoppingCart, removeFromDb } from "../../Utility/fakedb";
import CartItem from "../CartItem/CartItem";

const Cart = () => {
    const [cart, setCart] = useContext(CartContext);
    //Remove Single Item From Cart....
    const handleRemoveItem =(id)=>{
        const updatedCart = cart.filter(product=> product.id !== id);
        setCart(updatedCart)
        removeFromDb(id);
        return toast.error('Item Removed', {autoClose:500})
    }

    const handlePlaceOrder = () =>{
        if(cart.length){
            setCart([]);
            deleteShoppingCart();
            return toast.success('Order Placed', {autoClose:500})
        }
        else{
            return toast.error('No Product in Cart', {autoClose:500})
        }
    }
    let total = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
    }
    return (
        <div className="my-12 min-h-[200px]">
            <h1 className="text-3xl font-bold">{cart.length ? 'Review Cart Item' : 'Cart is Empty'}</h1>
            <div>
                {cart.map(cartItem=> <CartItem key={cartItem.id} product={cartItem} handleRemoveItem={handleRemoveItem}></CartItem>)}
            </div>
            <div className='mt-12'>
                <h3 className='text-3xl'>Total Price : ${total}</h3>
                <p>Price Not Includes TAX and VAT*</p>
            </div>
            <div className='mt-5 flex gap-5 justify-center'>
                <button className='text-semibold border border-[#F79817] hover:bg-[#FE9200] py-2 px-3 my-4 rounded'><Link to='/shop'>Back to Shop</Link></button>
                <button onClick={handlePlaceOrder} className='text-semibold bg-[#F79817] hover:bg-[#FE9200] py-2 px-3 my-4 rounded'>Place Order</button>
            </div>
            <ToastContainer />
        </div>
    );

};

export default Cart;
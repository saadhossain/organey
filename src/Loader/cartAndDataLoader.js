import { getStoredCart } from "../Utility/fakedb";

export const cartAndDataLoader = async()=>{
    const productData = await fetch('products.json');
    const products = await productData.json();

    const savedCart = getStoredCart();
    const initialCart = [];
    for (const id in savedCart){
        const existingProduct = products.find(product => product.id === id);
        if(existingProduct){
            const quantity = savedCart[id]
            existingProduct.quantity = quantity;
            initialCart.push(existingProduct)
        }
    }

    return {products, initialCart};
}
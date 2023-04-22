import { createContext, useState, useContext} from "react";

export const CartContext = createContext ();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const isInCart = (ItemId) => { return items.find(x => x.id === ItemId)===undefined ? false: true ;}
    const addItem = (item, qty) => { 
        if(isInCart(item.id)){
            setItems(items.map(x =>{
                return x.id === item.id ? {...x, quantity : x.quantity + qty} : x
                
            }));console.log('Entró uno');
        } else{ setItems([...items, {...item, quantity : qty}]); console.log('Entró dos')}
        console.log(items); 
        console.log(qty);
    } 
    const totalPrice = () => { return items.reduce((acumulador, producto) => acumulador += (producto.quantity * producto.price), 0)}
    const removeItem = (ItemId) => { setItems([items.filter(x => x.id !== ItemId)]); }
    const clear = () => { setItems([]) };
    const itemQuantity = () => { return items.reduce((acumulador, producto) => acumulador += producto.quantity, 0)}
    return(
        <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart, totalPrice, itemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
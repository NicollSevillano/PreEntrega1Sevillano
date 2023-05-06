import { createContext, useState, useContext} from "react";

export const CartContext = createContext ();
export const useCartContext = () => useContext(CartContext);

const CartProvider = ({children}) => {
    const [items, setItems] = useState([]);
    const isInCart = (ItemId) => { return items.find(x => x.id === ItemId)===undefined ? false: true ;}
    const itemQuantity = () => { return items.reduce((acumulador, producto) => acumulador + producto.Stock, 0)}
    const totalPrice = () => { return items.reduce((acumulador, producto) => acumulador + (producto.Stock * producto.Price), 0)}
    
    const addItem = (item, qty) => { 
        if(isInCart(item.id)){
            setItems(items.map(x =>{
                return x.id === item.id ? {...x, Stock : x.Stock + qty} : x
            }))
        } 
        else{ setItems([...items, {...item, Stock : qty}]) }
    } 
    
    const removeItem = (ItemId) => { setItems(items.filter(x => x.id !== ItemId)); }
    const clear = () => { setItems([]) };
    
    return(
        <CartContext.Provider value={{ items, addItem, removeItem, clear, isInCart, totalPrice, itemQuantity }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider;
import React, { useState, useContext } from "react";

export const CartContext = React.createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState("");
  const addItem = (item, cantidad) => {
    total();
    if (isInCart(item) === -1) {
      setCart([...cart, { ...item, quantity: cantidad }]);
    } else {
      const cantItems = [...cart];
      cantItems.forEach((i) => {
        i.id === item.id && (i.cantItems = i.cantItems + cantidad);
      });
      setCart(cantItems);
    }
  };

  const isInCart = (product) => {
    return cart?.findIndex((item) => item.id === product.id);
  };

  const clearCart = () => {
    setCart([]);
  };

  const total = () => {
    return cart.reduce((x, y) => x + y.price * y.quantity, 0);
  };

  const itemsCartWidget = () => {
    return cart.reduce((x, y) => x + y.quantity, 0);
  };

  const removeItem = (product) => {
    setCart(cart.filter((item) => item.id !== product.id));
  };

  const getUser = (form) => {
    setUser(form);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addItem,
        removeItem,
        clearCart,
        total,
        itemsCartWidget,
        getUser,
        user,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export function useAddToCart() {
  return useContext(CartContext).addItem;
}

export function useClearCart() {
  return useContext(CartContext).clearCart;
}

export function useDeleteFromCart() {
  return useContext(CartContext).removeItem;
}

export default CartContext;

// El contexto o los contextos nos ayuda a relacionar o comunicar
// un componente hijo con su componente padre
// Se lo declara como ambito global (variable global)
// const ThemeContext = React.createContext();

//ThemeContext.Provider
//Es un proveedor , es decir ,la manera de comunicar el hijo con su padre
//"Provee" informacion a los components que esten dentro de el
// puede proveer todo tipo de dato, enteros, strings, funciones, states, etc

//<ThemeContext.Provider value={}>
//</ThemeContext.Provider>

// la funcion CartContext (o el nombre que fuese) tiene una prop llamda children
// que obtiene los hijos que incluye la instancia de la funcion CartContext

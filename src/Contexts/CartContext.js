import React, { createContext, useState, useEffect } from 'react';

const CartContext = createContext();

const CartContextProvider = ({ children }) => {
    const [cartItem, setCartItem] = useState([]);
    const [flattenArray, setFlattenArray] = useState([]);

    useEffect(() => {
        flattenData(cartItem);
    }, [cartItem]);

    const flattenData = (cartItem) => {
        const newFlattenArray = cartItem.reduce((acc, curr) => {
            const existingItem = acc.findIndex(item => item.id === curr.id);
            if (existingItem !== -1) {
                acc[existingItem].data.push(curr);
            } else {
                acc.push({ id: curr.id, data: [curr] });

            }
            return acc;
        }, []);
        setFlattenArray(newFlattenArray)
    }

    const addToCart = (product) => {
        setCartItem([...cartItem, product]);
    }

    const removeFromCart = (product) => {
        const newFlattenArray = flattenArray.map((item) => {
            if (item.id === product.id && item.data.length > 1) {
                item.data.pop();
            } else if (item.id === product.id && item.data.length === 1) {
                return null;
            }
            return item;
        }).filter(Boolean);
        const flattenData = newFlattenArray.map((item) => item.data).flat(Infinity);
        setCartItem(flattenData);
        setFlattenArray(newFlattenArray);
    };

    return (
        <CartContext.Provider value={{ cartItem, flattenArray, addToCart, removeFromCart }}>
            {children}
        </CartContext.Provider>
    );
};

export { CartContext, CartContextProvider };
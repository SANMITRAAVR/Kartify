import { createContext, useEffect, useState } from "react";
import toast from "react-hot-toast";

export const CartContext = createContext();

function CartProvider({ children }) {

  // Load Cart
  const [cartItems, setCartItems] = useState(() => {

    const savedCart =
      localStorage.getItem("kartify-cart");

    return savedCart ? JSON.parse(savedCart) : [];
  });

  // Load User
  const [user, setUser] = useState(() => {

    const savedUser =
      localStorage.getItem("kartify-user");

    return savedUser ? JSON.parse(savedUser) : null;
  });

  // Sidebar State
  const [isCartOpen, setIsCartOpen] =
    useState(false);

  // Checkout Modal State
  const [isCheckoutOpen, setIsCheckoutOpen] =
    useState(false);

  // Auth Modal State
  const [isAuthOpen, setIsAuthOpen] =
    useState(false);

  // Save Cart
  useEffect(() => {

    localStorage.setItem(
      "kartify-cart",
      JSON.stringify(cartItems)
    );

  }, [cartItems]);

  // Save User
  useEffect(() => {

    localStorage.setItem(
      "kartify-user",
      JSON.stringify(user)
    );

  }, [user]);

  // Add To Cart
  const addToCart = (product) => {

    const existingItem = cartItems.find(
      (item) => item.id === product.id
    );

    if (existingItem) {

      const updatedCart = cartItems.map((item) =>
        item.id === product.id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item
      );

      setCartItems(updatedCart);

    } else {

      setCartItems([
        ...cartItems,
        {
          ...product,
          quantity: 1,
        },
      ]);

    }

    toast.success(`${product.name} added to cart`);
  };

  // Increase Quantity
  const increaseQuantity = (id) => {

    const updatedCart = cartItems.map((item) =>
      item.id === id
        ? {
            ...item,
            quantity: item.quantity + 1,
          }
        : item
    );

    setCartItems(updatedCart);
  };

  // Decrease Quantity
  const decreaseQuantity = (id) => {

    const updatedCart = cartItems
      .map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity - 1,
            }
          : item
      )
      .filter((item) => item.quantity > 0);

    setCartItems(updatedCart);
  };

  // Remove Item
  const removeFromCart = (id) => {

    const updatedCart = cartItems.filter(
      (item) => item.id !== id
    );

    setCartItems(updatedCart);

    toast.error("Item removed from cart");
  };

  // Clear Cart
  const clearCart = () => {
    setCartItems([]);
  };

  // Login
  const login = (userData) => {

    setUser(userData);

    toast.success("Login successful");
  };

  // Logout
  const logout = () => {

    setUser(null);

    toast.success("Logged out");
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,

        user,
        login,
        logout,

        isCartOpen,
        setIsCartOpen,

        isCheckoutOpen,
        setIsCheckoutOpen,

        isAuthOpen,
        setIsAuthOpen,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
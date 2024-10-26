import { createContext, useContext, useState } from "react";

interface ShoppingCartProvider {
  children: React.ReactNode;
}
interface cartItem {
  id: number;
  qty: number;
}

interface ShoppingCartContext {
  cartItems: cartItem[];
  handleIncreseProductQty: (id: number) => void;
  hanleDecProductQty: (id: number) => void;
  getProductQty: (id: number) => number;
  handleRemoveProduct: (id: number) => void;
  CartQty: number;
}
export const ShoppingCartContext = createContext<ShoppingCartContext>(
  {} as ShoppingCartContext
);

// eslint-disable-next-line react-refresh/only-export-components
export const useShoppingCartContext = () => {
  return useContext(ShoppingCartContext);
};

export function ShoppingCartProvider({ children }: ShoppingCartProvider) {
  const [cartItems, setCartItems] = useState<cartItem[]>([]);

  const handleIncreseProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem == null) {
        return [...currentItems, { id: id, qty: 1 }];
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty++ };
          } else {
            return item;
          }
        });
      }
    });
  };

  const hanleDecProductQty = (id: number) => {
    setCartItems((currentItems) => {
      const selectedItem = currentItems.find((item) => item.id == id);
      if (selectedItem?.qty === 1) {
        return currentItems.filter((item) => item.id !== id);
      } else {
        return currentItems.map((item) => {
          if (item.id == id) {
            return { ...item, qty: item.qty - 1 };
          } else {
            return item;
          }
        });
      }
    });
  };

  const getProductQty = (id: number) => {
    return cartItems.find((item) => item.id == id)?.qty || 0;
  };

  const handleRemoveProduct = (id: number) => {
    setCartItems((currentItems) =>
      currentItems.filter((item) => item.id != id)
    );
  };
  const CartQty = cartItems.reduce((totalQty, item) => totalQty + item.qty, 0);

  return (
    <ShoppingCartContext.Provider
      value={{
        cartItems,
        handleIncreseProductQty,
        hanleDecProductQty,
        getProductQty,
        handleRemoveProduct,
        CartQty,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
}

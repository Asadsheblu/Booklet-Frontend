import { useContext, useState, useEffect, useCallback } from 'react';
import { useQuery } from 'react-query';
import { AuthContext } from '../Provider/AuthProvider';

const useCart = () => {
  const { user } = useContext(AuthContext);

  const [cart, setCart] = useState([]);

  const increaseQuantity = useCallback((itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  }, []);

  const decreaseQuantity = useCallback((itemId) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === itemId
          ? { ...item, quantity: Math.max(item.quantity - 1, 0) }
          : item
      )
    );
  }, []);

  const { refetch, data: fetchedCart = [] } = useQuery({
    queryKey: ['carts', user?.email],
    queryFn: async () => {
      const response = await fetch(`http://localhost:5000/carts?email=${user?.email}`);
      return response.json();
    },
  });

  useEffect(() => {
    if (fetchedCart.length > 0 && JSON.stringify(cart) !== JSON.stringify(fetchedCart)) {
      setCart(fetchedCart);
    }
  }, [fetchedCart, cart]);

  const getTotalPrice = () => {
    return cart.reduce((acc, item) => {
      const itemPrice = parseFloat(item.price);
      const itemQuantity = item.quantity || 1; // Default to 1 if quantity is undefined

      if (!isNaN(itemPrice) && !isNaN(itemQuantity)) {
        return acc + itemPrice * itemQuantity;
      }

      console.warn(`Invalid price or quantity for item: ${item.name}. Skipping.`);
      return acc;
    }, 0);
  };

  const total = getTotalPrice();
  const formattedTotalPrice = total.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2,
  });

  return [cart, refetch, increaseQuantity, decreaseQuantity, formattedTotalPrice];
};

export default useCart;

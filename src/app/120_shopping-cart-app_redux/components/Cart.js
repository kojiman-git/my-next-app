'use client';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart } from '../features/cart/cartSlice';

const Cart = () => {
  const dispatch = useDispatch();
  const items = useSelector(state => state.cart.items);

  const totalPrice = items.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>カート</h2>
      {items.length === 0 ? (
        <p>カートは空です</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.name} - ¥{item.price}
              <button onClick={() => dispatch(removeFromCart(item.id))}>削除</button>
            </li>
          ))}
        </ul>
      )}
      <h3>合計金額: ¥{totalPrice}</h3>
    </div>
  );
};

export default Cart;
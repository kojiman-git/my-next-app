'use client';

import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';

const products = [
  { id: 1, name: '商品A', price: 1000 },
  { id: 2, name: '商品B', price: 1500 },
  { id: 3, name: '商品C', price: 2000 },
];

const ProductList = () => {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>商品一覧</h2>
      <ul>
        {products.map(product => (
          <li key={product.id}>
            {product.name} - ¥{product.price}
            <button onClick={() => dispatch(addToCart(product))}>カートに追加</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
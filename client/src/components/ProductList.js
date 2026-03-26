import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../features/cart/cartSlice';
import { Button } from '@mui/material';

const products = [
  { id: 1, name: "Smartphone", price: 299.99 },
  { id: 2, name: "Tablet", price: 449.99 },
  { id: 3, name: "Smartwatch", price: 199.99 }
];

export default function ProductList() {
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Products</h2>
      {products.map(p => (
        <div key={p.id}>
          {p.name} - ${p.price}
          <Button
            variant="contained"
            onClick={() => dispatch(addToCart({ ...p, quantity: 1 }))}
          >
            Add
          </Button>
        </div>
      ))}
    </div>
  );
}
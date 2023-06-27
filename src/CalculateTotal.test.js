import { render, screen } from '@testing-library/react';
import { calculateTotal } from './App'; 

test('calculateTotal calculates the correct total amount', () => {
  // Create a sample items array
  const items = [
    { name: 'Item 1', quantity: 2, price: 10 },
    { name: 'Item 2', quantity: 3, price: 15 },
    { name: 'Item 3', quantity: 1, price: 5 },
  ];

  // Call the calculateTotal function
  const total = calculateTotal(items);

  expect(total).toBe(65); 
});

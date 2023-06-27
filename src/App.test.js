import { render, screen } from '@testing-library/react';
import{ App} from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});

// test('calculateTotal calculates the correct total amount', () => {
//   // Create a sample items array
//   const items = [
//     { name: 'Item 1', quantity: 2, price: 10 },
//     { name: 'Item 2', quantity: 3, price: 15 },
//     { name: 'Item 3', quantity: 1, price: 5 },
//   ];

//   // Call the calculateTotal function
//   const total = calculateTotal(items);

//   // Assert that the total is calculated correctly
//   expect(total).toBe(65); // Expected total: 2*10 + 3*15 + 1*5 = 20 + 45 + 5 = 65
// });

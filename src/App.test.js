import { render, screen, fireEvent } from '@testing-library/react';
import Invoice from './App';
import calculateTotal from './App';

describe("Invoice component", () => {
  test("calculateTotal calculates the correct total amount", () => {
    render(<Invoice />);
    
    // Add test data
    const item1 = screen.getByTestId("item-input-1");
    const quantity1 = screen.getByTestId("quantity-input-1");
    const price1 = screen.getByTestId("price-input-1");
    const addItemButton = screen.getByLabelText("Add Item");

    // Set values for item 1
    fireEvent.change(item1, { target: { value: "Item 1" } });
    fireEvent.change(quantity1, { target: { value: "2" } });
    fireEvent.change(price1, { target: { value: "10" } });

    // Add item 1
    fireEvent.click(addItemButton);

    // Set values for item 2
    const item2 = screen.getByTestId("item-input-2");
    const quantity2 = screen.getByTestId("quantity-input-2");
    const price2 = screen.getByTestId("price-input-2");

    fireEvent.change(item2, { target: { value: "Item 2" } });
    fireEvent.change(quantity2, { target: { value: "3" } });
    fireEvent.change(price2, { target: { value: "15" } });

    
    const total = calculateTotal();

   
    expect(total).toBe(65);
  });
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

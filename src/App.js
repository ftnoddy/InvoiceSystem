import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faTwitter, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

function Invoice() {
  const [customerName, setCustomerName] = useState("");
  const [invoiceDate, setInvoiceDate] = useState("");
  const [items, setItems] = useState([{ name: "", quantity: 0, price: 0 }]);
  const taxRate = 0.1;

  const addItem = () => {
    setItems([...items, { name: "", quantity: 0, price: 0 }]);
  };

  const removeItem = (index) => {
    const newItems = [...items];
    newItems.splice(index, 1);
    setItems(newItems);
  };

  const handleItemChange = (index, event) => {
    const { name, value } = event.target;
    const newItems = [...items];
    newItems[index][name] = value;
    setItems(newItems);
  };

  const calculateTotal = () => {
    return items.reduce((total, item) => {
      return total + item.quantity * item.price;
    }, 0);
  };
  const calculateTax = () => {
    return calculateTotal() * taxRate;
  };

  const calculateTotalWithTax = () => {
    return calculateTotal() + calculateTax();
  };

  return (
    <div className="invoice">
    <img src="" alt="Company Logo" />
      <h1>Invoice</h1>
      <div className="input-group">
        <label>Customer Name:</label>
        <input
          type="text"
          value={customerName}
          onChange={(e) => setCustomerName(e.target.value)}
        />
      </div>
      <div className="input-group">
        <label>Invoice Date:</label>
        <input
          type="date"
          value={invoiceDate}
          onChange={(e) => setInvoiceDate(e.target.value)}
        />
      </div>
      <table>
        <thead>
          <tr>
            <th>Item Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Total</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
            <td>
        <input
          type="text"
          name="name"
          value={item.name}
          onChange={(e) => handleItemChange(index, e)}
          data-testid={`item-input-${index + 1}`} // Update the data-testid attribute
        />
      </td>
      <td>
        <input
          type="number"
          name="quantity"
          value={item.quantity}
          onChange={(e) => handleItemChange(index, e)}
          data-testid={`quantity-input-${index + 1}`} // Update the data-testid attribute
        />
      </td>
      <td>
        <input
          type="number"
          name="price"
          value={item.price}
          onChange={(e) => handleItemChange(index, e)}
          data-testid={`price-input-${index + 1}`} // Update the data-testid attribute
        />
      </td>
      <td>${item.quantity * item.price}</td>
      <td>
        <button
          className="remove-btn"
          onClick={() => removeItem(index)}
        >
          Remove
        </button>
      </td>
    </tr>
  ))}
</tbody>
<tfoot>
  <tr>
    <td colSpan="3">
      <button className="add-btn" onClick={addItem} aria-label="Add Item">
        Add Item
      </button>
    </td>
            <td>Total:</td>
            <td>${calculateTotal()}</td>
          </tr>
          <tr>
            <td colSpan="3"></td>
            <td>Tax ({(taxRate * 100).toFixed(2)}%):</td>
            <td>${calculateTax().toFixed(2)}</td>
          </tr>
          <tr>
            <td colSpan="3"></td>
            <td>
              <strong>Total:</strong>
            </td>
            <td>
              <strong>${calculateTotalWithTax()}</strong>
            </td>
          </tr>
        </tfoot>       
      </table>
      <footer>
      <div class="billing-info">
    <div>BILLING TO:</div>
    <div>Customer Name</div>
    <div>Ph No:</div>
  </div>
  <div class="project-info">
    <div>PROJECT NAME:</div>
    <div>Project Name Here</div>
    <div>ADDRESS:</div>
  </div>
        <div className="social-icons">
          <a href="https://www.facebook.com/codepartner?mibextid=ZbWKwL"><FontAwesomeIcon icon={faFacebook} /></a>
          <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} /></a>
          <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} /></a>
          <a href="https://www.linkedin.com"><FontAwesomeIcon icon={faLinkedin} /></a>
        </div>
        <div className="contact-info">
          <a href="mailto:info@example.com">https://codepartner.in/</a>
          <a href="https://www.example.com">info@codepartner.in</a>
        </div>
      </footer>
    </div>
  );
  
}

export default Invoice;

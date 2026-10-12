import { useState } from "react";

function OrderPage() {
  const [form, setForm] = useState({ name: "", email: "", qty: 1 });
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);

  function validate(v) {
    const e = {};
    if (v.name.trim().length < 2) {
      e.name = "Name too short";
    } else if (/^\d+$/.test(v.name.trim())) {
      e.name = "Name cannot contain only numbers";
    } else if (/\d/.test(v.name)) {
      e.name = "Name cannot contain numbers";
    }

    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(v.email)) {
      e.email = "Enter a valid email";
    }
    if (Number(v.qty) < 1) e.qty = "Qty must be ≥ 1";
    return e;
  }

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const found = validate(form); //call the validate function
    setErrors(found); //saves errors in state 
    if (Object.keys(found).length === 0) {
      setDone(true);
    }
  }

  // Success message
  if (done) {
    return (
      <p className="success-message">
        Thanks, {form.name}! Order received.
      </p>
    );
  }

  // Form
  return (
    <div className="order-container">
      <h2>Place Order</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your Name"
          />
          {errors.name && <span className="error">{errors.name}</span>}
        </div>

        <div className="form-group">
          <input
            name="email"
            value={form.email}
            onChange={handleChange}
            placeholder="Email"
          />
          {errors.email && <span className="error">{errors.email}</span>}
        </div>

        <div className="form-group">
          <input
            name="qty"
            type="number"
            value={form.qty}
            onChange={handleChange}
            placeholder="Quantity"
          />
          {errors.qty && <span className="error">{errors.qty}</span>}
        </div>

        <button type="submit">Place order</button>
      </form>
    </div>
  );
}

export default OrderPage;


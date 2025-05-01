import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Donate.css';

function Donate() {
  const [amount, setAmount] = useState('');
  const navigate = useNavigate();

  const handlePayment = async () => {
    if (!amount || isNaN(amount) || amount < 1) {
      alert("Please enter a valid donation amount.");
      return;
    }

    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onerror = () => alert("Failed to load Razorpay.");
    script.onload = async () => {
      const options = {
        key: "rzp_test_FrjKMrNcfdibiO",
        currency: "INR",
        amount: amount * 100, // in paise
        name: "Vanshu Foundation",
        description: "Donation",
        handler: async function (response) {
          // 1. Alert success
          alert("Payment successful! ID: " + response.razorpay_payment_id);

          // 2. Send to backend (optional)
          await fetch('http://localhost:8000/api/donations/', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              amount: amount,
              razorpay_payment_id: response.razorpay_payment_id
            })
          });

          // 3. Redirect to thank-you page
          navigate('/thank-you');
        },
        prefill: {
          name: "",
          email: "",
          contact: ""
        }
      };

      const paymentObject = new window.Razorpay(options);
      paymentObject.open();
    };
    document.body.appendChild(script);
  };

  return (
    <div className="donate-container">
      <div className="donate-hero">
        <div className="donate-overlay">
          <h1>Support Vanshu Foundation</h1>
          <p>Your donation can change a life. Be the reason someone smiles today.</p>
          <div className="donation-input">
            <input
              type="number"
              placeholder="Enter amount in ₹"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
            <button className="donate-now-btn" onClick={handlePayment}>Donate Now</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Donate;

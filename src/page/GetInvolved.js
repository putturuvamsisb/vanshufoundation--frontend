import React from "react";
import "../styles/GetInvolved.css";
import { useNavigate } from "react-router-dom";

function loadRazorpayScript() {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = "https://checkout.razorpay.com/v1/checkout.js";
    script.onload = () => resolve(true);
    script.onerror = () => resolve(false);
    document.body.appendChild(script);
  });
}

async function handleDonate() {
  const res = await loadRazorpayScript();
  if (!res) {
    alert("Razorpay SDK failed to load. Are you online?");
    return;
  }

  const options = {
    key: "rzp_test_FrjKMrNcfdibiO", 
    amount: 50000,
    currency: "INR",
    name: "Vanshu Foundation",
    description: "Donation",
    image: "/favicon.ico",
    handler: function (response) {
      alert("Thank you for your donation!");
    },
    prefill: {
      name: "Vanshu Donor",
      email: "donor@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#0277bd",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
}

function GetInvolved() {
  const navigate = useNavigate();

  const handleVolunteerClick = () => {
    navigate("/volunteer");
  };

  const handleContactClick = () => {
    navigate("/contact");
  };

  return (
    <div className="getinvolved-page">
      <h1>Be the Change</h1>
      <p>Get involved in transforming lives through volunteering, partnerships, or donations.</p>

      <div className="involvement-options">
        <div className="involve-card">
          <h2>Volunteer with Us</h2>
          <p>Join our mission on the ground. Teach, counsel, and uplift lives in local communities.</p>
          <button onClick={handleVolunteerClick}>Apply Now</button>
        </div>

        <div className="involve-card">
          <h2>Partner with Us</h2>
          <p>Partner your brand or institution with our cause and make social responsibility impactful.</p>
          <button onClick={handleContactClick}>Contact</button>
        </div>

        <div className="involve-card">
          <h2>Donate Now</h2>
          <p>Your contribution brings smiles, education, and a better tomorrow for the underprivileged.</p>
          <button onClick={handleDonate}>Donate ₹500</button>
        </div>
      </div>
    </div>
  );
}

export default GetInvolved;

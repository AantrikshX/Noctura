import React, { useState } from "react";
import Shop from "./shop";
import { useNavigate } from "react-router-dom";

const Billing = () => {
  const navigate = useNavigate();

  // 🧠 Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    note: "",
  });

  const [isSubmitted, setIsSubmitted] = useState(false); // toggles form/receipt
  const [loading, setLoading] = useState(false);

  // 🧩 Update input values dynamically
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("http://us.xibots.store:13002/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Enter Valid Details! Please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Server error. Please check your backend connection.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="relative bill text-[#2E2E2E]">
      {/* Blurred Shop */}
      <div className="blur-sm pointer-events-none">
        <Shop />
      </div>

      {/* Fading overlay */}
      <div className="absolute top-0 left-0 w-full h-24 bg-linear-to-b from-[#FFF8E7] to-transparent" />

      {/* ======= FORM CONTAINER ======= */}
      <div className="formcontainer absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 max-sm:top-[30%] max-sm:translate-y-0 max-sm:px-2 w-full">
  <div className="
    bg-[#FFF8E7] 
    flex flex-col 
    gap-6 
    backdrop-blur-2xl 
    border 
    px-6 
    py-5 
    border-[#e8bf4e] 
    shadow-[0_4px_30px_rgba(0,0,0,0.1)] 
    rounded-2xl 
    w-[90%]
    max-w-[400px]
    mx-auto
    max-sm:gap-4
  ">


          {/* Header */}
          <div className="flex items-center justify-between">
            <h1 className="text-4xl font-semibold">Billing</h1>
            <button
              onClick={() => navigate("/shop")}
              className="text-xl cursor-pointer font-bold"
            >
              X
            </button>
          </div>

          {/* ======= CONDITIONAL VIEW ======= */}
          {!isSubmitted ? (
            // ---------------- FORM VIEW ----------------
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-xl" htmlFor="name">Full Name</label>
                <input
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-2"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xl" htmlFor="email">Email</label>
                <input
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-2"
                  placeholder="Enter your email address"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xl" htmlFor="phone">Mobile</label>
                <input
                  id="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-2"
                  placeholder="Enter your mobile number"
                  required
                />
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xl" htmlFor="service">Your Service</label>
                <select
                  id="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="border border-black rounded-xl px-4 py-2 bg-[#FFF8E7] text-gray-800 focus:outline-none focus:ring-2 focus:ring-black/40 transition-all cursor-pointer"
                  required
                >
                  <option value="">Select your service</option>
                  <option value="Portfolio Website">Portfolio Website</option>
                  <option value="E-commerce Website">E-commerce Website</option>
                  <option value="Custom Website">Custom Website</option>
                </select>
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-xl" htmlFor="note">Note</label>
                <textarea
                  id="note"
                  value={formData.note}
                  onChange={handleChange}
                  className="border rounded-xl px-4 py-2"
                  placeholder="Anything you want us to know?"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="bg-[#2E2E2E] cursor-pointer hover:bg-black text-xl text-white font-medium py-2 rounded shadow-md hover:shadow-lg transition-all duration-300 disabled:opacity-50"
              >
                {loading ? "Submitting..." : "Submit"}
              </button>
            </form>
          ) : (
            // ---------------- RECEIPT VIEW ----------------
            <div className="flex flex-col gap-4 text-lg">
              <h2 className="text-3xl font-semibold text-center text-[#2E2E2E]">🧾 Receipt</h2>
              <p className="text-center text-green-700 font-medium">
                  ✅ Your request has been submitted successfully. <br />
                 We'll contact you soon regarding your service.
                </p>
              <div className="border-t border-gray-300 pt-4">
                <p><strong>Name:</strong> {formData.name}</p>
                <p><strong>Email:</strong> {formData.email}</p>
                <p><strong>Phone:</strong> {formData.phone}</p>
                <p><strong>Service:</strong> {formData.service}</p>
                <p><strong>Note:</strong> {formData.note || "—"}</p>
              </div>
              <button
                onClick={() => navigate("/shop")}
                className="mt-4 bg-[#2E2E2E] text-white py-2 rounded-lg hover:bg-black transition-all duration-300"
              >
                Back to Shop
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Billing;

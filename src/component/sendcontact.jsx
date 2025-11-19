import React, { useState } from "react";

const SendContact = () => {
  const [hovered, setHovered] = useState(false);
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(""); // for feedback (success/error)

  // Function to send email to backend
  const handleSubmit = async () => {
    if (!email.trim()) {
      setMessage("Please enter an email.");
      return;
    }

    try {
      const response = await fetch("/api/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (response.ok) {
           setMessage("✅ We will contact you soon");
           setEmail("");
            setHovered(false);

            // ⏳ Clear message after 3 seconds
            setTimeout(() => {
           setMessage("");
           }, 3000);
    } else {
        setMessage("❌ Failed to send. Try again!");
      }
    } catch (err) {
      console.error(err);
      setMessage("⚠️ Server not responding.");
    }
  };

  return (
    <div className="flex flex-col items-center ">
      {/* Input + Button wrapper */}
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onTouchStart={() => setHovered(true)}
        className="flex w-[220px] h-12 max-sm:h-11 items-center relative justify-between border-2 border-black bg-white rounded-full transition-all duration-700 ease-in-out"
      >
        {/* Text / Input section */}
        <div className=" transition-all duration-1000 ease-in-out">
          {!hovered ? (
            <h1 className="textpart ml-4 text-xl font-medium ">Connect Now</h1>
          ) : (
            <input
              type="email"
              placeholder="Your E-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="textpart pl-14  w-full bg-[#FFF8E7] absolute h-full top-0 outline-none text-[17px] font-medium rounded-full placeholder-black transition-opacity duration-1000"
              autoFocus
            />
          )}
        </div>

        {/* Button Part */}
        <div
          onClick={handleSubmit}
          className={`absolute right-0 flex items-center cursor-pointer justify-center w-12 h-12 max-sm:w-10 max-sm:h-10 bg-black rounded-full transition-all duration-1000 ease-in-out ${
            hovered ? "right-43 max-sm:right-44 "  : "right-0"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            className="text-white"
          >
            <path
              d="M16.7205 1.71342C16.7464 1.21441 16.3628 0.788907 15.8638 0.763042L7.73185 0.341543C7.23283 0.315678 6.80733 0.699243 6.78147 1.19826C6.7556 1.69728 7.13917 2.12278 7.63818 2.14864L14.8666 2.52331L14.4919 9.7517C14.466 10.2507 14.8496 10.6762 15.3486 10.7021C15.8476 10.7279 16.2731 10.3444 16.299 9.84536L16.7205 1.71342ZM1.36751 15.9101L16.4227 2.33861L15.2112 0.994569L0.155929 14.566L1.36751 15.9101Z"
              fill="currentColor"
            />
          </svg>
        </div>
      </div>

      {/* Feedback message */}
      {message && (
        <p className="text-sm font-medium text-center text-gray-700">
          {message}
        </p>
      )}
    </div>
  );
};

export default SendContact;

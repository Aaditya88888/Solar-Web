import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function CallBackSection() {
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRequestCallBack = () => {
    if (!phoneNumber.trim()) {
      toast.error("Please enter a valid phone number");
      return;
    }

    console.log("Phone Number Submitted:", phoneNumber);

    toast.success("Request received! We'll call you back shortly.");
    setPhoneNumber("");
  };

  return (
    <div className="rounded-2xl bg-white shadow-lg p-4 mb-3 flex flex-col md:flex-row items-center justify-between gap-4 mt-10">
      {/* Left Text Section */}
      <div className="text-center md:text-left">
        <p className="text-xs text-gray-800 font-semibold uppercase">
          Call us now
        </p>
        <h2 className="text-lg font-bold text-green-700">
          Free Consultation by <br />
          Calling <span className="text-gray-800">+91 9310259325</span>
        </h2>
      </div>

      {/* Input + Button Section */}
      <div className="flex flex-col sm:flex-row items-center w-full md:w-auto gap-2">
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          placeholder="Enter your number"
          className="rounded-xl px-3 py-1.5 border text-black font-bold border-gray-300 w-full sm:w-56 text-sm"
        />
        <button
          onClick={handleRequestCallBack}
          className="bg-green-800 text-white text-sm font-medium px-3 py-1.5 rounded-xl hover:bg-green-700 transition w-full sm:w-auto"
        >
          Call Me Back
        </button>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

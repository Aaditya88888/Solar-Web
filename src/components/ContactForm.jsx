import React, { useState } from "react";
import solarg from "../Images/SolarChahaFront.webp";
import axios from "axios";
import Loader from "../Loader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [billFile, setBillFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("email", email);
      formData.append("phoneNo", phoneNo);
      formData.append("message", message);
      formData.append("billFile", billFile);

      const { data } = await axios.post(
        "https://solar-6.onrender.com/api/senddata",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      toast.success("Message sent successfully!");
      console.log(data);
    } catch (error) {
      toast.error("Something went wrong. Try again.");
      console.error(error.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="bg-gray-900 px-4 sm:px-8 md:px-16 py-20 -mt-16 About max-h-auto">
      <ToastContainer position="top-right" autoClose={3000} />

      {/* Heading */}
      <div className="text-center max-w-4xl mx-auto mb-12 -mt-[50px] px-4">
        <h2 className="text-xl md:text-3xl About text-white leading-snug About1">
          Bijli ka bill bhejiye and Solar Chacha se jaaniye <br />
          apne rooftop ke liye Best Solar Solution
        </h2>
      </div>

      {/* Main Container */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-12 px-4">
        {/* Form Section */}
        <form
          onSubmit={handelSubmit}
          className="bg-white w-full md:w-2/3 lg:w-1/2 rounded-2xl p-6 sm:p-8 flex flex-col gap-5 shadow"
          encType="multipart/form-data"
        >
          {/* Name & Phone */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="text"
              placeholder="Your Name"
              required
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="flex-1 w-full rounded-2xl py-3 px-5 placeholder-gray-500 focus:outline-none bg-white shadow"
            />
            <input
              type="tel"
              placeholder="Your Phone Number"
              required
              value={phoneNo}
              onChange={(e) => setPhone(e.target.value)}
              className="flex-1 w-full rounded-2xl py-3 px-5 placeholder-gray-500 focus:outline-none bg-white shadow"
            />
          </div>

          {/* Email & File Upload */}
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              placeholder="Your Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 w-full rounded-2xl py-3 px-5 placeholder-gray-500 focus:outline-none bg-white shadow"
            />

            <div className="flex-1 w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Upload Your Bijli Bill
              </label>
              <input
                type="file"
                onChange={(e) => setBillFile(e.target.files[0])}
                className="w-full py-2 px-3 bg-white rounded-xl shadow focus:outline-none"
              />
            </div>
          </div>

          {/* Message */}
          <textarea
            rows={4}
            placeholder="Your Message"
            required
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="rounded-2xl py-3 px-5 placeholder-gray-500 resize-none focus:outline-none bg-white shadow w-full"
          ></textarea>

          {/* Submit Button */}
          <button
            type="submit"
            className="bg-[#E50C0C] text-white font-bold rounded-full py-4 px-8 w-full flex items-center justify-center gap-2 hover:bg-green-700 transition"
          >
            {loading ? <Loader /> : "SUBMIT NOW"}
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>

        {/* Contact Info Section */}
        <section className="w-full md:w-1/2 flex flex-col justify-start items-center md:items-start gap-6 text-center md:text-left">
          <div className="flex flex-col gap-4 text-lg text-white">
            <p className="flex items-center justify-center md:justify-start gap-3">
              <i className="fas fa-phone-alt text-green-800"></i>
              <a href="tel:+91 9310259325">+91 9310259325</a>
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <i className="fas fa-map-marker-alt text-green-800"></i>
              53, Ramte Ram Rd, Ekta Vihar, Arjun Nagar, <br />
              Nai Basti Dundaher Ghaziabad, <br />
              Uttar Pradesh 201001
            </p>
            <p className="flex items-center justify-center md:justify-start gap-3">
              <i className="fas fa-envelope text-green-800"></i>
              <a
                className="font-semibold hover:text-[#3a8e3a]"
                href="mailto:sales@divypower.com"
              >
                sales@divypower.com
              </a>
            </p>
          </div>

          <div className="mt-4">
            <img
              src={solarg}
              alt="Solar Chacha"
              className="max-w-[250px] w-full"
            />
          </div>
        </section>
      </div>
    </main>
  );
};

export default ContactForm;

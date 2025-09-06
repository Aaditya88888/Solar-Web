import React, { useState } from 'react';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CareerForm() {
  const [FirstName, setFirstName] = useState('');
  const [LastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [Phone, setPhone] = useState('');
  const [Position, setPosition] = useState('');
  const [message, setMessage] = useState('');
  const [CV, setCv] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("FirstName", FirstName);
      formData.append("LastName", LastName);
      formData.append("email", email);
      formData.append("Phone", Phone);
      formData.append("Position", Position);
      formData.append("message", message);
      formData.append("PortfolioLink", "N/A"); // optional field
      if (CV) {
        formData.append("CV", CV);
      }

      await axios.post(`https://solar-6.onrender.com/api/CareerApi`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      toast.success('Message sent successfully!');
      setFirstName('');
      setLastName('');
      setEmail('');
      setPhone('');
      setPosition('');
      setMessage('');
      setCv(null);
    } catch (error) {
      toast.error('Something went wrong. Try again.');
    }
    setLoading(false);
  };

  return (
    <div className="bg-gradient-to-br from-green-50 to-white py-16 px-4 sm:px-6 lg:px-8 min-h-screen">
      <div className="max-w-3xl mx-auto bg-white p-6 sm:p-10 rounded-2xl shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6 text-gray-800 text-center">
          Get a chance to Work with Us.
        </h2>

        <form className="space-y-5" onSubmit={handleSubmit}>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
            <input
              type="text"
              value={FirstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
            <input
              type="text"
              value={LastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="w-full">
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone No</label>
              <input
                type="tel"
                value={Phone}
                onChange={(e) => setPhone(e.target.value)}
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Position</label>
            <select
              value={Position}
              onChange={(e) => setPosition(e.target.value)}
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="">Select a position</option>
              <option value="frontend">Sales executive </option>
              <option value="backend">Sales manager </option>
              <option value="fullstack">Operation manager </option>
              <option value="designer">Service engineer </option>
              <option value="frontend">Service manager </option>
              <option value="backend">Pre-sales executive </option>
              <option value="fullstack">HR Manager  </option>
              <option value="designer">Purchase Manager </option>
            </select>
          </div>

          <div>
            <textarea
              rows="5"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Tell us something about yourself"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
            ></textarea>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Upload your CV (PDF, DOCX)</label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={(e) => setCv(e.target.files[0])}
              className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4
                file:rounded-lg file:border-0
                file:text-sm file:font-semibold
                file:bg-blue-50 file:text-blue-700
                hover:file:bg-blue-100"
            />
          </div>

          <div>
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-green-700 text-white font-semibold py-2 px-4 rounded-lg hover:bg-blue-700 transition duration-200"
            >
              {loading ? 'Submitting...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

export default CareerForm;

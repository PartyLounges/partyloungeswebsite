import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const GetQuoteSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    pax: '',
    look: '',
    venue: '',
    seating: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState({
    visible: false,
    type: 'success',
    message: ''
  });

  useEffect(() => {
    if (!toast.visible) {
      return undefined;
    }

    const timeoutId = window.setTimeout(() => {
      setToast((prev) => ({ ...prev, visible: false }));
    }, 4500);

    return () => window.clearTimeout(timeoutId);
  }, [toast.visible]);

  const showToast = (type, message) => {
    setToast({
      visible: true,
      type,
      message
    });
  };

  const handleChange = (event) => {
    const { id, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formData.name.trim() || !formData.phone.trim()) {
      showToast('error', 'Please fill in your name and phone number.');
      return;
    }

    setIsSubmitting(true);

    try {
      const response = await fetch('/send-email.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      const data = await response.json().catch(() => ({
        status: 'error',
        message: 'Invalid server response'
      }));

      if (response.ok && data.status === 'success') {
        showToast('success', 'Request received successfully. Our team will call you back soon.');
        setFormData({
          name: '',
          phone: '',
          date: '',
          pax: '',
          look: '',
          venue: '',
          seating: ''
        });
      } else {
        const requestId = data.request_id ? ` Request ID: ${data.request_id}` : '';
        const failureMessage = data.message || 'Failed to send your request. Please try again.';
        console.error('Quote request failed:', {
          status: response.status,
          requestId: data.request_id || null,
          serverMessage: data.message || null,
          payload: formData
        });
        showToast('error', `${failureMessage}${requestId}`);
      }
    } catch (error) {
      console.error('Failed to submit quote request:', error);
      showToast('error', 'Unable to submit right now. Please try again shortly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      className="flex flex-col lg:flex-row border-t-2 border-gray-300"
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
    >
      {toast.visible && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed top-4 right-4 z-[100] max-w-sm rounded-md px-4 py-3 shadow-lg border ${
            toast.type === 'success'
              ? 'bg-green-50 text-green-900 border-green-300'
              : 'bg-red-50 text-red-900 border-red-300'
          }`}
        >
          <p className="font-red-hat-display text-sm leading-relaxed">{toast.message}</p>
        </div>
      )}

      {/* Left Side: Contact hello */}
      <motion.div
        className="bg-theme-cream-brown p-6 rounded-lg lg:w-1/2 flex flex-col justify-center px-[5%] md:px-[8%] lg:px-[10%] py-4 border border-white"
        initial={{ opacity: 0, x: -24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <p className="text-lg font-red-hat-display mb-6 leading-relaxed">
          We cannot wait to work with you on your next event. Get in touch today and we will get back to you as soon as possible.
        </p>
        <ul className="text-base space-y-6">
          <li>
            <span className="font-red-hat-display block font-semibold">0734985910 / 0718613655</span>
            <hr className="mt-2 border-t border-gray-400" />
          </li>
          <li>
            <div>
              <span className='font-red-hat-display'>Marula lane, off Karen</span>
              <br />
              <span className='font-red-hat-display'>Road Opposite the Marula Manor</span>
            </div>
          </li>
          <li>
            <a
              href="mailto:hello@partylounges.com"
              className="text-black hover:underline font-red-hat-display"
            >
              hello@partylounges.com
            </a>
            <hr className="mt-2 border-t border-gray-400" />
          </li>
        </ul>
      </motion.div>

      {/* Right Side: Quote Form */}
      <motion.div
        className="bg-theme-brown p-8 rounded-lg lg:w-1/2 px-[5%] md:px-[6%] lg:px-[8%] border border-white"
        initial={{ opacity: 0, x: 24 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
      >
        <h2 className="text-3xl text-center font-proximanova-bold text-white mb-4">Get a Quote</h2>
        <p className="text-white text-base mb-8 leading-relaxed font-red-hat-display">
          We'd love to hear your ideas and share ours, please reach out, and let's chat.
        </p>
        <motion.form
          onSubmit={handleSubmit}
          className="space-y-4"
          initial={{ scale: 0.95, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.58, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Names Field */}
          <div>
            <input
              type="text"
              id="name"
              placeholder="Names"
              value={formData.name}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Contact Number Field */}
          <div>
            <input
              type="tel"
              id="phone"
              placeholder="Contact number"
              value={formData.phone}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Date Field */}
          <div>
            <input
              type="date"
              id="date"
              placeholder="Date"
              value={formData.date}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Number of Pax Field */}
          <div>
            <input
              type="number"
              id="pax"
              placeholder="Number of pax"
              value={formData.pax}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Look and Feel Field */}
          <div>
            <input
              type="text"
              id="look"
              placeholder="Look and feel"
              value={formData.look}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Venue Field */}
          <div>
            <input
              type="text"
              id="venue"
              placeholder="Venue"
              value={formData.venue}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Seating Style Field */}
          <div>
            <select
              id="seating"
              value={formData.seating}
              onChange={handleChange}
              className="font-red-hat-display w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            >
              <option value="" disabled>
                Seating style
              </option>
              <option className='font-red-hat-display' value="banquet">Banquet</option>
              <option className='font-red-hat-display' value="theater">Theater</option>
              <option className='font-red-hat-display' value="classroom">Classroom</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              disabled={isSubmitting}
              className="bg-white font-red-hat-display text-black py-3 px-6 rounded shadow-md border border-white 
                         hover:bg-theme-brown hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200 disabled:opacity-70 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </button>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default GetQuoteSection;

import React from 'react';
import { motion } from 'framer-motion';

const GetQuoteSection = () => {
  return (
    <motion.section
      className="flex flex-col lg:flex-row border-t-2 border-gray-300"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: 'easeOut' }}
    >
      {/* Left Side: Contact Info */}
      <motion.div
        className="bg-theme-cream-brown p-6 rounded-lg lg:w-1/2 flex flex-col justify-center px-[5%] md:px-[8%] lg:px-[10%] py-4 border border-white"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <p className="text-lg font-medium mb-6 leading-relaxed">
          We cannot wait to work with you on your next event. Get in touch today and we will get back to you as soon as possible.
        </p>
        <ul className="text-base space-y-6">
          <li>
            <span className="block font-semibold">0721424879 / 0734985910</span>
            <hr className="mt-2 border-t border-gray-400" />
          </li>
          <li>
            <div>
              <span>Marula lane, off Karen</span>
              <br />
              <span>Road Opposite the Marula Manor</span>
            </div>
          </li>
          <li>
            <a
              href="mailto:info@partylounges.com"
              className="text-black hover:underline"
            >
              info@partylounges.com
            </a>
            <hr className="mt-2 border-t border-gray-400" />
          </li>
        </ul>
      </motion.div>

      {/* Right Side: Quote Form */}
      <motion.div
        className="bg-theme-brown p-8 rounded-lg lg:w-1/2 px-[5%] md:px-[6%] lg:px-[8%] border border-white"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h2 className="text-3xl text-center font-bold text-white mb-4">Get a Quote</h2>
        <p className="text-white text-base mb-8 leading-relaxed">
          We'd love to hear your ideas and share ours, please reach out, and let's chat.
        </p>
        <motion.form
          className="space-y-4"
          initial={{ scale: 0.9, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {/* Date Field */}
          <div>
            <input
              type="date"
              id="date"
              placeholder="Date"
              className="w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Number of Pax Field */}
          <div>
            <input
              type="number"
              id="number-pax"
              placeholder="Number of pax"
              className="w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Look and Feel Field */}
          <div>
            <input
              type="text"
              id="look-feel"
              placeholder="Look and feel"
              className="w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Venue Field */}
          <div>
            <input
              type="text"
              id="venue"
              placeholder="Venue"
              className="w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white placeholder-white"
            />
          </div>

          {/* Seating Style Field */}
          <div>
            <select
              id="seating-style"
              className="w-full px-4 py-3 rounded border border-white text-white bg-theme-brown focus:outline-none focus:ring-2 focus:ring-white focus:border-white"
            >
              <option value="" disabled selected>
                Seating style
              </option>
              <option value="banquet">Banquet</option>
              <option value="theater">Theater</option>
              <option value="classroom">Classroom</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-white text-black py-3 px-6 rounded shadow-md border border-white 
                         hover:bg-theme-brown hover:text-white focus:ring-2 focus:ring-offset-2 focus:ring-white transition-colors duration-200"
            >
              Submit
            </button>
          </div>
        </motion.form>
      </motion.div>
    </motion.section>
  );
};

export default GetQuoteSection;

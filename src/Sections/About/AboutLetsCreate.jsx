import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
};

const textVariant = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } }
};

function AboutLetsCreate() {
  return (
    <motion.div
      className="flex items-center justify-center h-[45vh] bg-aboutExperience-theme p-6 text-center"
      variants={containerVariant}
      initial="hidden"
      animate="visible"
    >
      <motion.div variants={textVariant} className="max-w-3xl">
        <h3 className="text-24 font-bold tablet:text-32 desktop:text-40 font-proximanova-bold my-4">
          Let's Create Something Unforgettable
        </h3>
        <p className="text-left text-18 font-proximanova-bold my-5 mb-12">
          Explore our collections, book a consultation, or reach out to bring your dream event to life. Your perfect event experience starts here.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutLetsCreate;
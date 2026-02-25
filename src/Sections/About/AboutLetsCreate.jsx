import { motion } from "framer-motion";

const containerVariant = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.68, ease: [0.22, 1, 0.36, 1] },
  }
};

const textVariant = {
  hidden: { opacity: 0, x: -14 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.66, ease: [0.22, 1, 0.36, 1] },
  }
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
        Discover our exclusive event collections, book a personalized consultation, 
        or connect with us to bring your dream event to life. Whether you're planning 
        a luxury wedding, corporate event, or private celebration, your perfect event experience starts here.
        </p>
      </motion.div>
    </motion.div>
  );
}

export default AboutLetsCreate;
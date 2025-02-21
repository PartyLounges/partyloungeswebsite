import { motion } from "framer-motion";

const AboutCoreBeliefs = () => {
  return (
    <motion.section
      className="w-full bg-aboutExperience-theme py-16 px-6 md:px-12 lg:px-20"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      {/* Title */}
      <h2 className="text-center text-40 font-bold tablet:text-48 desktop:text-56 font-proximanova-bold mb-8">
        What Sets Us Apart
      </h2>

      {/* Image and Intro Text */}
      <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12 mb-8">
        {/* Image */}
        <motion.img
          src="https://images.unsplash.com/photo-1560184897-0e5d96d86acd?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8UnVzdGljJTIwRnVybml0dXJlfGVufDB8fDB8fHww"
          alt="What Sets Us Apart"
          className="w-48 h-32 md:w-64 md:h-40 rounded-lg shadow-lg"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
        />
        
        {/* Text */}
        <p className="text-black text-sm md:text-base font-red-hat-display max-w-2xl">
        At Party Lounges, we do more than just rent event furniture—we curate transformative experiences that blend style, 
        functionality, and innovation. Our foundation is built on six core principles that drive our commitment to excellence.
        </p>
      </div>

      {/* Core Beliefs List */}
      <ul className="space-y-4 text-black text-sm md:text-base font-red-hat-display">
        <li><strong>Creativity with Purpose</strong> – Every event tells a story, evokes emotions, and leaves a lasting impact..</li>
        <li><strong>Innovation that Inspires</strong> – We push boundaries to deliver fresh, dynamic, and memorable event setups..</li>
        <li><strong>Sustainability at the Core</strong> – Committed to eco-friendly solutions and waste reduction without compromising elegance.</li>
        <li><strong>Excellence in Every Detail</strong> – Our meticulous attention ensures seamless, stress-free event experiences.</li>
        <li><strong>Collaboration & Community</strong> – We value strong relationships with clients, vendors, and partners to bring visions to life.</li>
        <li><strong>Transformative Experiences</strong> – Our goal is to create events that shift perspectives, inspire action, and forge lasting memories.</li>
      </ul>
    </motion.section>
  );
};

export default AboutCoreBeliefs;


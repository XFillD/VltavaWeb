import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function HomePage() {
  const controls = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY > 200) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
      }
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [controls]);

  return (
    <div className="flex flex-col items-center space-y-16">
      <div className="mt-16 text-2xl font-bold">Welcome to Our Restaurant</div>
      <motion.div
        className="text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        Discover Our Menu
      </motion.div>
      <motion.div
        className="text-xl"
        initial={{ opacity: 0, y: 100 }}
        animate={controls}
      >
        Book Your Table Now
      </motion.div>
      <div className="mb-16 text-lg">Scroll down to explore more</div>
    </div>
  );
}

export default HomePage;

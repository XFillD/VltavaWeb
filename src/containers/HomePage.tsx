import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";

function HomePage() {
  const controls = useAnimation();
  const controls2 = useAnimation();

  useEffect(() => {
    const updateScroll = () => {
      if (window.scrollY > 200) {
        controls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
      }
      if (window.scrollY > 300) {
        controls2.start({ opacity: 1, y: 0, transition: { duration: 1 } });
      }
    };
    window.addEventListener("scroll", updateScroll);
    return () => window.removeEventListener("scroll", updateScroll);
  }, [controls]);

  return (
    <div className="flex flex-col items-center space-y-16">
      <div className="mt-16 text-2xl font-bold h-96">
        Welcome to Our Restaurant
      </div>
      <motion.div
        className="text-xl h-96"
        initial={{ opacity: 0, y: 200 }}
        animate={controls}
      >
        Discover Our Menu
      </motion.div>
      <motion.div
        className="text-xl h-96"
        initial={{ opacity: 0, y: 300 }}
        animate={controls2}
      >
        Book Your Table Now
      </motion.div>
      <div className="mb-16 text-lg">Scroll down to explore more</div>
    </div>
  );
}

export default HomePage;

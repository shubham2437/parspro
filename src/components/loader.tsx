// components/SadicianLoader.tsx

import { motion } from "framer-motion";

const SadicianLoader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-white">
      <motion.div
        className="relative w-16 h-16 border-4 border-tidywave-blue border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 1.2,
        }}
      />
      <div className="absolute top-[60%] text-tidywave-blue font-medium text-lg animate-pulse mt-8">
        Preparing elegance...
      </div>
    </div>
  );
};

export default SadicianLoader;

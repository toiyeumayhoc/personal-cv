'use client';

import { motion } from "framer-motion";

export default function PageTransition({ children }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-8 bg-[#FFFBE6]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        {children}
      </motion.div>
    </div>
  );
} 
'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from "framer-motion";

export default function TypeWriter({ text, className = "" }) {
  const [displayedText, setDisplayedText] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    let currentText = '';
    const textArray = text.split('');
    
    const timer = setInterval(() => {
      if (currentText.length < textArray.length) {
        currentText = textArray.slice(0, currentText.length + 1).join('');
        setDisplayedText(currentText);
      } else {
        clearInterval(timer);
      }
    }, 7);

    return () => clearInterval(timer);
  }, [text]);

  if (!isClient) {
    return <div className={className}>{text}</div>;
  }

  return (
    <div className={className}>
      <AnimatePresence mode="wait">
        <motion.div
          key={displayedText}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.01 }}
        >
          {displayedText}
        </motion.div>
      </AnimatePresence>
    </div>
  );
} 
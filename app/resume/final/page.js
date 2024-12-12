'use client';

import { finalContent } from '../../content/en/final';
import PageTransition from "../../components/PageTransition";
import Image from "next/image";
import { motion } from "framer-motion";
import TypeWriter from "../../components/TypeWriter";
import { useState, useEffect } from 'react';

export default function FinalPage() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  useEffect(() => {
    const flipInterval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % finalContent.images.length);
        setIsFlipping(false);
      }, 200);
    }, 2000);

    return () => clearInterval(flipInterval);
  }, []);

  return (
    <PageTransition>
      {/* Avatar Transition */}
      <div className="relative w-48 h-48 mx-auto mb-12 z-10 perspective-container">
        <div className={`absolute inset-0 border-4 border-black 
                      rounded-full transform scale-105
                      ${isFlipping ? 'animate-sequence-flip' : ''}`}></div>
        <Image
          src={finalContent.images[currentImageIndex]}
          alt={finalContent.imageAlt.journey}
          fill
          className={`rounded-full object-cover border-4 border-black 
                   shadow-[4px_4px_0_rgba(0,0,0,1)]
                   ${isFlipping ? 'animate-sequence-flip' : ''}`}
          priority
        />
      </div>

      {/* Final Badge */}
      <div className="flex justify-center items-center mb-12">
        <div className="relative">
          <div className="absolute inset-0 bg-yellow-400 rounded-full animate-spin-slow"></div>
          <div className="relative bg-yellow-400 px-8 py-4 
                        rounded-xl border-4 border-black
                        font-comic text-2xl font-bold text-black
                        shadow-[4px_4px_0_rgba(0,0,0,1)]
                        transform hover:scale-110 transition-transform duration-200">
            {finalContent.badge}
          </div>
        </div>
      </div>

      {/* Thank You Message */}
      <div className="text-center mb-12">
        <motion.h1 
          initial={{ scale: 0.5 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-6xl font-bold mb-6
                   text-black filter drop-shadow-[4px_4px_0_rgba(255,200,0,1)]">
          {finalContent.title}
        </motion.h1>
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="bg-gradient-to-r from-yellow-100 via-yellow-200 to-yellow-100 
                    p-6 rounded-xl border-2 border-black mb-8">
          <TypeWriter 
            text={finalContent.description}
            className="text-gray-800 font-comic text-xl leading-relaxed"
          />
        </motion.div>
      </div>

      {/* Social Links */}
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={{
          visible: {
            transition: {
              staggerChildren: 0.1
            }
          }
        }}
        className="flex flex-wrap justify-center gap-6">
        {Object.entries(finalContent.socialLinks).map(([key, social]) => (
          <motion.a 
            key={key}
            href={social.url}
            target="_blank" 
            rel="noopener noreferrer"
            variants={{
              hidden: { scale: 0, opacity: 0, rotate: -180 },
              visible: { scale: 1, opacity: 1, rotate: 0 }
            }}
            whileHover={{ scale: 1.1, rotate: key === 'github' || key === 'youtube' ? -10 : 10 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 200, damping: 10 }}
            className={`inline-flex items-center justify-center w-16 h-16 ${social.bgColor} rounded-full border-2 border-black
                      hover:shadow-[4px_4px_0_rgba(0,0,0,1)]`}>
            <Image src={social.icon} alt={social.alt} width={32} height={32} />
          </motion.a>
        ))}
      </motion.div>
    </PageTransition>
  );
} 
"use client";
import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';

const QRCodePage = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const pulseVariants = {
    pulse: {
      scale: [1, 1.05, 1],
      transition: {
        duration: 2,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const floatingVariants = {
    float: {
      y: [-5, 5, -5],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  if (!mounted) {
    return <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900" />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 2, 1],
              opacity: [0.2, 0.6, 0.2],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Main content */}
      <motion.div
        className="relative z-10 min-h-screen flex flex-col items-center justify-center px-6 py-8"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Header */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-yellow-400 mb-4"
            variants={floatingVariants}
            animate="float"
          >
            wei4r
          </motion.h1>
          <motion.p 
            className="text-gray-300 text-lg md:text-xl max-w-md mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Scan to visit my portfolio
          </motion.p>
        </motion.div>

        {/* QR Code Container */}
        <motion.div
          className="relative mb-8"
          variants={itemVariants}
        >
          {/* Glowing background */}
          <motion.div
            className="absolute inset-0 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30"
            variants={pulseVariants}
            animate="pulse"
          />
          
          {/* QR Code Card */}
          <motion.div
            className="relative bg-slate-800/80 backdrop-blur-lg border border-slate-700/50 rounded-3xl p-8 shadow-2xl"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <div className="bg-white rounded-2xl p-6 shadow-inner">
              <Image // Changed <img> to <Image>
                src={"/images/qrcode.png"}
                alt="QR Code for wei4r.com"
                width={320} // Added width
                height={320} // Added height
                className="w-64 h-64 md:w-80 md:h-80 mx-auto"
                style={{ imageRendering: 'pixelated' }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* URL Display */}
        <motion.div
          className="text-center mb-8"
          variants={itemVariants}
        >
          <motion.div
            className="inline-flex items-center space-x-3 bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 rounded-full px-6 py-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400 }}
          >
            <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse" />
            <span className="text-blue-300 font-mono text-lg">wei4r.com</span>
          </motion.div>
        </motion.div>

        {/* Instructions */}
        <motion.div
          className="text-center max-w-sm mx-auto"
          variants={itemVariants}
        >
          <p className="text-gray-400 text-sm leading-relaxed">
            Point your camera at the QR code to visit my portfolio website
          </p>
        </motion.div>

        {/* Social Icons */}
        <motion.div
          className="flex space-x-4 mt-8"
          variants={itemVariants}
        >
          {[
            { name: 'GitHub', icon: '⚡', href: 'https://github.com/wei4r' },
            { name: 'LinkedIn', icon: '💼', href: 'https://www.linkedin.com/in/shihhung-wei' },
            { name: 'Portfolio', icon: '🚀', href: 'https://wei4r.com' }
          ].map((social, index) => (
            <motion.a
              key={social.name}
              href={social.href}
              className="w-12 h-12 bg-slate-800/60 backdrop-blur-sm border border-slate-600/30 rounded-full flex items-center justify-center text-xl hover:bg-slate-700/60 transition-colors"
              whileHover={{ scale: 1.1, rotate: 5 }}
              whileTap={{ scale: 0.95 }}
              target="_blank"
              rel="noopener noreferrer"
            >
              {social.icon}
            </motion.a>
          ))}
        </motion.div>

        {/* Footer */}
        <motion.div
          className="absolute bottom-6 inset-x-0 mx-auto"
          variants={itemVariants}
        >
          <p className="text-gray-500 text-xs text-center">
            Software Engineer • Recent Virginia Tech Graduate
          </p>
        </motion.div>
      </motion.div>

      {/* Corner decorations */}
      <motion.div
        className="absolute top-4 right-4 w-20 h-20 border-t-2 border-r-2 border-blue-400/30 rounded-tr-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      />
      <motion.div
        className="absolute bottom-4 left-4 w-20 h-20 border-b-2 border-l-2 border-purple-400/30 rounded-bl-3xl"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
      />
    </div>
  );
};

export default QRCodePage;
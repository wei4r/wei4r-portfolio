import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 1.25rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button onClick={selectTab}>
      <p className={`mr-5 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="h-1 bg-primary-500 mt-2 mr-5"
      ></motion.div>
    </button>
  );
};

export default TabButton;

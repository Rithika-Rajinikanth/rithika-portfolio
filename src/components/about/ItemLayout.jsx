"use client";
import { motion } from "framer-motion";
import clsx from "clsx";

const ItemLayout = ({ children, className }) => {
  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className={clsx(
        "p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8 w-full max-w-6xl border border-sky-400 shadow-[0_0_20px_#38bdf8]",
        className
      )}
      style={{ marginTop: "20px", marginBottom: "40px" }}
    >
      {children}
    </motion.div>
  );
};

export default ItemLayout;

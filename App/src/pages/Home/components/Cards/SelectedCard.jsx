import React from "react";
import { motion } from "framer-motion";

const SelectedCard = ({ item, onClose }) => {
  return (
    <motion.div
      className="box"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      style={{
        position: "absolute",
        top: "50%",
        left: "42%",
        transform: "translate(-50%, -42%)",
        zIndex: 3,
        color: "#000",
        background: "white",
        boxShadow: "0px 10px 30px rgba(0,0,0, 0.1)",
        padding: "2rem",
        width: "30rem",
        borderRadius: "10px",
      }}
    >
      <div>
        <button
          className="right-0 bg-red-400 py-0 px-2 justify-center text-center text-[#fff]"
          onClick={onClose}
        >
          x
        </button>
        <h2 className="mb-4 justify-center text-center">{item.title}</h2>
      </div>
      <p>{item.description}</p>
    </motion.div>
  );
};

export default SelectedCard;

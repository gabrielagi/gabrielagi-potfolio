import "./cardListStyle.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SelectedCard from "./SelectedCard";
import items from "./items.json";

const CardList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex flex-wrap md:space-x-4 md:justify-normal justify-center">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
          className="rectangular-card relative overflow-hidden hover:scale-105 transition-transform duration-300 ease-in-out md:mb-0 mb-5"
        >
          <motion.h2>{item.title}</motion.h2>
          <div className="subtitle-container">
            {item.subtitle.map((word, index) => (
              <span
                key={index}
                className="subtitle-word"
                style={{ userSelect: "none" }}
              >
                {word}{" "}
              </span>
            ))}
          </div>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && (
          <SelectedCard
            item={items.find((item) => item.id === selectedId)}
            onClose={() => setSelectedId(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default CardList;

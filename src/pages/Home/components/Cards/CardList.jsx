import "./cardListStyle.css";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SelectedCard from "./SelectedCard";
import items from "./items.json";

const CardList = () => {
  const [selectedId, setSelectedId] = useState(null);

  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
          className="rectangular-card"
        >
          <motion.h2>{item.title}</motion.h2>
          <div className="subtitle-container">
            {item.subtitle.map((word, index) => (
              <span key={index} className="subtitle-word">
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

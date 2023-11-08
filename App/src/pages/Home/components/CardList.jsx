import React, { useState, useRef, useEffect } from "react";
import { AnimatePresence, motion, usePresence } from "framer-motion";
import { gsap } from "gsap";
import "./cardListStyle.css";

const CardList = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);

  const Box = ({ isSelected }) => {
    const ref = useRef(null);
    const [isPresent, safeToRemove] = usePresence();

    useEffect(() => {
      if (!isPresent) {
        gsap.to(ref.current, {
          opacity: 0,
          onComplete: () => safeToRemove?.(),
        });
      }
    }, [isPresent, safeToRemove]);

    return (
      <motion.div
        ref={ref}
        className="box"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "absolute",
          top: "50%",
          left: "45%",
          transform: "translate(-50%, -45%)",
          zIndex: 3,
          color: "#000",
          background: "white",
          boxShadow: "0px 10px 30px rgba(0,0,0, 0.1)",
          padding: "2rem",
          width: "30rem",
          borderRadius: "10px",
        }}
      >
        {isSelected && (
          <>
            <p>{items.find((item) => item.id === selectedId)?.subtitle}</p>
            <h2>{items.find((item) => item.id === selectedId)?.title}</h2>
            <p>
              I'm an enthusiastic Full Stack developer with over 2 years of
              experience crafting web and mobile applications. I'm passionate
              about optimizing development practices, improving usability, and
              ensuring top-quality products.
            </p>
            <button onClick={() => setSelectedId(null)}>Close</button>
          </>
        )}
      </motion.div>
    );
  };

  return (
    <div className="flex space-x-4">
      {items.map((item) => (
        <motion.div
          key={item.id}
          layoutId={item.id}
          onClick={() => setSelectedId(selectedId === item.id ? null : item.id)}
          className="rectangular-card"
        >
          <motion.h5>{item.subtitle}</motion.h5>
          <motion.h2>{item.title}</motion.h2>
        </motion.div>
      ))}

      <AnimatePresence>
        {selectedId && <Box isSelected={true} />}
      </AnimatePresence>
    </div>
  );
};

export default CardList;

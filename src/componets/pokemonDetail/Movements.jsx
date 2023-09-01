import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";

const Movements = ({ pokemonData }) => {
  const [showMoves, setShowMoves] = useState(false);
  const controls = useAnimation();

  useEffect(() => {
    if (pokemonData?.moves.length > 0) {
      setShowMoves(true);
    }
  }, [pokemonData]);

  useEffect(() => {
    if (showMoves) {
      controls.start((i) => ({
        opacity: 1,
        y: 0,
        transition: { delay: i * 0.08 },
      }));
    }
  }, [controls, showMoves]);

  return (
    <section className="flex flex-col mx-auto gap-5 mt-6 max-w-3xl bg-white rounded-lg shadow-md p-6">
      <h4 className="text-gray-600 font-semibold capitalize text-md md:text-lg lg:text-xl xl:text-2xl text-center border-b border-gray-300 pb-2 w-11/12 mx-auto md:w-full 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
        Movements
      </h4>
      <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
        {showMoves &&
          pokemonData.moves.map((move, index) => (
            <motion.span
              key={move}
              custom={index}
              initial={{ opacity: 0, y: -10 }}
              animate={controls}
              className="capitalize bg-gray-200 rounded-full px-3 py-1 text-sm"
            >
              {move}
            </motion.span>
          ))}
      </div>
    </section>
  );
};

export default Movements;

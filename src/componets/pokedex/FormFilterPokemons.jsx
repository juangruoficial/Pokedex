import { motion } from "framer-motion";

const FormFilterPokemons = ({
  itemsPerPage,
  setItemsPerPage,
  pokemonName,
  handleChange,
  setPokemonName,
  pokemonType,
  setPokemonType,
  types,
  name,
}) => {
  const formAnimation = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };
  return (
    <section className="bg-white py-6 px-4 md:px-8 lg:px-16">
      <motion.div
        className="flex justify-between text-center text-gray-700"
        initial="hidden"
        animate="visible"
        variants={formAnimation}
      >
        <span className="font-semibold text-gray-800 mr-2 cursor-pointer hover:text-red-500 transition duration-300">
          Welcome {name}
        </span>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          Pokemons per page:
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(parseInt(e.target.value))}
            className="px-2 py-1 border border-gray-300 rounded-md ml-2"
          >
            <option value={10}>10</option>
            <option value={20}>20</option>
            <option value={50}>50</option>
          </select>
        </motion.div>
      </motion.div>

      <motion.form
        className="flex flex-col md:flex-row gap-4 mt-4"
        initial="hidden"
        animate="visible"
        variants={formAnimation}
      >
        <div className="flex-grow">
          <input
            value={pokemonName}
            onChange={handleChange(setPokemonName)}
            type="text"
            placeholder="Search Pokemon..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FE1936]"
          />
        </div>
        <div className="flex-grow md:w-48">
          <select
            value={pokemonType}
            onChange={handleChange(setPokemonType)}
            className={`w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FE1936] `}
          >
            <option value="">All Pokemon</option>
            {types.map((type) => (
              <option value={type.name} className="capitalize" key={type.name}>
                {type.name}
              </option>
            ))}
          </select>
        </div>
      </motion.form>
    </section>
  );
};
export default FormFilterPokemons;

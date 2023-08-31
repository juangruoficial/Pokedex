const Movements = ({ pokemonData }) => {
  return (
    <section className="flex flex-col gap-5 mt-6 max-w-3xl  bg-white rounded-lg shadow-md p-6 ">
      <h4 className="text-gray-600 font-semibold capitalize text-md md:text-lg lg:text-xl xl:text-2xl text-center border-b border-gray-300 pb-2 w-11/12 mx-auto md:w-full 2xl:text-4xl 3xl:text-5xl 4xl:text-6xl">
        Movements
      </h4>
      <div className="flex flex-wrap gap-2 mt-2 justify-center items-center">
        {pokemonData?.moves.map((move) => (
          <span
            key={move}
            className="bg-gray-200 rounded-full px-3 py-1 text-sm"
          >
            {move}
          </span>
        ))}
      </div>
    </section>
  );
};
export default Movements;

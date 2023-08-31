import { Link } from "react-router-dom";

const Page404 = () => {
  return (
    <main className="p-5 flex items-center justify-center h-screen bg-gradient-to-r from-red-400 via-yellow-300 to-yellow-200">
      <section className="bg-white rounded-lg p-8 shadow-md">
        <h1 className="text-4xl font-semibold text-gray-800 mb-4">
          404 - Pokémon Not Found
        </h1>
        <p className="text-gray-600 mb-8">
          Oh no! The Page you're searching for is nowhere to be found.
        </p>
        <Link
          to="/"
          className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
        >
          Return to PokéHome
        </Link>
      </section>
    </main>
  );
};

export default Page404;

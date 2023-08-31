import { useDispatch } from "react-redux";
import FooterPokeball from "../componets/layout/FooterPokeball";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };

  return (
    <main className="min-h-screen grid grid-rows-[1fr_auto] bg-gray-100">
      <section className="flex justify-center items-center text-center">
        <article className="flex flex-col gap-5 p-5 bg-white rounded-lg shadow-md">
          <div>
            <img src="/images/pokedex.png" alt="banner" className="mx-auto" />
          </div>
          <h2 className="text-[#FE1936] text-2xl font-semibold">
            Hello trainer!
          </h2>
          <p className="text-gray-600">To start, please give me your name</p>
          <form onSubmit={handleSubmit} className="flex flex-col gap-3">
            <input
              autoComplete="off"
              id="nameTrainer"
              type="text"
              placeholder="Your name"
              required
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-[#FE1936]"
            />
            <button
              type="submit"
              className="bg-[#FE1936] text-white rounded-md py-2 px-4 hover:bg-red-600 transition"
            >
              Start
            </button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;

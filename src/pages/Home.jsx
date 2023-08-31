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
    <main className="min-h-screen grid grid-rows-[1fr_auto]">
      <section>
        <article>
          <div>
            <img src="/images/pokedex.png" alt="banner" />
          </div>
          <h2>Hello trainer!</h2>
          <p>To start , please give me your name </p>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              id="nameTrainer"
              type="text"
              placeholder="Your name"
              required
            />
            <button type="submit">Start</button>
          </form>
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;

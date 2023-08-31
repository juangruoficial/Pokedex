import FormName from "../componets/home/FormName";
import FooterPokeball from "../componets/layout/FooterPokeball";

const Home = () => {
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
          <FormName />
        </article>
      </section>
      <FooterPokeball />
    </main>
  );
};
export default Home;

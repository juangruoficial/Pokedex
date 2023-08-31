import { useDispatch } from "react-redux";
import { logoutTrainer } from "../../store/slices/trainer.slice";

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutTrainer());
  };
  return (
    <section>
      <header>
        <div className="h-16 bg-red-600 relative">
          <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
            <img src="/images/pokedex.png" alt="" />
          </div>
        </div>

        <div className="h-12 bg-black relative">
          <button
            onClick={handleLogout}
            className="h-16 bg-white aspect-square rounded-full absolute right-0 
            -translate-x-1/2 -top-6 border-[10px] border-black after:block 
            after:content-[''] after:h-8 after:aspect-square after:rounded-full
           after:bg-slate-800 after:left-1/2 after:absolute after:-translate-x-1/2
            after:top-1/2 after:-translate-y-1/2 after:border-[4px] after:border-black hover:after:bg-red-700 cursor-pointer"
          ></button>
        </div>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;

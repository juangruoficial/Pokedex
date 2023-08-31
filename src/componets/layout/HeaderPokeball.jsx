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
          <div
            className="absolute left-2 bottom-0 w-[210px] sm:w-[300px] sm:left-1/2 sm:transform sm:-translate-x-1/2
          "
          >
            <img src="/images/pokedex.png" alt="" />
          </div>
        </div>

        <div className="flex h-12 bg-black relative">
          <div onClick={handleLogout} className="cursor-pointer">
            <div className="flex absolute gap-1 right-[120px] top-[0] justify-center items-center">
              <p className="text-white">Press to logout</p>
              <i className="bx bxs-exit bx-fade-right bx-flip-vertical text-4xl text-white "></i>
            </div>

            <button
              className="h-16 bg-white aspect-square rounded-full absolute right-0 
            -translate-x-1/2 -top-6 border-[10px] border-black after:block 
            after:content-[''] after:h-8 after:aspect-square after:rounded-full
           after:bg-slate-800 after:left-1/2 after:absolute after:-translate-x-1/2
            after:top-1/2 after:-translate-y-1/2 after:border-[4px] after:border-black hover:after:bg-red-700 cursor-pointer"
            ></button>
          </div>
        </div>
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;

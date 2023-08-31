import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loginTrainer } from "../../store/slices/trainer.slice";

const FormName = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;
    dispatch(loginTrainer(nameTrainer));
    navigate("/pokedex");
  };
  return (
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
  );
};
export default FormName;

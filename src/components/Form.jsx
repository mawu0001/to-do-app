import { IoAdd } from "react-icons/io5";
const Form = ({ handleFormSubmit, handleInputChange, task }) => {
  return (
    <form onSubmit={handleFormSubmit} className="flex gap-5">
      <input
        type="text"
        placeholder="Skriv en opgave"
        value={task}
        onChange={handleInputChange}
        className="placeholder:text-slate-500 dark:text-black dark:bg-white text-white bg-slate-700 rounded-3xl p-2"
      />
      <button
        type="submit"
        className="dark:bg-slate-400 dark:text-slate-700 bg-slate-700 text-slate-400 p-2 rounded-3xl"
      >
        <IoAdd />
      </button>
    </form>
  );
};

export default Form;

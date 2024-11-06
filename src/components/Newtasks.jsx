import { IoRemove } from "react-icons/io5";
const Newtasks = ({ tasks, isDone, setIsDone, isRemoved, setIsRemoved }) => {
  return (
    <ul>
      {tasks.map((task, index) => (
        <li
          onClick={() => {
            setIsDone(!isDone);
          }}
          key={index}
          className={`flex place-content-between dark:text-slate-800 text-slate-500 ${
            isDone && "line-through"
          }`}
        >
          {task}
        </li>
      ))}
    </ul>
  );
};

export default Newtasks;

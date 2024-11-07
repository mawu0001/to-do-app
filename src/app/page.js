"use client";
import { useState } from "react";
import Form from "@/components/Form";
import Newtasks from "@/components/Newtasks";
import Image from "next/image";

export default function Home() {
  const [task, setTask] = useState(""); // Holder den nuværende opgave
  const [tasks, setTasks] = useState([]); // Holder alle opgaver

  // Funktion til at håndtere ændringer i input-feltet
  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  // Funktion til at håndtere indsendelse af formularen
  const handleFormSubmit = (e) => {
    e.preventDefault(); // Forhindrer siden i at opdatere
    if (task.trim() === "") return; // Tjekker, at opgaven ikke er tom
    setTasks([...tasks, task]); // Tilføjer opgaven til opgavelisten
    setTask(""); // Tømmer input-feltet efter indsendelse
  };

  const [isDone, setIsDone] = useState(false);
  const [isRemoved, setIsRemoved] = useState(false);

  return (
    <div className="flex flex-col place-content-center place-items-center ">
      <main className="flex flex-col gap-9 dark:bg-white rounded-3xl p-6 my-72">
        <section className="flex flex-col gap-2">
          <h3 className="text-xl dark:text-slate-800 ">Opgaver for idag</h3>
          {!isDone && (
            <Newtasks
              tasks={tasks}
              isDone={isDone}
              setIsDone={setIsDone}
              isRemoved={isRemoved}
              setIsRemoved={setIsRemoved}
            />
          )}
        </section>
        <Form
          handleFormSubmit={handleFormSubmit}
          handleInputChange={handleInputChange}
          task={task}
        />
        <section>
          <h3 className="text-xl dark:text-slate-800 ">Færdige opgaver</h3>
          {isDone && (
            <Newtasks
              tasks={tasks}
              isDone={isDone}
              setIsDone={setIsDone}
              isRemoved={isRemoved}
              setIsRemoved={setIsRemoved}
            />
          )}
        </section>
      </main>
    </div>
  );
}

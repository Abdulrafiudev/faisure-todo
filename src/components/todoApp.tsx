import { useState } from "react";
import Header from "@/components/header";
import TodoInput from "./todoInput";
import Notes from "./note";

export interface TodoContent {
  title: string;
  content: string;
}

const TodoApp = () => {
  let [todoContent, setTodoContent] = useState<TodoContent>({
    title: "",
    content: "",
  });
  let [notes, setNotes] = useState<TodoContent[]>([]);

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    let { name, value } = event.target;

    setTodoContent((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  }

  function handleSubmit(event: React.FormEvent) {
    event.preventDefault();
    setNotes((prev) => {
      return [...prev, todoContent];
    });

    setTodoContent({
      title: "",
      content: "",
    });
  }

  function handleDelete(id: number) {
    setNotes((prev) => {
      return prev.filter((_, index) => index !== id);
    });
  }
  return (
    <>
      <Header />
      <TodoInput
        handleChange={handleChange}
        handleSubmit={handleSubmit}
        todoContent={todoContent}
      />
      <Notes notes={notes} handleDelete={handleDelete} />
    </>
  );
};

export default TodoApp;

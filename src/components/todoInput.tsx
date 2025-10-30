import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import type { TodoContent } from "./todoApp";

interface TodoInputProps {
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  handleSubmit: (event: React.FormEvent) => void;
  todoContent: TodoContent;
}

const TodoInput = ({
  handleChange,
  handleSubmit,
  todoContent,
}: TodoInputProps) => {
  const [displayFullArea, setDisplayFullArea] = useState(false);

  const handleClick = () => {
    setDisplayFullArea(true);
  };

  return (
    <div className="flex justify-center mt-8 w-full">
      <form
        onSubmit={handleSubmit}
        className="relative flex flex-col bg-white shadow-sm border border-gray-300 rounded-xl p-4 w-[80%] transition-all duration-300"
      >
        {displayFullArea && (
          <input
            name="title"
            placeholder=" Todo title"
            onChange={handleChange}
            value={todoContent.title}
            className="outline-none text-lg font-semibold mb-2 px-2 py-1 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/30"
          />
        )}

        <textarea
          name="content"
          placeholder="Add a todo..."
          rows={displayFullArea ? 3 : 1}
          onChange={handleChange}
          value={todoContent.content}
          onClick={handleClick}
          className={`outline-none resize-none px-2 py-2 rounded-md border border-gray-300 focus:ring-2 focus:ring-primary/30  ${
            displayFullArea ? "mb-4" : "mb-0"
          }`}
        />

        {displayFullArea && (
          <div className="absolute bottom-[-20px] right-4 mt-1">
            <Button
              type="submit"
              size="icon"
              className="rounded-full shadow-md"
              onClick={handleSubmit}
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
        )}
      </form>
    </div>
  );
};

export default TodoInput;

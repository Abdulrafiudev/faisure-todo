import { Delete } from "lucide-react";
import { Button } from "@/components/ui/button";
import type { TodoContent } from "./todoApp";

interface NoteProps {
  notes: TodoContent[];
  handleDelete: (id: number) => void;
}

const Notes = ({ notes, handleDelete }: NoteProps) => {
  return (
    <div className="flex justify-start mt-8 w-full flex-wrap mx-auto p-5 max-sm:flex-col max-sm:items-center ">
      {notes.map((note, index) => {
        return (
          <div
            className="bg-white rounded-[7px] p-2.5 w-[300px] m-4 float-left z-1 shadow-sm"
            key={index}
          >
            <h1 className="mb-1.5 text-[1.1em]">{note.title}</h1>
            <p className="text-[1.1em] mb-2.5 whitespace-pre-wrap wrap-break-word">
              {note.content}
            </p>
            <Button
              className="bg-red-500 hover:bg-red-600 text-white rounded-full p-2  float-right"
              onClick={() => {
                handleDelete(index);
              }}
            >
              {" "}
              <Delete />{" "}
            </Button>
          </div>
        );
      })}
    </div>
  );
};

export default Notes;

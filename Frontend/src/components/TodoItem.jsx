import { TodoItemsContext } from "../store/TodoItemsContext";
import { todoItemToClientModel } from "../utils/ModelUtil";
import Button from "./Button";
import { useContext, useState } from "react";

const TodoItem = ({ id, todoText, todoDate, completed }) => {
  const { deleteTodoItem } = useContext(TodoItemsContext);

  const [isComplete, setIsComplete] = useState(completed);

  const formatedDate = new Date(todoDate).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const toggleCheckbox = () => {
    fetch(`https://todoapp-kappa-jade.vercel.app/api/todos/${id}`, {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ completed: !isComplete }),
    })
      .then((res) => res.json())
      .then((updatedItem) => {
        const clientUpdatedItem = todoItemToClientModel(updatedItem);
        setIsComplete(clientUpdatedItem.completed);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const deleteHandler = () => {
    fetch(`https://todoapp-kappa-jade.vercel.app/api/todos/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((deletedItem) => {
        const clientDeletedItem = todoItemToClientModel(deletedItem);
        deleteTodoItem(clientDeletedItem.id);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="w-full max-w-2xl mx-auto my-4 px-3">
  <div
    className="flex items-center justify-between gap-3
               p-4 sm:p-5 rounded-xl border border-blue-100
               bg-white shadow-sm hover:shadow-md transition-all duration-300"
  >
    {/* LEFT: Checkbox */}
    <div className="flex-shrink-0">
      <input
        checked={isComplete}
        onChange={toggleCheckbox}
        type="checkbox"
        className="h-5 w-5 accent-blue-500 rounded border-gray-300
                   focus:ring-2 focus:ring-blue-400 cursor-pointer"
        aria-label={isComplete ? "Mark as incomplete" : "Mark as complete"}
      />
    </div>

    {/* CENTER: Content */}
    <div
      className={`flex-1 text-center px-3 transition-colors duration-200 ${
        isComplete ? "line-through text-gray-400" : "text-gray-900"
      }`}
    >
      <p
        className="text-sm sm:text-base font-medium break-words"
        title={todoText}
      >
        {todoText}
      </p>
      <p className="text-xs text-blue-500 mt-1">
        {formatedDate}
      </p>
    </div>

    {/* RIGHT: Delete Button */}
    <div className="flex-shrink-0">
      <Button
        btnType="danger"
        btnText="Delete"
        handler={deleteHandler}
      />
    </div>
  </div>
</div>



  );
};

export default TodoItem;

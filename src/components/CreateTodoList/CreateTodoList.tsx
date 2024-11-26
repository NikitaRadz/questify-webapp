import { useState } from "react";
import { TodoList } from "../TodoList/TodoList";
import NewTodoCSS from "./CreateTodoList.module.css";

/**
 * Creates a form for the user to add a new list
 * and saves it into the component's state
 * 
 * @returns A form with a text input and a submit button
 * that adds a new list to the state when submitted
 */
export function CreateTodoList({ onSubmit }: { onSubmit: (title: string) => void }) { // OnSubmit is a new list
    const [newList, setNewList] = useState(""); // Get new list name from input box
    // const [titles, setTitles] = useState<{ id: string, name: string, tasks: string[] }[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        if (newList === "") return; // No empty value allowed
        if (newList.length > 15) {
            alert("List name too long: Limit to 15 characters");
            setNewList(""); 
            return; // Limit to 20 characters
        }

        onSubmit(newList);
        // setTitles(currentTitles => {
        //     return [
        //         ...currentTitles,
        //         { id: crypto.randomUUID(), name: newList, tasks: [] },
        //     ]
        // })
        setNewList(""); // Empties the box after submit
    }

    return (
        <form onSubmit={handleSubmit} className={NewTodoCSS["new-todo-form"]}>
            <div className={NewTodoCSS["form-row"]}>
                <label htmlFor="list" className={NewTodoCSS["form-label"]}>Add a new list</label>
                <input
                    value={newList}
                    onChange={e => setNewList(e.target.value)}
                    type="text"
                    id="list"
                />
            </div>
            <button className={NewTodoCSS["add-list-btn"]} type="submit">Add List</button>
        </form>
    )
}
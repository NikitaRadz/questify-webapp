import { useState } from "react";
import NewTodoCSS from "./CreateTodoList.module.css";

export function CreateTodoList() {
    const [newList, setNewList] = useState(""); // Add new list
    const [titles, setTitles] = useState<{ id: string, name: string, tasks: string[] }[]>([]);

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        setTitles(currentTitles => {
            return [
                ...currentTitles,
                { id: crypto.randomUUID(), name: newList, tasks: [] },
            ]
        })

        console.log(titles);
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
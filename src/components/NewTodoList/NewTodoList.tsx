import { useState } from "react";
import NewTodoCSS from "./NewTodoList.module.css";

export default function NewTodoList() {
    const [newList, setNewList] = useState(""); // Add new list 

    function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        console.log(newList);
    }

    return (
        <form onSubmit={handleSubmit} className={NewTodoCSS["new-todo-form"]}>
            <div className={NewTodoCSS["form-row"]}>
                <label htmlFor="list" className={NewTodoCSS["form-label"]}>New List</label>
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
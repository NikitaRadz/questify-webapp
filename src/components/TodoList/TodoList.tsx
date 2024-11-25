import TodoListCSS from "./TodoList.module.css";

export function TodoList( title: { id: string, name: string} ) {
    return (
        <div key={title.id} className={TodoListCSS["list-box"]}>
            <h2 className={TodoListCSS["list-header"]}>{title.name}</h2>
        </div>
    )
}
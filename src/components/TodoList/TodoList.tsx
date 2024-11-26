import TodoListCSS from "./TodoList.module.css";

export function TodoList({ titles } : { titles: { id: string, name: string, tasks: string[] }[] }) {
    return (
        // <div key={title.id} className={TodoListCSS["list-box"]}>
        //     <h2 className={TodoListCSS["list-header"]}>{title.name}</h2>
        // </div>
        <>
            {titles.length !== 0 && titles.map(title => 
                <div key = {title.id} className={TodoListCSS["list-box"]}>
                    <h2 className={TodoListCSS["list-header"]}>{title.name}</h2>
                </div>
            )}
        </>
    )
}
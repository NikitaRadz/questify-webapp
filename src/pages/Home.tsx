import HomeCSS from "./Home.module.css";
import { useState } from "react";
import { Header } from "../components/Header/Header";
import { CreateTodoList } from "../components/CreateTodoList/CreateTodoList";
import { TodoList } from "../components/TodoList/TodoList";
function Home() {
    const [titles, setTitles] = useState<{ id: string, name: string, tasks: string[] }[]>([]);

    function addList(title : string) {
        setTitles(currentTitles => {
            return [
                ...currentTitles,
                { id: crypto.randomUUID(), name: title, tasks: [] },
            ]
        })
    }

    function deleteList(id : string) {
        setTitles(currentTitles => {
            return currentTitles.filter(title => title.id !== id);
        })
    }

    return (
        <>
            <Header />
            <div className={HomeCSS["todo-add-area"]}>
                <CreateTodoList onSubmit={addList}/>
            </div>
            <div className={HomeCSS["lists-area"]}>
                <TodoList titles={titles}/>
            </div>
        </>
    );
}

export default Home
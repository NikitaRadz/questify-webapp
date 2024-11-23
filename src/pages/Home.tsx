import HomeCSS from "./Home.module.css";
import { Header } from "../components/Header/Header";
import { CreateTodoList } from "../components/CreateTodoList/CreateTodoList";
function Home() {
    return (
        <>
            <Header />
            <div className={HomeCSS["todo-add-area"]}>
                <CreateTodoList />
            </div>
        </>
    );
}

export default Home
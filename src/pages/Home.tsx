import React from "react";
import HomeCSS from "./Home.module.css";
import Header from "../components/Header/Header";
import NewTodoList from "../components/NewTodoList/NewTodoList";
function Home() {
    return (
        <>
            <Header />
            <div className={HomeCSS["task-area"]}>
                <NewTodoList />
            </div>
        </>
    );
}

export default Home
import React, { useState } from "react";
import style from "./ListColumn.module.css";
import { items } from "../data/mock-data";
import Item from "./Item";
import AddTaskForm from "./AddTaskForm";

const ListColumn = (props) => {
    const { listTitle } = props;

    const [addTask, setAddTask] = useState(false);

    const handleAddTask = () => {
        setAddTask(true);
    };

    return (
        <div className={style.listColumn}>
            <h3>{listTitle}</h3>
            {items
                .filter((oneItem) => oneItem.list === listTitle)
                .map((oneItem, idx) => {
                    return <Item key={idx} item={oneItem} />;
                })}
            {addTask ? (
                <AddTaskForm setAddTask={setAddTask} />
            ) : (
                <div className={style.addButton} onClick={handleAddTask}>
                    <p>+ Add a task</p>
                </div>
            )}
        </div>
    );
};

export default ListColumn;

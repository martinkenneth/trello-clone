import React, { useState } from "react";
import style from "./ListColumn.module.css";
import { items } from "../data/mock-data";
import Item from "./Item";
import AddTaskForm from "./AddTaskForm";
import moreIcon from "../assets/more-icon.png";

const ListColumn = (props) => {
    const { listTitle, setShowId } = props;

    const [addTask, setAddTask] = useState(false);

    const handleAddTask = () => {
        setAddTask(true);
    };

    const handleClickTask = (id) => {
        setShowId(id);
    };

    return (
        <div>
            <div className={style.listColumn}>
                <div className={style.columnHeader}>
                    <h3>{listTitle}</h3>
                    <img src={moreIcon} />
                </div>
                {items
                    .filter((oneItem) => oneItem.list === listTitle)
                    .map((oneItem) => {
                        return (
                            <Item
                                key={oneItem.id}
                                item={oneItem}
                                onClick={() => handleClickTask(oneItem.id)}
                            />
                        );
                    })}
                {addTask ? (
                    <AddTaskForm
                        setAddTask={setAddTask}
                        className={style.addTaskForm}
                    />
                ) : (
                    <div className={style.addButton} onClick={handleAddTask}>
                        <p>+ Add a task</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ListColumn;

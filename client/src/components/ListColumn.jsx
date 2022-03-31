import React, { useState } from "react";
import style from "./ListColumn.module.css";
import { items } from "../data/mock-data";
import Item from "./Item";
import AddTaskForm from "./AddTaskForm";

const ListColumn = (props) => {
<<<<<<< HEAD
    const { listTitle } = props;
=======
    const {listTitle, setShowId} = props;
>>>>>>> ac16b7ebd70a0d9408d7cb97b8342c836a4198ab

    const [addTask, setAddTask] = useState(false);

    const handleAddTask = () => {
        setAddTask(true);
<<<<<<< HEAD
    };
=======
    }
    
    const handleClickTask = (id) => {
        setShowId(id)
    }
>>>>>>> ac16b7ebd70a0d9408d7cb97b8342c836a4198ab

    return (
        <div className={style.listColumn}>
            <h3>{listTitle}</h3>
<<<<<<< HEAD
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
=======
            {items.filter((oneItem) => oneItem.list === listTitle).map((oneItem) => {
                return (
                    <Item key={oneItem.id} item={oneItem} onClick={() => handleClickTask(oneItem.id)}/>
                )
            })}
            {addTask ? 
            <AddTaskForm setAddTask={setAddTask}/>:
            <div className={style.addButton} onClick={handleAddTask}>
                <p>+ Add a task</p> 
            </div>
            }
>>>>>>> ac16b7ebd70a0d9408d7cb97b8342c836a4198ab
        </div>
    );
};

export default ListColumn;

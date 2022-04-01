import React, { useState, useEffect } from "react";
import style from "./ListColumn.module.css";
import Item from "./Item";
import AddTaskForm from "./AddTaskForm";
import moreIcon from "../assets/more-icon.png";
import axios from 'axios';

const ListColumn = (props) => {
    const { listTitle, setShowId } = props;

    const [addTask, setAddTask] = useState(false);
    const [items, setItems] = useState([]);

    const handleAddTask = () => {
        setAddTask(true);
    };

    const handleClickTask = (id) => {
        setShowId(id);
    };

    useEffect(() => {
        axios.get('http://localhost:8000/api/items')
            .then(res => {
                console.log('getting all items from db');
                setItems(res.data.items);
            })
            .catch(err => console.error(err));
    }, [])

    return (
        <div>
            <div className={style.listColumn}>
                <div className={style.columnHeader}>
                    <h3>{listTitle}</h3>
                    <img src={moreIcon} alt=''/>
                </div>
                {items
                    .filter((oneItem) => oneItem.list === listTitle)
                    .map((oneItem) => {
                        return (
                            <Item
                                key={oneItem._id}
                                item={oneItem}
                                onClick={() => handleClickTask(oneItem._id)}
                            />
                        );
                    })}
                {addTask ? (
                    <AddTaskForm
                        list={listTitle}
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

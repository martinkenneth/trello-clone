import React, { useState, useEffect } from "react";
import style from "./ListColumn.module.css";
import Item from "./Item";
import AddTaskForm from "./AddTaskForm";
import moreIcon from "../assets/more-icon.png";
import axios from "axios";

const ListColumn = (props) => {
    const { listTitle, listId, setShowId, del, setDel } = props;
    const [addTask, setAddTask] = useState(false);
    const [editToggle, setEditToggle] = useState(false);
    const [items, setItems] = useState([]);

    const handleAddTask = () => {
        setAddTask(true);
    };

    const handleClickTask = (id) => {
        setShowId(id);
    };

    // const handleDelete = () => {
    //     console.log("Delete");
    // };

    const handleDelete = (e) => {
        e.preventDefault();
        console.log("delete", listId);
        axios
            .delete("http://localhost:8000/api/lists/delete/" + listId)
            .then((res) => {
                console.log("item deleted");
                setDel(!del);
                //history.push isn't working to rerender the project board to show the edits
                // history.push("/");
            });
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/items")
            .then((res) => {
                console.log("getting all items from db");
                setItems(res.data.items);
            })
            .catch((err) => console.error(err));
    }, [addTask]);

    return (
        <div>
            <div className={style.listColumn}>
                <div className={style.columnHeader}>
                    <h3>{listTitle}</h3>
                    <img
                        src={moreIcon}
                        alt=""
                        onClick={() => setEditToggle(!editToggle)}
                    />
                    {editToggle ? (
                        <p className={style.delete} onClick={handleDelete}>
                            Delete
                        </p>
                    ) : null}
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

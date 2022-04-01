import React, { useState, useEffect } from "react";
import ListColumn from "../components/ListColumn";
import style from "./ProjectBoardView.module.css";
import AddListForm from "../components/AddListForm";
import EditOne from "./EditOne";
import plus from "../assets/plus-icon.png";
import axios from "axios";

const ProjectBoard = () => {
    const [addList, setAddList] = useState(false);
    const [showId, setShowId] = useState(-1);

    const [lists, setLists] = useState([]);

    const handleAddList = () => {
        setAddList(true);
    };

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/lists")
            .then((res) => {
                console.log("getting the lists from the db");
                setLists(res.data.lists);
            })
            .catch((err) => console.error(err));
    }, [addList]);

    return (
        <div className={style.projectBoard}>
            <div className={style.columnsContainer}>
                {lists.map((list) => {
                    return (
                        <ListColumn
                            key={list._id}
                            listTitle={list.title}
                            setShowId={setShowId}
                        />
                    );
                })}

                {addList ? (
                    <AddListForm setAddList={setAddList} />
                ) : (
                    <button onClick={handleAddList}>
                        <img src={plus} alt="" />
                        <p>Add List</p>
                    </button>
                )}
            </div>
            {showId !== -1 && <EditOne showId={showId} setShowId={setShowId} />}
        </div>
    );
};

export default ProjectBoard;

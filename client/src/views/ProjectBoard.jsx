import React, { useState, useEffect } from "react";
import ListColumn from "../components/ListColumn";
import AddListForm from "../components/AddListForm";
import Modal from "../components/Modal";
import EditOne from "./EditOne";
import style from "./ProjectBoardView.module.css";
import plus from "../assets/plus-icon.png";
import axios from "axios";

const ProjectBoard = () => {
    const [addList, setAddList] = useState(false);
    const [del, setDel] = useState(false);
    const [showId, setShowId] = useState(-1);
    const [lists, setLists] = useState([]);

    // const [openModal, setOpenModal] = useState(false);

    const handleAddList = () => {
        setAddList(true);
    };

    useEffect(() => {
        console.log(addList);
        axios
            .get("http://localhost:8000/api/lists")
            .then((res) => {
                console.log("getting the lists from the db");
                // console.log(showId);
                setLists(res.data.lists);
            })
            .catch((err) => console.error(err));
    }, [addList, del]);

    return (
        <div className={style.projectBoard}>
            {showId !== -1 && <EditOne showId={showId} setShowId={setShowId} />}
            <div className={style.columnsContainer}>
                {lists.map((list) => {
                    return (
                        <ListColumn
                            key={list._id}
                            listTitle={list.title}
                            listId={list._id}
                            del={del}
                            setDel={setDel}
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
            {/* <Modal /> */}
        </div>
    );
};

export default ProjectBoard;

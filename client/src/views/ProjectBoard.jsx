import React, { useState } from "react";
import ListColumn from "../components/ListColumn";
import { projName, lists } from "../data/mock-data";
import style from "./ProjectBoardView.module.css";
import AddListForm from "../components/AddListForm";
import EditOne from "./EditOne";
import plus from "../assets/plus-icon.png";

const ProjectBoard = () => {
    const [addList, setAddList] = useState(false);
    const [showId, setShowId] = useState(-1);

    const handleAddList = () => {
        setAddList(true);
    };

    //state var record idx or id
    //axios

    return (
        <div className={style.projectBoard}>
            <div className={style.columnsContainer}>
                {lists.map((list, idx) => {
                    return (
                        <ListColumn
                            key={idx}
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
            {showId > -1 && <EditOne indexKey={showId} setShowId={setShowId} />}
        </div>
    );
};

export default ProjectBoard;

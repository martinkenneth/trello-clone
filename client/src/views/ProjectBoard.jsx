import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ListColumn from "../components/ListColumn";
import AddListForm from "../components/AddListForm";
import style from "./ProjectBoardView.module.css";
import { projName, lists } from "../data/mock-data";

const ProjectBoard = () => {
    const [addList, setAddList] = useState(false);

    const handleAddList = () => {
        setAddList(true);
    };

    return (
        <div className={style.projectBoard}>
            {/* <div className={style.navBar}>
                <h1>{projName}</h1>
            </div> */}
            <div className={style.columnsContainer}>
                {lists.map((list, idx) => {
                    return <ListColumn key={idx} listTitle={list.title} />;
                })}

                {addList ? (
                    <AddListForm setAddList={setAddList} />
                ) : (
                    <button onClick={handleAddList}>Add a List</button>
                )}
            </div>
        </div>
    );
};

export default ProjectBoard;

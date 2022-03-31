<<<<<<< HEAD
import React, { useState } from "react";
import NavigationBar from "../components/NavigationBar";
import ListColumn from "../components/ListColumn";
import AddListForm from "../components/AddListForm";
import style from "./ProjectBoardView.module.css";
import { projName, lists } from "../data/mock-data";
=======
import React, {useState} from 'react'
import ListColumn from '../components/ListColumn';
import { projName, lists } from '../data/mock-data';
import style from './ProjectBoardView.module.css';
import AddListForm from '../components/AddListForm';
import EditOne from './EditOne';
>>>>>>> ac16b7ebd70a0d9408d7cb97b8342c836a4198ab

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
            {/* <div className={style.navBar}>
                <h1>{projName}</h1>
            </div> */}
            <div className={style.columnsContainer}>
                {lists.map((list, idx) => {
<<<<<<< HEAD
                    return <ListColumn key={idx} listTitle={list.title} />;
=======
                    return (
                        <ListColumn key={idx} listTitle={list.title} setShowId={setShowId}/>
                    )
>>>>>>> ac16b7ebd70a0d9408d7cb97b8342c836a4198ab
                })}

                {addList ? (
                    <AddListForm setAddList={setAddList} />
                ) : (
                    <button onClick={handleAddList}>Add a List</button>
                )}
            </div>
            {showId > -1 && <EditOne indexKey={showId} setShowId={setShowId}/>}
            
        </div>
    );
};

export default ProjectBoard;

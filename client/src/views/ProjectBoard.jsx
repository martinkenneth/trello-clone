import React from 'react'
import ListColumn from '../components/ListColumn';
import { lists } from '../data/mock-data';
import style from './ProjectBoardView.module.css';

const ProjectBoard = () => {
    return (
        <div className={style.projectBoard}>
            <div className={style.navBar}>
                <h1>Project Name Testing Testing</h1>
                <button>Add a List</button>
            </div>
            <div className={style.columnsContainer}>
                {lists.map((list, idx) => {
                    return (
                        <ListColumn key={idx} listTitle={list.title}/>
                    )
                })}
            </div>
        </div>
    )
}

export default ProjectBoard;
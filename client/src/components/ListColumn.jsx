import React from 'react'
import style from './ListColumnComponent.module.css';
import { items } from '../data/mock-data';
import Item from './Item';

const ListColumn = (props) => {
    const {listTitle} = props;
    return (
        <div className={style.listColumn}>
            <h3>{listTitle}</h3>
            {items.filter((oneItem) => oneItem.list === listTitle).map((oneItem, idx) => {
                return (
                    <Item key={idx} item={oneItem}/>
                )
            })}
            <div className={style.addButton}>
                <p>+ Add a task</p> 
            </div>
        </div>
    )
}

export default ListColumn;
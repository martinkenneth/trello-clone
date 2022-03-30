import React from 'react'
import style from './ItemComponent.module.css';

const Item = (props) => {
    const {item} = props;
    return (
        <div className={style.item}>
            <p>{item.title}</p>
        </div>
    )
}

export default Item;
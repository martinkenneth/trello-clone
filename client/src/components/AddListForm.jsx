import React from "react";
import style from "./AddListForm.module.css";

const AddListForm = (props) => {
    const handleSubmission = (e) => {
        e.preventDefault();
        props.setAddList(false);
    };

    const handleCancel = () => {
        props.setAddList(false);
    };

    return (
        <div className={style.AddListForm}>
            <form onSubmit={handleSubmission}>
                <input
                    type="text"
                    name="listTitle"
                    id="listTitle"
                    placeholder="Enter list title..."
                />
                {/* <input type="submit" value="Add List" /> */}
                <button onClick={() => handleCancel}>-</button>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default AddListForm;

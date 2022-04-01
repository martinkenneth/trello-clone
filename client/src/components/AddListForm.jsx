import React, { useState } from "react";
import style from "./AddListForm.module.css";
import axios from "axios";

const AddListForm = (props) => {
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmission = (e) => {
        console.log("Submit!");
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/lists/new", {
                title,
            })
            .then((res) => {
                console.log("creating new list in db");
                props.setAddList(false);
            })
            .catch((err) => {
                console.error(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message);
                }
                setErrors(errorArr);
            });
    };

    const handleCancel = () => {
        props.setAddList(false);
    };

    return (
        <div className={style.AddListForm}>
            {errors.map((err, idx) => (
                <p key={idx} style={{ color: "red" }}>
                    {err}
                </p>
            ))}
            <form onSubmit={handleSubmission}>
                <input
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Enter list title..."
                    onChange={(e) => setTitle(e.target.value)}
                />
                {/* <input type="submit" value="Add List" /> */}
                <button onClick={handleCancel}>-</button>
                <button type="submit">+</button>
            </form>
        </div>
    );
};

export default AddListForm;

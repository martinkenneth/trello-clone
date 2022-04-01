import React, { useState } from "react";
import axios from "axios";
import style from "./AddTaskForm.module.css";

const AddTaskForm = (props) => {
    const { list } = props;
    const [title, setTitle] = useState("");
    const [errors, setErrors] = useState([]);

    const handleSubmission = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:8000/api/items/new", {
                title,
                description: "",
                list,
            })
            .then((res) => {
                console.log("creating a new item in the database");
                props.setAddTask(false);
                setTitle("");
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
        console.log("Cancel");
        props.setAddTask(false);
    };
    return (
        <div className={style.AddTaskForm}>
            <form onSubmit={handleSubmission}>
                {errors.map((err, idx) => (
                    <p key={idx} style={{ color: "red" }}>
                        {err}
                    </p>
                ))}
                <input
                    type="text"
                    name="title"
                    id="title"
                    onChange={(e) => setTitle(e.target.value)}
                    placeholder="Enter a title for this task..."
                />
                <button onClick={handleCancel}>-</button>
                <button type="submit">+</button>
                {/* <input type="submit" value="Add Task" />
                <button onClick={handleCancel}>X</button> */}
            </form>
        </div>
    );
};

export default AddTaskForm;

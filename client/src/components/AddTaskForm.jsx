import React from 'react'

const AddTaskForm = (props) => {
    const handleSubmission = (e) => {
        e.preventDefault();
        props.setAddTask(false);
    }
    
    const handleCancel = () => {
        props.setAddTask(false);
    }
    return (
        <div>
            <form onSubmit={handleSubmission}>
                <input type="text" name="title" id="title" placeholder='Enter a title for this task...'/>
                <input type="submit" value="Add Task" />
                <button onClick={() => handleCancel}>X</button>
            </form>
        </div>
    )
}

export default AddTaskForm;
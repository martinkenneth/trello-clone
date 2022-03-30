import React from 'react'

const AddListForm = (props) => {
    
    const handleSubmission = (e) =>{
        e.preventDefault();
        props.setAddList(false);
    }
    
    const handleCancel = () =>{
        props.setAddList(false);
    }

    return (
        <div>
            <form onSubmit={handleSubmission}>
                <input type="text" name="listTitle" id="listTitle" placeholder='Enter list title...'/>
                <input type="submit" value="Add List" />
                <button onClick={() => handleCancel}>X</button>
            </form>
        </div>
    )
}

export default AddListForm;
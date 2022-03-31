import React, {useState} from 'react';
import { lists, items } from '../data/mock-data';

const EditOne = (props) => {
    const {indexKey, setShowId} = props;

    const [title, setTitle] = useState(items[indexKey].title);
    const [description, setDescription] = useState(items[indexKey].description);
    const [list, setList] = useState(items[indexKey].list);


    const handleSave = () => {
        console.log('SAVED!!!');
        setShowId(-1);
        // here is where we will have a PUT/update to axios
    }

    return (
        <div>
            <form onSubmit={handleSave}>
                <div className="inputDiv">
                    <label htmlFor="list">List: </label>
                    <select name="list" id="list" value={list} onChange={(e) => setList(e.target.value)}>
                        {lists.map((oneList, idx) => {
                            return (
                                <option key={idx} value={oneList.title}>{oneList.title}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="inputDiv">
                    <label htmlFor="title">Title: </label>
                    <input type="text" name="title" id="title" value={title} onChange={(e) => setTitle(e.target.value)}/>
                </div>
                <div className="inputDiv">
                    <label htmlFor="description">Description: </label>
                    <textarea name="description" id="description" value={description} onChange={(e) => setDescription(e.target.value)}/>
                </div>
                <button onClick={() => setShowId(-1)}>Cancel</button>
                <input type="submit" value="Save" />
            </form>
        </div>
    )
}

export default EditOne;
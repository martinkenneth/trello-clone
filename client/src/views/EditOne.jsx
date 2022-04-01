import React, {useState, useEffect} from 'react';
import axios from 'axios';
import {useHistory} from 'react-router-dom';

const EditOne = (props) => {
    const {showId, setShowId} = props;
    
    const [lists, setLists] = useState([]);

    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [list, setList] = useState('');

    const history = useHistory();

    const [errors, setErrors] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/items/' + showId)
            .then(res => {
                console.log('getting item by id from db');
                setTitle(res.data.item.title);
                setDescription(res.data.item.description);
                setList(res.data.item.list);
            })
            .catch(err => console.error(err));
    }, [showId]);

    useEffect(() => {
        axios.get('http://localhost:8000/api/lists')
            .then(res => {
                console.log('getting lists from db');
                setLists(res.data.lists);
            })
            .catch(err => console.error(err));
    }, []);

    const handleSave = (e) => {
        e.preventDefault();
        axios.put('http://localhost:8000/api/items/update/' + showId, {
            title,
            description,
            list
        })
            .then(res => {
                console.log('updating an item in the db')
                setShowId(-1);
                //history.push isn't working to rerender the project board to show the edits
                history.push('/');

            })
            .catch(err => {
                console.error(err.response.data.errors);
                const errorResponse = err.response.data.errors;
                const errorArr = [];
                for (const key of Object.keys(errorResponse)) {
                    errorArr.push(errorResponse[key].message)
                }
                setErrors(errorArr);
            });
    }

    return (
        <div>
            <form onSubmit={handleSave}>
                {errors.map((err, idx) => <p key={idx} style={{color: 'red'}}>{err}</p>)}
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
import React, { useState } from 'react';
import { states, counter } from '../Actions/Action';
import { useSelector, useDispatch } from 'react-redux';

function Data() {

    const [name, setName] = useState("");
    const [age, setAge] = useState("");

    const [data, setData] = useState( [] );

    const dispatch = useDispatch();

    const state = useSelector((state) => state.student);
    const count = useSelector((state) => state.count);

    const InputFunc = (e) => {
        const fieldName = e.target.name;
        const value = e.target.value;
        
    }

    const addStudent = (e) => {
        e.preventDefault();
        setData([...data, {Id: count, Name: name, Age: age}]);
        dispatch(states(data));
        dispatch(counter(count));
        setName("");
        setAge("");
    }
 console.log(count);
    console.log(state);

    return (
 
        <>
        <h1> Welcome to ABC Schools </h1>
        <h2> Enter student datas in below form</h2>

        <form  onSubmit = {addStudent}>

            Name:  <input type='text' placeholder='Enter your name' name='name' value={name}  onChange={(e) => setName(e.target.value)} />
            Age: <input type='number' placeholder='Enter your age' name='age' value={age} onChange={(e) => setAge(e.target.value)} />

            <button type='submit' > Submit </button>

        </form>

     

    </> 

    )

}

export default Data;
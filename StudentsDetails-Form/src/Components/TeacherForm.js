import React, { useState } from 'react';
import { statesT, counterT, showFormT } from '../Actions/Action';
import CheckBox from './CheckBox';
import { useSelector, useDispatch } from 'react-redux';
// import { Formik, Form, Field } from 'formik';

function TeacherForm(props) {

    const [name, setName] = useState("");
    const [standard, setClass] = useState([]);
    const [subject, setSubject] = useState("");
    const [status, setStatus] = useState("");
    const [phone, setPhone] = useState("");

    const stateT = useSelector((state) => state.teacher)
    const count = useSelector((state) => state.countT);
    const dispatch = useDispatch();




    const addStudent = (e) => {
        e.preventDefault();
        dispatch(statesT([...stateT, { Id: count, Name: name, Class: standard, Subject: subject, Status: status, Phone: phone }]));
        console.log("Data = ", stateT.length);
        dispatch(counterT(count));
        setName("");
        setClass("");
        setSubject("");
        setStatus("");
        setPhone("");
        myFunc();


    }

    let [checkStatus, setCheck] = useState(false);

    const addSubject = (subjects) => {
        setSubject(subjects);
    }

    const addClass = (classes) => {
        setClass(classes);
    }



    const myFunc = (e) => {

        setCheck(true);
        dispatch(showFormT(false));
        props.changeField("")
    }

    return (<>

        {(!props.status) ?
            (

                <>
                    <h2> Enter Teacher{stateT.length + 1} Datas : </h2>
                    {<form name="myForm" onSubmit={addStudent}>

                        Name:  <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e) => setName(e.target.value)} /> <br />

                        <CheckBox status={checkStatus} changeCheck={setCheck} subject={subject} subValue={addSubject} standard={standard} classValue={addClass} />

                        Status:
                        <input type='radio' name='status' value='Available' onChange={(e) => setStatus(e.target.value)} /> <label>Available </label>
                        <input type='radio' name='status' value='UnAvailable' onChange={(e) => setStatus(e.target.value)} /> <label>Un-Available </label> <br />

                        Phone: <input type='number' placeholder='Enter your phone number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />


                        <button type='submit' > Submit </button> <br />

                    </form>}</>

            ) : ""
        }
    </>
    )

}

export default TeacherForm;






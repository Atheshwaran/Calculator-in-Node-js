import React, { useState, useEffect } from 'react';
import TeacherForm from './TeacherForm';
import StudentForm from './StudentForm';
import DisplayTeachers from './DisplayTeachers';
import DisplayStudents from './DisplayStudents';
import { showFormT, showFormS, counterT, statesT } from '../Actions/Action';
import { useSelector, useDispatch } from 'react-redux';



function Data() {


    const dispatch = useDispatch();


    const stateT = useSelector((state) => state.teacher);
    const stateS = useSelector((state) => state.student);
    const showTeacher = useSelector((state) => state.showT);
    const showStudent = useSelector((state) => state.showS);

    const [allData, setValue] = useState(false);



    // const names = useSelector((state) => state.name);

    let [field, setField] = useState("");

    useEffect(() => {
        console.log(stateT);
    }, [stateT])

    useEffect(() => {
        console.log(stateS);
    }, [stateS])

    const getData = (option) => {
        setField((option === 'Teacher') ? "Teacher" : (option === 'Student') ? "Student" : "");
        console.log(field);
        if (field === 'Teacher') {
            dispatch(showFormT(true));

        }
        if (field === 'Student') {
            dispatch(showFormS(true));
        }
        // setTimeout(() => {
        console.log("dispT 2 = ", showTeacher);
        console.log("dispS 2 = ", showStudent);
        // }, 1000)

    }

    const handler = (e) => {
        getData(e.target.value);
    }


    const arr = ["Select", "Teacher", "Student"]
    // let [result, setResult] = useState("");

    const displayData = () => {
        setValue('true');
    }

    return (

        <>
            <h1> Welcome to ABC Schools </h1>

            {
                (!allData) ?
                    (<>
                        <select onClick={handler}  >{
                            arr.map((roll, index) => {
                                return (<option value={roll}> {roll} </option>)
                            })
                        }

                        </select>

                        <button type='submit' onClick={displayData} > Finish </button>
                    </>) : ""
            }


            {console.log("dispT 1= ", showTeacher)}
            {console.log("dispS 1= ", showStudent)}

            {field === 'Teacher' && showTeacher ? <TeacherForm status={allData} changeField={setField} /> : ""}
            {field === 'Student' && showStudent ? <StudentForm status={allData} changeField={setField} /> : ""}


            {console.log(allData)}
            {(allData) ? <DisplayTeachers /> : ""}
            {allData ? <DisplayStudents /> : ""}


        </>

    )

}

export default Data;
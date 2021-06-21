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
    const count = useSelector((state) => state.countT);

    const [allData, setValue] = useState(false);




    // const names = useSelector((state) => state.name);

    let field;

    useEffect(() => {
        console.log(stateT);
    }, [stateT])

    useEffect(() => {
        console.log(stateS);
    }, [stateS])

    const getData = (option) => {
        field = (option === 'Teacher') ? "Teacher" : (option === 'Student') ? "Student" : "";
        console.log(field);
        if (field === 'Teacher'){
            dispatch(showFormT(!showTeacher));
          }
        if (field === 'Student'){
            dispatch(showFormS(!showStudent));
           }
        setTimeout(() => {
            console.log("dispT 2 = ", showTeacher);
            console.log("dispS 2 = ", showStudent);
        }, 1000)

    }

    const handler = (e) => {
        getData(e.target.value);
    }

    // const ShowForm = () =>{
    //     if(field === 'Teacher')
    //     return (<div > <TeacherForm /> </div>)
    //     else if(field === 'Student')
    //     return <StudentForm />
    // }

    // console.log(Components);


    const displayData = () => {
        setValue('true');
    }

    return (

        <>
            <h1> Welcome to ABC Schools </h1>

            {
                (!allData) ?
                    (<>
                        <select onChange={handler} >
                            <option> select </option>
                            <option value='Teacher'  > Teacher </option>
                            <option value='Student' > Student </option>
                        </select>

                        <button type='submit' onClick={displayData} > Finish </button>
                    </>) : ""
            }

            {/* {ShowForm} */}
            {/* <div> <Field /> </div> */}

            {/* {console.log(showTeacher)} */}

            {console.log("dispT 1= ", showTeacher)}
            {console.log("dispS 1= ", showStudent)}

            {showTeacher ? <TeacherForm status={allData} /> : ""}
            {showStudent ? <StudentForm status={allData} /> : ""}


            {console.log(allData)}
            {(allData) ? <DisplayTeachers /> : ""}
            {allData ? <DisplayStudents /> : ""}


        </>

    )

}

export default Data;
import React, { useState } from 'react';
import { statesS, counterS } from '../Actions/Action';
import { useSelector, useDispatch } from 'react-redux';


function StudentForm(props) {

    const [name, setName] = useState("");
    const [standard, setClass] = useState("");
    const [dob, setDob] = useState("");
    const [age, setAge] = useState("");
    const [phone, setPhone] = useState("");
    const [data, setData] = useState([]);

    const stateS = useSelector((state) => state.student)
    const count = useSelector((state) => state.countS);

    const dispatch = useDispatch();


    const addStudent = (e) => {
        e.preventDefault();
        //dispatch(states([...data]));
        // setData([...data, { Id: count, Name: name, Class: standard, Dob: dob, Age: age, Phone: phone }]);
        dispatch(statesS([...stateS, { Id: count, Name: name, Class: standard, Dob: dob, Age: age, Phone: phone }]));
        console.log("DataS = ", stateS.length);
        // console.log("DataS = ", data);
        dispatch(counterS(count));
        setName("");
        setClass("");
        setDob("");
        setAge("");
        setPhone("");
    }



    return (<>
        {(!props.status) ?
            (
                <>
                    <h2> Enter Student{stateS.length + 1} Datas : </h2>
                    <form onSubmit={addStudent}>

                        Name:  <input type='text' placeholder='Enter your name' name='name' value={name} onChange={(e) => setName(e.target.value)} />
                        Class: <input type='number' placeholder='Enter your class' name='standard' value={standard} onChange={(e) => setClass(e.target.value)} />
                        Dob: <input type='date' placeholder='Enter your dob' name='dob' value={dob} onChange={(e) => setDob(e.target.value)} /> <br />
                        Age: <input type='number' placeholder='Enter your age' name='age' value={age} onChange={(e) => setAge(e.target.value)} />
                        Phone: <input type='number' placeholder='Enter your phone number' name='phone' value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />

                        <button type='submit' > Submit </button>

                    </form> </>
            ) : ""
        }


    </>
    )

}

export default StudentForm;






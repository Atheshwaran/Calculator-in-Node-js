import React, { useState } from 'react';
import { states, counter } from '../Actions/Action';
import { useSelector, useDispatch } from 'react-redux';

function Form() {

    const [student, setValue] = useState(
        {
            name: '',
            standard: '',
            dob: '',
            age: '',
            phone: '',
            students: []
        })

    const dispatch = useDispatch();


    console.log(student.name);


    const state = useSelector((state) => state.student);
    const count = useSelector((state) => state.count)

    // let names, standards, dobs, ages, phones;

    const InputFunc = (e) => {

        const fieldName = e.target.name;
        const value = e.target.value;
        setValue({ [fieldName]: value });
        //     if(fieldName === 'name')
        //     names = value;
        //     else if(fieldName === 'standard')
        //     standards = value;
        //     else if(fieldName === 'dob')
        //     dobs = value;
        //     else if(fieldName === 'age')
        //     ages = value;
        //     else 
        //     phones = value;
    }





    // const Form = () => {

    //     return (
    //         <form>

    //             Name:  <input type='text' onKeyDown={keyPress} placeholder='Enter your name' onChange={NameFunc} />
    //             Class: <input type='number' onKeyDown={keyPress} placeholder='Enter your class' onChange={StandardFunc} />
    //             Dob: <input type='date' onKeyDown={keyPress} placeholder='Enter your dob' onChange={DobFunc} />
    //             Age: <input type='number' onKeyDown={keyPress} placeholder='Enter your age' onChange={AgeFunc} />
    //             Phone: <input type='number' onKeyDown={keyPress} placeholder='Enter your phone number' onChange={PhoneFunc} />

    //             <button type='submit'> Submit </button>

    //         </form>
    //     )
    // }



    const keyPress = (e) => {

        if (e.keyCode === 13) {
            e.preventDefault();
            
        }
    }

    const UpdateFunc = (e) => {

        e.preventDefault();
        //dispatch(states(student));

        const name = student.name;
        const standard = student.standard;
        const dob = student.dob;
        const age = student.age;
        const phone = student.phone;

        console.log(name);

        const obj = { id: count, name, standard, dob, age, phone };

        console.log("obj = ",obj);

        setValue({
            students: [...student.students, obj]
        });
        // console.log(student.students);
        dispatch(states(student.students))
        dispatch(counter());
        setValue({
            name: '',
            standard: '',
            dob: '',
            age: '',
            phone: '',
            students: [...student.students, obj]
        })

    }

    console.log(state);

    return (
        <>
            <h1> Welcome to ABC Schools </h1>
            <h2> Enter student datas in below form</h2>
            {/* <div> <Form /> </div> */}

            <form onSubmit={UpdateFunc} >

                Name:  <input type='text' onKeyDown={keyPress} placeholder='Enter your name' name='name' value={student.name} onChange={InputFunc} />
                Class: <input type='number' onKeyDown={keyPress} placeholder='Enter your class' name='standard' value={student.standard} onChange={InputFunc} />
                Dob: <input type='date' onKeyDown={keyPress} placeholder='Enter your dob' name='dob' value={student.dob} onChange={InputFunc} />
                Age: <input type='number' onKeyDown={keyPress} placeholder='Enter your age' name='age' value={student.age} onChange={InputFunc} />
                Phone: <input type='number' onKeyDown={keyPress} placeholder='Enter your phone number' name='phone' value={student.phone} onChange={InputFunc} />

                <button type='submit' > Submit </button>

            </form>

            {/* {console.log(state)} */}

        </>
    )

}

export default Form;






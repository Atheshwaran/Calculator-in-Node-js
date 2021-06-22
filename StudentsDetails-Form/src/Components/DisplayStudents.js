import React, { useState } from 'react';
import Table from './Data.css';
import { useSelector } from 'react-redux';

function DisplayStudents() {

    const stateS = useSelector((state) => state.student);
    const [result, setResult] = useState("");

    const getData = (index) => {
        setResult(stateS[index]);
        console.log(result);
    }

    const handler = (e) => {
        getData(e.target.value);
    }

    if (result === "" && stateS.length > 0)
        setResult(stateS[0])

    return (
        <div id="student">
            <>
                <h4> Get students details here </h4>

                <div>
                    {
                        <select onChange={handler}>{
                            stateS.map((student, index) => {

                                return (<option value={index} > {student.Name} </option>)

                            })
                        }
                        </select>
                    }
                </div>

                {
                    <table className={Table} >
                        <tbody>
                            <tr>
                                <th>Id</th>
                                <th>Name</th>
                                <th>Class</th>
                                <th>Dob</th>
                                <th>Age</th>
                                <th>Phone</th>
                            </tr>


                            <tr className={Table}  >
                                <td > {result.Id} </td>
                                <td > {result.Name} </td>
                                <td > {result.Class} </td>
                                <td > {result.Dob} </td>
                                <td > {result.Age} </td>
                                <td > {result.Phone} </td>
                            </tr>
                        </tbody>

                    </table>

                }
            </>
        </div>
    )

}


export default DisplayStudents;
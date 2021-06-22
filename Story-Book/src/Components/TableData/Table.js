import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';

function Table(props) {


    let { User, Description } = props;

    let text;

    console.log(User);

    if (User.length === 0)
        text = (Description !== '') ? Description : 'No entries found';


    return (
        <>
            <table >
                <tbody>
                    <tr>
                        <th>Firstname</th>
                        <th>Lastname</th>
                        <th>Age</th>
                    </tr>

                    {
                        User.map((data, index) => {

                            return (
                                <tr key={index}>
                                    <td>{data.firstName}</td>
                                    <td>{data.lastName}</td>
                                    <td>{data.age}</td>
                                </tr>
                            )
                        })
                    }

                </tbody>

            </table>

            {text}

           
        </>
    )

}


Table.defaultProps = { User: [], Description: '' };

Table.propTypes = {

    User: PropTypes.array,
    Description: PropTypes.string

}

export default Table;
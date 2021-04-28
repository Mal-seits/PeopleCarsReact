import React from 'react';
import { Link } from 'react-router-dom';

export default function PersonRow({ person }) {

    let { firstName, lastName, age, id } = person;
    
    return (
        <tr>
            <td>
                {firstName}
            </td>
            <td>
                {lastName}
            </td>
            <td>
                {age}
            </td>
            <td>
                {person.cars.length}
            </td>
            <td>
                <Link to={`/AddCar/${id}`}>
                    <button className='btn btn-success btn-block'>Add Car</button>
                </Link>

            </td>
            <td>
                <Link to={`/DeleteCars/${id}`}>
                    <button  className='btn btn-warning btn-block'>Delete Car</button>
                </Link>


            </td>
        </tr>
    )
}
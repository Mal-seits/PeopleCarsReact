import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import { Link } from 'react-router-dom';
import PersonRow from './PersonRow';
import AddPerson from './AddPerson';
class PeopleTableDisplay extends React.Component {

    state = {
        people: [],
        person: {
            firstName: '',
            lastName: '',
            age: '',
            cars: []
        },
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
        }
        
    }

    componentDidMount = async () => {
        await this.GetAllPeople();

    }
    GetAllPeople = async () => {
        let { data } = await axios.get('/api/PeopleCars/GetAllPeople');

        this.setState({ people: data })

    }
    

    render() {
        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <Link to={'/AddPerson'}>
                            <button className='btn btn-info btn-block'>ADD A PERSON</button>
                        </Link>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-hover table-bordered table-striped'>
                            <thead>
                                <tr>
                                    <th>
                                        First Name
                                    </th>
                                    <th>
                                        Last Name
                                   </th>
                                    <th>
                                        Age
                                  </th>
                                    <th>
                                        Car Count
                                   </th>
                                    <th>
                                        Add Cars
                                  </th>
                                    <th>
                                        Delete Cars
                                    </th>

                                </tr>
                            </thead>
                            <tbody>

                                {this.state.people.map((person) => <PersonRow key={person.id} person={person}></PersonRow>)}
                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        )
    }
}
export default PeopleTableDisplay;
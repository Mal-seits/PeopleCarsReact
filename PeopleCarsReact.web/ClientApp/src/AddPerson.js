import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

class AddPerson extends React.Component {

    state = {
        person: {
            firstName: '',
            lastName: '',
            age: ''
        },
        isAdding: false

    }
    onTextChange = e => {
        let person = { ...this.state.person };
        person[e.target.name] = e.target.value;
        this.setState({ person });

    }
    onAddPersonClick = async () => {
        let isAdding = { ...this.state };
        isAdding = true;
        this.setState({ isAdding })
        await axios.post('/api/peoplecars/addperson', this.state.person);
        this.props.history.push('/');
    }
    render() {
        let { firstName, lastName, age } = this.state.person;
        
        return (

            <div className="row">
                <div className="col-md-6 offset-md-3 card card-body bg-light">
                    <h3>Add a new person</h3>
                    <input type="text" name='firstName' onChange={this.onTextChange} className="form-control" placeholder="First Name" />
                    <br />
                    <input type="text" name='lastName' onChange={this.onTextChange} className="form-control" placeholder="Last Name" />
                    <br />
                    <input type="text" name='age' onChange={this.onTextChange} className="form-control" placeholder="Age" />
                    <br />
                    <button disabled={this.state.isAdding} onClick={this.onAddPersonClick} className="btn btn-success btn-block">Add person</button>
                </div>
            </div>
        );
    }

}
export default AddPerson;
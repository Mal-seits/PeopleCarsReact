import React from 'react';
import axios from 'axios';

class AddCar extends React.Component {

    state = {
        car: {
            make: '',
            model: '',
            year: '',
            personId: ''
        },
        person: {
            firstName: '',
            lastName: ''
        }
    }
    componentDidMount = async () => {
        let { id } = this.props.match.params;
        let { data } = await axios.get(`/api/peoplecars/getpersonbyid?id=${id}`);
        let personData = data;
        let person = {
            firstName: personData.firstName,
            lastName: personData.lastName
        }
        let car = { ...this.state.car };
        car.personId = id;
        this.setState({ car, person });


    }
    onTextChange = e => {
        let car = { ...this.state.car };
        car[e.target.name] = e.target.value;
        this.setState({ car });
        
    }
    onAddClick = async () => {
   
        await axios.post('/api/PeopleCars/addCar', this.state.car);
        this.props.history.push('/');
    }
    render() {

        let { firstName, lastName } = this.state.person;
        return (
            <div className='container'>

                <div className="row">
                    <div className="col-md-6 offset-md-3 card card-body bg-light">
                        <h2>Add a car for {firstName} {lastName}</h2>
                        <input type="text" onChange={this.onTextChange} className="form-control" name="make" placeholder="Make" value={this.state.car.make} />
                        <br />
                        <input type="text" onChange={this.onTextChange} className="form-control" name="model" placeholder="Model" value={this.state.car.model} />
                        <br />
                        <input type="text" onChange={this.onTextChange} className="form-control" name="year" placeholder="Year" value={this.state.car.year} />
                        <br />
                        <button onClick={this.onAddClick} className="btn btn-primary btn-lg btn-block">Submit</button>
                    </div>
                </div>
            </div>

        );
    }


}
export default AddCar;
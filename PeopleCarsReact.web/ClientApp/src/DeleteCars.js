import React from 'react';
import { render } from 'react-dom';
import axios from 'axios';


class DeleteCars extends React.Component {

    state = {
        cars: [],
        id: ''

    }
    componentDidMount = async () => {
        let { id } = this.props.match.params;
        let { data } = await axios.get(`/api/peoplecars/getcarsforperson?id=${id}`);
        this.setState({ cars: data, id: id});
      

    }
    onCancelClick = () => {
        let cars = { ...this.state.cars };
        cars = [];
        this.setState({ cars });
        this.props.history.push("/");
    }
    onDeleteCarsClick = async () => {
        let id = this.state.id;
        
        await axios.post(`/api/peoplecars/deletecarsforperson?id=${id}` );
        this.props.history.push("/");
        
    }
    render() {


        return (
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12'>
                        <table className='table table-hover table-bordered table-striped mt-5'>
                            <thead>
                                <tr>
                                    <th>
                                        Make
                                  </th>
                                    <th>
                                        Model
                                  </th>
                                    <th>
                                        Year
                                  </th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.cars.map((car) => {
                                    return (

                                        <tr>
                                            <td>
                                                {car.make}
                                            </td>
                                            <td>
                                                {car.model}
                                            </td>
                                            <td>
                                                {car.year}
                                            </td>

                                        </tr>
                                    )
                                })}
                            </tbody>
                        </table>


                    </div>
                </div>
                <div className='row'>
                    <div className='col-md 12'>
                        <h3>ARE YOU SURE YOU WANT TO DELETE ALL CARS?</h3>
                        <button onClick={this.onCancelClick} className='btn btn-warning'>No, Forget it</button>

                        <button onClick={this.onDeleteCarsClick} className='btn btn-danger ml-5'>Yes, I am sure</button>
                    </div>
                </div>
            </div>
        )
    }

}
export default DeleteCars;
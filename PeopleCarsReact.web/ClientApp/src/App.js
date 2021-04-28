import React from 'react';
import { Route } from 'react-router-dom';
import PeopleTableDisplay from './PeopleTableDisplay';
import AddCar from './AddCar';
import DeleteCars from './DeleteCars';
import AddPerson from './AddPerson'

const App = () => {
    return (
        <div>
            <Route exact path='/' component={PeopleTableDisplay} />
            <Route exact path='/AddCar/:id' component={AddCar} />
            <Route exact path='/DeleteCars/:id' component={DeleteCars} />
            <Route exact path='/AddPerson' component={AddPerson} />

        </div>
    )
}

export default App;
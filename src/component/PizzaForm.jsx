import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class PizzaForm extends Component{

    componentWillMount() {

    }

    render() {
        return (
        <div className="pizza-form">
            <h3>Total Calculated</h3>
            <Form>


            </Form>
        </div>
    );
    }
}

PizzaForm.propTypes = {
    pizza: PropTypes.object,
    addPizza: PropTypes.func,
};

export default PizzaForm;

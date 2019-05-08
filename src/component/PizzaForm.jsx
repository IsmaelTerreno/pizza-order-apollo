import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, Button } from 'react-bootstrap';

class PizzaForm extends Component{

    componentWillMount() {

    }

    render() {
        const { pizza } = this.props;
        console.log(pizza);
        return (
        <div className="pizza-form">
            <h3>Total Calculated</h3>
            <Form>

                <Button variant="primary" type="submit">
                    Submit Order
                </Button>
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

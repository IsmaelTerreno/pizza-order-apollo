import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Table } from 'react-bootstrap';
import ToppingSelector from "./ToppingSelector";

class PizzaList extends Component{

    componentWillMount() {
        this.props.loadPizzas();
    }

    render() {
        const { pizzas } = this.props;
        return (
            <div className="pizza-list">
                <Table striped bordered hover>
                    <thead>
                    <tr>
                        <th>#</th>
                        <th>Name - Price</th>
                        <th>Max Toppings</th>
                        <th>Toppings - Price</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        pizzas &&
                        pizzas.map((pizza, idx) => {
                            const { name, basePrice, maxToppings, toppings} = pizza;
                            return (
                                <tr className="pizza-list__item" key={"pizza-item"+idx} >
                                    <td>
                                        {idx + 1}
                                    </td>
                                    <td>
                                        {name} - ${basePrice}
                                    </td>
                                    <td>
                                        {(maxToppings) ? maxToppings :'Unlimited'}
                                    </td>
                                    <td>
                                        <ToppingSelector
                                            maxToppings={maxToppings}
                                            toppings={toppings}
                                            onChangeTopping={(updatedToppings) =>{

                                            }}
                                        />
                                    </td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </Table>
            </div>
        );
    }
}

PizzaList.propTypes = {
    pizzas: PropTypes.array,
    loadPizzas: PropTypes.func,
};

export default PizzaList;

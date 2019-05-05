import React, { Component } from 'react';
import PropTypes from 'prop-types';

class PizzaList extends Component{

    componentWillMount() {
        this.props.loadPizzas();
    }

    render() {
        const { pizzas } = this.props;
        return (
            <div className="pizza-list">
                {
                    pizzas &&
                    pizzas.map((pizza, idx) => {
                        return (
                            <p className="pizza-list__item" key={"pizza-item"+idx}>{pizza.name}</p>
                        );
                    })
                }
            </div>
        );
    }
}

PizzaList.propTypes = {
    pizzas: PropTypes.array,
    loadPizzas: PropTypes.func,
};

export default PizzaList;

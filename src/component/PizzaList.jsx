import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import { newCopy } from '../utils/utils'
class PizzaList extends Component{

    componentWillMount() {
        this.props.loadPizzas();
    }

    onClickPizza= (pizza) => {
        const selectedPizza = newCopy( pizza );
        const selectedToppings = newCopy( pizza.toppings );
        this.props.setCurrentPizzaOrder(selectedPizza);
        this.props.updateToppingOrder(selectedToppings);
    };

    render() {
        const { pizzas } = this.props;
        const hasPizzas = pizzas && pizzas.length > 0;
        return (
            <div className="pizza-menu-list">
                {
                    hasPizzas &&
                    <h3>Sizes</h3>
                }
                {
                    !hasPizzas &&
                    <h1>Loading pizzas for you :)...</h1>
                }
                {
                    hasPizzas &&
                    pizzas.map((pizza, idx) => {
                        const { name, basePrice} = pizza;
                        return (
                            <Fragment key={"pizza-item"+idx} >
                                <Button
                                    variant="primary"
                                    size="lg"
                                    block
                                    onClick={()=>this.onClickPizza(pizza)}
                                >
                                    {name.toUpperCase()} - ${basePrice}
                                </Button>
                            </Fragment>
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
    addPizzaOrder: PropTypes.func,
    setCurrentPizzaOrder: PropTypes.func,
    updateToppingOrder: PropTypes.func,
};

export default PizzaList;

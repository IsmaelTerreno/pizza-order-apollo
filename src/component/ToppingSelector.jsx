import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

class ToppingSelector extends Component{

    handleChange = (event) => {
        const { target:{checked, id} } = event;
        const { setCurrentPizzaOrder, currentPizza, updateToppingOrder, toppings } = this.props;
        const toppingsToUpdate = toppings.slice();
        const indexTopping = id.split('-')[1];
        toppingsToUpdate[indexTopping].defaultSelected = checked;
        const updatedToppings = toppingsToUpdate.slice();
        updateToppingOrder(updatedToppings);
        const pizzaUpdated = Object.assign({}, currentPizza);
        pizzaUpdated.toppings = updatedToppings;
        setCurrentPizzaOrder(pizzaUpdated);
    };
    isDisabled = (isMaxAlready, defaultSelected) =>{
        if (isMaxAlready && defaultSelected){
            return false;
        } else if (isMaxAlready && !defaultSelected){
            return true;
        }
        return false;
    };
    render() {
        const { currentPizza:{maxToppings},toppings } = this.props;
        const selectedCount = toppings && toppings.filter(item => item.defaultSelected).length;
        const isMaxAlready = !(selectedCount < maxToppings) && (maxToppings);
        return (
            <div className="topping-selector">

                {
                    toppings &&
                    toppings.map((pizzaTopping, idx2) => {
                        const { pizzaSize,topping:{name, price}, defaultSelected } = pizzaTopping;
                        return(
                            <Form.Check
                                type="checkbox"
                                key={"topping" + idx2 }
                                id={`topping-${idx2}-${pizzaSize.name.trim()}`}
                                label={`${name} - ${price}`}
                                checked={defaultSelected}
                                onChange={this.handleChange}
                                disabled={this.isDisabled(isMaxAlready, defaultSelected)}
                            />
                        );
                    })
                }
            </div>
        );
    }
}

ToppingSelector.defaultProps = {
    currentPizza: {maxToppings: -1 },
    setCurrentPizzaOrder: (pizza) =>{},
    toppings: []
};

ToppingSelector.propTypes = {
    currentPizza: PropTypes.object,
    toppings: PropTypes.array,
    setCurrentPizzaOrder: PropTypes.func,
    updateToppingOrder: PropTypes.func,
};

export default ToppingSelector;

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form } from 'react-bootstrap';

class ToppingSelector extends Component{
    state = {
       allToppings:[]
    };
    componentWillMount() {
        const { toppings } = this.props;
        this.setState({
            allToppings: toppings
        });
    }
    handleChange = (event) => {
        const { target:{checked, id} } = event;
        const { onChangeTopping } = this.props;
        const toppings = this.state.allToppings.slice();
        const indexTopping = id.split('-')[1];
        toppings[indexTopping].defaultSelected = checked;
        const updatedToppings = toppings.slice();
        this.setState({
            allToppings: updatedToppings
        });
        onChangeTopping(updatedToppings);
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
        const { allToppings } = this.state;
        const { maxToppings } = this.props;
        const selectedCount = allToppings.filter(item => item.defaultSelected).length;
        const isMaxAlready = !(selectedCount < maxToppings) && (maxToppings);
        return (
            <div className="topping-selector">
                {
                    allToppings &&
                    allToppings.map((pizzaTopping, idx2) => {
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
    toppings: [],
    maxToppings: -1,
    onChangeTopping: (updatedToppings) =>{}
};

ToppingSelector.propTypes = {
    toppings: PropTypes.array,
    maxToppings: PropTypes.number,
    onChangeTopping: PropTypes.func
};

export default ToppingSelector;

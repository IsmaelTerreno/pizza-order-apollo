import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Button } from 'react-bootstrap';
import ToppingSelector from "../container/ToppingSelectorContainer";

class PizzaList extends Component{

    componentWillMount() {
        this.props.loadPizzas();
    }

    onClickPizza= (pizza) => {
        this.props.setCurrentPizzaOrder(pizza);
    };

    render() {
        const { pizzas } = this.props;
        return (
            <div className="pizza-menu-list">
                {
                    pizzas &&
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
                <ToppingSelector />
            </div>
        );
    }
}

PizzaList.propTypes = {
    pizzas: PropTypes.array,
    loadPizzas: PropTypes.func,
    addPizzaOrder: PropTypes.func,
    setCurrentPizzaOrder: PropTypes.func,
};

export default PizzaList;

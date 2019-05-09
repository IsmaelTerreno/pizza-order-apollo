import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'react-bootstrap';

const ActionButtons = ({addPizzaOrder, currentPizza}) =>{
    return (
        <div className="action-buttons">
            {currentPizza && currentPizza.name &&
            <Button onClick={() => addPizzaOrder(currentPizza)} variant="primary" type="submit">
                Add to Cart
            </Button>}
        </div>
    );
};

ActionButtons.defaultProps = {
    currentPizza: null,
    addPizzaOrder: (pizza) =>{}
};

ActionButtons.propTypes = {
    currentPizza: PropTypes.object,
    addPizzaOrder: PropTypes.func
};

export default ActionButtons;

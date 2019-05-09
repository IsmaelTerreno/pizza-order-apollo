import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';

const TotalOrder = ({pizzaOrderList}) =>{
    const hasPizzasOrders = pizzaOrderList && pizzaOrderList.length > 0;
    return (
        <div className="total-order">
            { hasPizzasOrders && <h3>Total Order</h3> }
            { hasPizzasOrders &&
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
                    pizzaOrderList &&
                    pizzaOrderList.map((pizza, idx) => {
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
                                    {
                                        toppings.filter((item) => item.defaultSelected)
                                        .map((toppingItem)=>{
                                            return toppingItem.topping.name+", ";
                                        })
                                    }
                                </td>
                            </tr>
                        );
                    })
                }
                </tbody>
            </Table>
            }
        </div>
    );
};

TotalOrder.defaultProps = {
    pizzaOrderList: []
};

TotalOrder.propTypes = {
    pizzaOrderList: PropTypes.array
};

export default TotalOrder;

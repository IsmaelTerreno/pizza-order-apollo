import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'react-bootstrap';

const TotalOrder = ({pizzaOrderList}) =>{
    const hasPizzasOrders = pizzaOrderList && pizzaOrderList.length > 0;
    let totalOrder = 0;
    return (
        <div className="total-order">
            { hasPizzasOrders && <h3>Order Details</h3> }
            { hasPizzasOrders &&
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name - Price</th>
                        <th>Toppings - Price</th>
                        <th>Sub Total</th>
                    </tr>
                </thead>
                <tbody>
                {
                    pizzaOrderList &&
                    pizzaOrderList.map((pizza, idx) => {
                        const { name, basePrice, toppings} = pizza;
                        const toppingsSelected = toppings.filter((item) => item.defaultSelected);
                        const sumToppings = (accumT, priceT) => accumT + priceT;
                        const toppingsTotal = toppingsSelected.map((item) => item.topping.price).reduce(sumToppings,0);
                        const subTotal = basePrice + toppingsTotal;
                        totalOrder += subTotal;
                        return (
                            <tr className="pizza-list__item" key={"pizza-item"+idx} >
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {name} - ${basePrice.toFixed(2)}
                                </td>
                                <td>
                                    {
                                        toppingsSelected.map((toppingItem)=>{
                                            return (
                                                <p>{toppingItem.topping.name} - ${toppingItem.topping.price.toFixed(2)}</p>
                                            );
                                        })
                                    }
                                </td>
                                <td>
                                    ${subTotal.toFixed(2)}
                                </td>
                            </tr>
                        );
                    })
                }
                <tr>
                    <td colSpan={4}>
                        <strong>Total</strong>
                    </td>
                </tr>
                <tr>
                    <td colSpan={4}>
                        <strong>${totalOrder.toFixed(2)}</strong>
                    </td>
                </tr>
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

import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Button, Table} from 'react-bootstrap';
import './TotalOrder.scss';

const TotalOrder = ({pizzaOrderList, deletePizzaFromOrder}) =>{
    const hasPizzasOrders = pizzaOrderList && pizzaOrderList.length > 0;
    let totalOrder = 0;
    return (
        <div className="total-order">
            { hasPizzasOrders && <h3>Cart Details</h3> }
            { hasPizzasOrders &&
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name - Price</th>
                        <th>Toppings - Price</th>
                        <th>Sub Total</th>
                        <th>Action</th>
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
                            <tr className="pizza-order-list__item" key={"pizza-item"+idx} >
                                <td>
                                    {idx + 1}
                                </td>
                                <td>
                                    {name} - ${basePrice.toFixed(2)}
                                </td>
                                <td>
                                    {
                                        toppingsSelected.map((toppingItem, idx)=>{
                                            return (
                                                <p key={"topping-order-item-"+idx}>{toppingItem.topping.name} - ${toppingItem.topping.price.toFixed(2)}</p>
                                            );
                                        })
                                    }
                                </td>
                                <td>
                                    ${subTotal.toFixed(2)}
                                </td>
                                <td>
                                    <Fragment>
                                        <Button
                                            variant="danger"
                                            size="lg"
                                            block
                                            onClick={()=> {
                                                deletePizzaFromOrder(idx);
                                            }}
                                        >
                                            Delete
                                        </Button>
                                    </Fragment>
                                </td>
                            </tr>
                        );
                    })
                }
                <tr>
                    <td colSpan={5}>
                        <strong>Total ${totalOrder.toFixed(2)}</strong>
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
    pizzaOrderList: PropTypes.array,
    deletePizzaFromOrder:  PropTypes.func,
};

export default TotalOrder;

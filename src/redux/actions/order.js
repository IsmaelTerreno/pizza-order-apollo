export const ADD_PIZZA_ORDER = "ADD_PIZZA_ORDER";
export const ADD_PIZZA_ORDER_SUCCESS = "ADD_PIZZA_ORDER_SUCCESS";
export const ADD_PIZZA_ORDER_FAIL = "ADD_PIZZA_ORDER_FAIL";
export const UPDATE_TOPPING_ORDER = "UPDATE_TOPPING_ORDER";
export const SET_CURRENT_PIZZA_ORDER = "SET_CURRENT_PIZZA_ORDER";


export function setCurrentPizzaOrder(pizza) {
    return {
        type: SET_CURRENT_PIZZA_ORDER,
        payload: pizza
    };
}

export function updateToppingOrder(toppings) {
    return {
        type: UPDATE_TOPPING_ORDER,
        payload: toppings
    };
}

export function addPizzaOrder(pizza) {
    return {
        type: ADD_PIZZA_ORDER,
        payload: pizza
    };
}

export function addPizzaOrderSuccess() {
    return {
        type: ADD_PIZZA_ORDER_SUCCESS
    };
}

export function addPizzaOrderFail(message) {
    return {
        type: ADD_PIZZA_ORDER_FAIL,
        message
    };
}

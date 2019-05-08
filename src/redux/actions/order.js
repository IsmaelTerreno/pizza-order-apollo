export const ADD_PIZZA_ORDER = "ADD_PIZZA_ORDER";
export const ADD_PIZZA_ORDER_SUCCESS = "ADD_PIZZA_ORDER_SUCCESS";
export const ADD_PIZZA_ORDER_FAIL = "ADD_PIZZA_ORDER_FAIL";

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

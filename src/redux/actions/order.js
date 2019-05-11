export const ADD_PIZZA_ORDER = "ADD_PIZZA_ORDER";
export const UPDATE_TOPPING_ORDER = "UPDATE_TOPPING_ORDER";
export const SET_CURRENT_PIZZA_ORDER = "SET_CURRENT_PIZZA_ORDER";
export const DELETE_PIZZA_FROM_ORDER = "DELETE_PIZZA_FROM_ORDER";


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

export function deletePizzaFromOrder(indexToRemove) {
    return {
        type: DELETE_PIZZA_FROM_ORDER,
        payload: indexToRemove
    };
}


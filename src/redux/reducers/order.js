import { ADD_PIZZA_ORDER, SET_CURRENT_PIZZA_ORDER, UPDATE_TOPPING_ORDER, DELETE_PIZZA_FROM_ORDER } from "../actions/order";
import {newCopy} from "../../utils/utils";

const initState = { list: [], toppings: [], currentPizza: {} };

export default function(state = initState, action) {
    switch (action.type) {
        case ADD_PIZZA_ORDER:
            return {
                ...state,
                toppings:[],
                currentPizza: {},
                list: [
                    ...state.list,
                    action.payload
                ]
            };
        case DELETE_PIZZA_FROM_ORDER:
            const orders = newCopy(state.list);
            orders.splice(action.payload, 1);
            return {
                ...state,
                list: orders
            };
        case SET_CURRENT_PIZZA_ORDER:
            return {
                ...state,
                currentPizza: action.payload
            };
        case UPDATE_TOPPING_ORDER:
            return {
                ...state,
                toppings: action.payload
            };
        default:
            return state;
    }
}

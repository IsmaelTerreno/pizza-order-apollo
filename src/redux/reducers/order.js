import { ADD_PIZZA_ORDER, SET_CURRENT_PIZZA_ORDER, UPDATE_TOPPING_ORDER } from "../actions/order";
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
        case SET_CURRENT_PIZZA_ORDER:
            return {
                ...state,
                currentPizza: action.payload,
                toppings: action.payload.toppings
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

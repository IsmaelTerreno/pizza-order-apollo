import { ADD_PIZZA_ORDER } from "../actions/order";

const initState = { list: []};

export default function(state = initState, action) {
    switch (action.type) {
        case ADD_PIZZA_ORDER:
            return {
                ...state,
                list: action.payload
            };
        default:
            return state;
    }
}

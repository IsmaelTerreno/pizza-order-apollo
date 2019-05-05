import { LOAD_PIZZAS_SUCCESS } from "../actions/pizzas";

const initState = { list: []};

export default function(state = initState, action) {
  switch (action.type) {
      case LOAD_PIZZAS_SUCCESS:
      return {
          ...state,
          list: action.payload
      };
    default:
      return state;
  }
}

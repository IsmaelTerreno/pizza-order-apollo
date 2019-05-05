export const LOAD_PIZZAS = "LOAD_PIZZAS";
export const LOAD_PIZZAS_SUCCESS = "LOAD_PIZZAS_SUCCESS";
export const LOAD_PIZZAS_FAIL = "LOAD_PIZZAS_FAIL";

export function loadPizzas() {
  return {
    type: LOAD_PIZZAS
  };
}

export function loadPizzasSuccess(pizzas) {
  return {
    type: LOAD_PIZZAS_SUCCESS,
    payload: pizzas
  };
}

export function loadPizzasFail(message) {
  return {
    type: LOAD_PIZZAS_SUCCESS,
    message
  };
}

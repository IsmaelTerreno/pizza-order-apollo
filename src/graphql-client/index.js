import ApolloClient from "apollo-boost";
import { GRAPHQL_API_ENDPOINT } from "../config-app";
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: GRAPHQL_API_ENDPOINT
});

const ADD_PIZZA_MUTATION = gql`
    mutation AddPizzaSize($name: String!) {
        pizzaSize(name: $name) {
            name
        }
    }
`;

const FIND_PIZZAS_QUERY = gql`
    {
      pizzaSizes{
        name,
        maxToppings,
        basePrice,
        toppings{
          pizzaSize{
            name
          },
          defaultSelected,
          topping{
            name,
            price
          }
        }
      }
    }
`;

export const findPizzasApi = () => {
    return client
        .query({
            query: FIND_PIZZAS_QUERY
        })
        .then(result => result.data.pizzaSizes);
};

export const addPizzaApi = (pizza) => {
    return client
        .mutate({
            query: ADD_PIZZA_MUTATION,
            variables: {
                name: pizza.name,
            }
        })
        .then(result => result);
};

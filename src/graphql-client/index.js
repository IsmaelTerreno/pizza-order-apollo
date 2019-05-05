import ApolloClient from "apollo-boost";
import { GRAPHQL_API_ENDPOINT } from "../config-app";
import { gql } from "apollo-boost";

const client = new ApolloClient({
    uri: GRAPHQL_API_ENDPOINT
});

export const findPizzasApi = () => {
    return client
        .query({
            query: gql`
        {
          pizzaSizes{
            name,
            maxToppings,
            toppings{
              pizzaSize{
                toppings{
                  topping{
                    name
                  }
                }
              }
            }
          }
        }
        `
        })
        .then(result => result.data.pizzaSizes);
};

# pizza-order-react-apollo
Pizza to manage orders using React + Redux + Sagas + Apollo client for Graphql.

## Use case - Problem Statement for pizza cart.
We have a TON of :pizza: and a GraphQL API but no way for pizza lovers to actually order their 'za! Your goal is to design a pizza order form using React. Pizza lovers need to be able to add pizzas to a "Pizza Cart" (i.e. a list of pizzas they've submitted) and be able to view all the pies they've submitted to their "Pizza Cart"!

## Requirements

- You can query ALL pizza data from https://core-graphql.dev.waldo.photos/pizza. This should happen at runtime from the client (Pizza pricing can be quite volatile). Opening the above URL directly on your browser will reveal a GraphiQL interface. Through the interface and its Documentation Explorer (hit the top right button labeled "Docs")" you can find:
  - Pizza sizes + base prices.
  - Toppings + prices.
  - Available toppings per pizza size, and whether they are selected by default for that size.
- The user should be able to add/remove pizzas of any size to their cart.
- Use checkboxes to disable/enable toppings when adding a new pizza. The pizza size determines the max number of toppings that can be toggled. Disable other topping checkboxes once they hit the max for a pizza. (A `maxToppings` of `null` means unlimited toppings!)
- Cost per pizza should be calculated and displayed based on pizza base costs + sum of selected toppings.
- Total cost should be calculated and displayed for all pizzas in the cart.

#### Relaeted Reading
- https://graphql.github.io/learn
- https://cooking.nytimes.com/guides/1-how-to-make-pizza

## How to run the app
To run the app follow these steps:
1. Clone the git repository on your local with "git clone https://github.com/IsmaelTerreno/pizza-order-apollo.git".
2. Go to the project folder and run the command "yarn install".
3. In the same folder run the command "yarn start".
4. Go to your browser at "http://localhost:3000/" and that's all. :)

Here is a demo video following the steps for more details:
- https://drive.google.com/file/d/1K12gaPj7gbD2YIHPKY5HZuKO54_wI8-a/view

## How I can use the demo app
Here is a demo video using the demo app and making some playground to show some functionality:

- https://drive.google.com/file/d/11SugDJdQ0iZR91DsS8t1gwabzSTE8_ZW/view 

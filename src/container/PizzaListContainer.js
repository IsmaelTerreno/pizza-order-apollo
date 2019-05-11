import PizzaList from '../component/PizzaList';
import { loadPizzas } from '../redux/actions/pizza';
import { addPizzaOrder, setCurrentPizzaOrder, updateToppingOrder } from '../redux/actions/order';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pizzas: state.pizza.list
});

const mapDispatchToProps = dispatch => ({
    loadPizzas: () => dispatch(loadPizzas()),
    addPizzaOrder: (pizza) => dispatch(addPizzaOrder(pizza)),
    setCurrentPizzaOrder: (pizza) => dispatch(setCurrentPizzaOrder(pizza)),
    updateToppingOrder: (toppings) => dispatch(updateToppingOrder(toppings)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);

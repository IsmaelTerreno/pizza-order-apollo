import PizzaList from '../component/PizzaList';
import { loadPizzas } from '../redux/actions/pizza';
import { addPizzaOrder, setCurrentPizzaOrder } from '../redux/actions/order';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pizzas: state.pizza.list
});

const mapDispatchToProps = dispatch => ({
    loadPizzas: () => dispatch(loadPizzas()),
    addPizzaOrder: (pizza) => dispatch(addPizzaOrder(pizza)),
    setCurrentPizzaOrder: (pizza) => dispatch(setCurrentPizzaOrder(pizza)),
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);

import PizzaList from '../component/PizzaList';
import { loadPizzas } from '../redux/actions/pizza';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pizzas: state.pizza.list
});

const mapDispatchToProps = dispatch => ({
    loadPizzas: () => dispatch(loadPizzas())
});

export default connect(mapStateToProps, mapDispatchToProps)(PizzaList);

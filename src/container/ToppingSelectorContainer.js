import ToppingSelector from '../component/ToppingSelector';
import { setCurrentPizzaOrder, updateToppingOrder } from '../redux/actions/order';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentPizza: state.order.currentPizza,
    toppings: state.order.toppings,
});

const mapDispatchToProps = dispatch => ({
    setCurrentPizzaOrder: (pizza) => dispatch(setCurrentPizzaOrder(pizza)),
    updateToppingOrder: (toppings) => dispatch(updateToppingOrder(toppings))
});

export default connect(mapStateToProps, mapDispatchToProps)(ToppingSelector);

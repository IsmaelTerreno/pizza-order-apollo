import ActionButtons from '../component/ActionButtons';
import { addPizzaOrder } from '../redux/actions/order';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    currentPizza: state.order.currentPizza
});

const mapDispatchToProps = dispatch => ({
    addPizzaOrder: (pizza) => dispatch(addPizzaOrder(pizza))
});

export default connect(mapStateToProps, mapDispatchToProps)(ActionButtons);

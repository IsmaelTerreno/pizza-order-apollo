import TotalOrder from '../component/TotalOrder';
import {deletePizzaFromOrder} from '../redux/actions/order';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pizzaOrderList: state.order.list
});
const mapDispatchToProps = dispatch => ({
    deletePizzaFromOrder: (pizza) => dispatch(deletePizzaFromOrder(pizza)),
});

export default connect(mapStateToProps, mapDispatchToProps)(TotalOrder);

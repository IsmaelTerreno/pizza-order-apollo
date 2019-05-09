import TotalOrder from '../component/TotalOrder';
import { connect } from 'react-redux';

const mapStateToProps = state => ({
    pizzaOrderList: state.order.list
});

export default connect(mapStateToProps, null)(TotalOrder);

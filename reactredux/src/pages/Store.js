import {createStore} from 'redux'
import CartReducer from './CartReducer';

const Store = createStore(CartReducer);

export default Store;
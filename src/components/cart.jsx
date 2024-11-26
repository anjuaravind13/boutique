//import { createApi } from '@reduxjs/toolkit/query/react';
import cart from './images/cart.png'
import { useSelector, useDispatch } from 'react-redux'
//import { decrement, increment } from './counter/slicecounter';
import './cart.css'

function Cart() {

    const count = useSelector((state) => state.counter.count)

    return (  <>
    <div className="cart-icon">
    <p>{count}</p>
    <img src={cart} />
    

    </div>
    </>);
}

export default Cart;
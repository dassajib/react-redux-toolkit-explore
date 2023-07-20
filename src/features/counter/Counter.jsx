import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, decrementByValue, increment, incrementByValue, reset } from './counterSlice';

const Counter = () => {

    // to access state we need to use useSelector hook
    const count = useSelector((state) => (state.counter.count))
    // we need to use useDispatch method to pass the action
    const dispatch = useDispatch();

  return (
    <div>
        <h2>Counter App</h2>
        <h4>Count : {count}</h4>
        <button onClick={() => dispatch(increment())}>Increment</button>
        <button onClick={() => dispatch(decrement())}>Decrement</button>
        <button onClick={() => dispatch(reset())}>Reset</button>
        <button onClick={() => dispatch(incrementByValue(7))}>Increment By 7</button>
        <button onClick={() => dispatch(decrementByValue(2))}>Decrement By 2</button>
    </div>
  )
}

export default Counter
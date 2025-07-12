
import React, { useReducer, useMemo, useCallback, useLayoutEffect, useDebugValue, useRef, forwardRef, useImperativeHandle } from 'react';

//reducer function = state hold
const reducer = (state, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return { count: state.count + 1 };

        case 'DECREMENT':
            return { count: state.count - 1 };

        default:
            return state;
    }
}

//childcomponent

const ChildComponent = forwardRef(({ onButtonClick }, ref) => {
    const handleClick = useCallback(() => {
        onButtonClick('Button clicked in child component')
    }, [onButtonClick])

    useImperativeHandle(ref, () => ({
        triggerButtonClick: handleClick,
    }), [handleClick])

    return (
        <button onClick={handleClick}>Click here</button>
    )
})

//parent component
const Counter = () => {
    const [state, dispatch] = useReducer(reducer, { count: 0 })

    const memoizedvalue = useMemo(() => {
        return state.count % 2 === 0 ? 'Even' : 'Odd'
    }, [state.count]);

    const increment = useCallback(() => {
        dispatch({ type: 'INCREMENT' })
    }, []);

    const decrement = useCallback(() => {
        dispatch({ type: 'DECREMENT' })
    }, []);

    const countRef = useRef(state.count)

    useLayoutEffect(countRef.current);

    const childComponentRef = useRef()

    return (
        <div>
            <h1>Count : {state.count}</h1>
            <p>Count is {memoizedvalue} </p>
            <button onClick={increment}>INCREMENT</button><br></br>
            <button onClick={decrement}>DECREMENT</button><br></br>
            <ChildComponent ref={childComponentRef} onButtonClick={(message)=>console.log(message)}/><br></br>

            <button onClick={()=>childComponentRef.current.triggerButtonClick()}>Trigger Button method</button>

        </div>

    )

}


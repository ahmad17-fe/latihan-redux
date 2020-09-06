/* eslint-disable no-undef */
// Aplikasi Redux

const createStore = (reducer) => {
    let state
    let listeners = []

    const getState = () => state

    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach(listener => listener())
    }

    const subscribe = (listener) => {
        listeners.push(listener)
        //unsubscribe
        return () => {
            listeners = listeners.filter(l => l !== listener)
        }
    }

    dispatch({})

    return {getState, dispatch, subscribe}
} 

// Store(reducer)
let store = createStore(counter)

// Reducer(state, action)
function counter(state = 0, action) {
    const { type } = action
    switch (type) {
        case 'INCREMENT':
            return state + 1

        case 'DECREMENT':
            return state - 1

        default:
            break;
    }
}

// Subscribe
store.subscribe(
    () => console.log("state saat ini ... " + store.getState())
)

// Action
store.dispatch({type: 'INCREMENT' })
store.dispatch({type: 'INCREMENT' })
store.dispatch({type: 'INCREMENT' })
store.dispatch({type: 'DECREMENT' })
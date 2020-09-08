let initialState = {
    todos: [],
    isLoading: false,
    isError: null,
}

const todosReducer = (state = initialState, action) => {
    switch (action.type) {
        case "INIT_DATA":
            return {
                ...state,
                isLoading: false,
                todos: [ ...state.todos, ...action.payload.todos ]
            }

        case "INIT_DATA_STARTED":
            return {
                ...state,
                isLoading: true
            }

        case "INIT_DATA_FAILED":
            return {
                ...state,
                isLoading: false,
                isError: true,
            }

        case "ADD_TODO":
            return {
                ...state,
                todos: [
                    ...state.todos,
                    {
                        id: action.payload.id,
                        text: action.payload.text,
                        completed: false
                    }
                ]
            }
        
        case "TOGGLE_TODO":
            return {
                ...state,
                todos: state.todos.map(todo => 
                    (todo.id === action.payload.id) ? 
                    { ...todo, completed: !todo.completed } 
                    : todo
                )
            }
        default:
            return state
    }
}

export default todosReducer
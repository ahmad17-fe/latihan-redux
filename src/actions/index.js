import axios from 'axios'
import { v4 as uuidv4 } from 'uuid'


/**
 * disarankan dispatch 3 action
 * sebelum diload
 * berhasil diload
 * jika terjadi error
 */

const Endpoint = "https://my-json-server.typicode.com/ahmad17-fe/fakeapi/todos"

export const fetchTodos = () => dispatch => {
    dispatch(initDataStarted())

    axios.get(Endpoint)
    .then(res => {
        let result = res.data
        dispatch(initData(result))
    })
    .catch(err => {
        console.log(err)
        dispatch(initDataFailed())
    })
}

export const addTodo = text => dispatch => {
    axios.post(Endpoint, {id: uuidv4(), text: text, completed: false})
    .then(res => {
        console.log(res)
        dispatch(postData(res.data))
    })
    .catch(err => {
        console.log(err)
    })
}

export const toggleTodo = id => ({
    type: "TOGGLE_TODO",
    payload: {
        id: id
    },
})

export const setFilter = filter => ({
    type: "SET_FILTER",
    filter: filter
})


const initData = todos => ({
    type: "INIT_DATA",
    payload: {
        todos: todos
    }
})

const postData = todos => ({
    type: "ADD_TODO", 
    payload: {
        id: todos.id,
        text: todos.text
    }
})

const initDataStarted = () => ({
    type: "INIT_DATA_STARTED"
})

const initDataFailed = () => ({
    type: "INIT_DATA_FAILED"
})
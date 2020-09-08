import React, { Component } from 'react'
import Todo from '../Todo'
import { fetchTodos, toggleTodo } from '../../actions'

class Todos extends Component {
    componentDidMount() {
        this.props.dispatch(fetchTodos())
    }

    render(){
        const {todos, dispatch, isLoading, isError} = this.props

        if( isLoading ) {
            return <div>Loading...</div>
        } 

        if (isError) {
            return <div>Something's Wrong...</div>
        }
        return (
            <ul>
                {
                    todos.map((todo) => {
                        return <Todo key={todo.id} {...todo} onClick={() => dispatch(toggleTodo(todo.id))}/>
                    })
                }
            </ul>
        )
    }
}

export default Todos
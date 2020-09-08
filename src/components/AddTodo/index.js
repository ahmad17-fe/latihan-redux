import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../../actions'

const AddTodo = ({ addTodo }) => {
    
    const [input, setInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault()
        if(!input.value.trim()) return

        addTodo(input.value)
        input.value = ""
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={node => setInput(node)} type="text"/>
                <button type="Submit">+ Add Todo</button>
            </form>  
        </div>
    )
}

const mapDispatchToProps = (dispatch) => ({
    addTodo: text => dispatch(addTodo(text))
})

export default connect('', mapDispatchToProps)(AddTodo)
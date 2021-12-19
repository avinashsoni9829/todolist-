import React,{useState} from 'react'

const todos = [];

const TodoList = () => {
    const [todo,setTodo] = useState();
   

    function fun(x){
        todos.push(x);
        setTodo(' ');

   }
    return (
        <div>
            <h2>TodoList</h2>
            <input type="text" value = {todo} onChange={ e => setTodo(e.target.value)} placeholder='add todo here'/>
            
           
            <button onClick = {() => fun(todo)} >add todo </button>
           {
               todos.map((todo) => (<li key = {todo}>{todo}</li>))
           }
           
        </div>
    )
}

export default TodoList

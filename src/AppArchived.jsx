import { useState, useEffect } from 'react';

function App() {

  // Primitive types | string number boolean
  const [firstName, setFirstName] = useState('John Doe')
  const [count, setCount] = useState(1)
  const [isCoder, setIsCoder] = useState(true)

  // Array
  const [todos, setTodos] = useState(["Get up", "Eat breakfast"])

  

  // Get Data from Backend/API
  // https://jsonplaceholder.typicode.com/posts

  // const [posts, setPosts] = useState(null)

  // useEffect(() => {
  //   fetch('https://jsonplaceholder.typicode.com/posts')
  //     .then(response => response.json())
  //     .then(json => setPosts(json))
  // })

  // Input
  const [todoText, setTodoText] = useState('')

  const addItem = () => {

    const newTodos = [...todos, todoText]
    setTodos(newTodos)
    setTodoText("")
  }

  return (
    <>
      <div className="container text-center my-5">
        <h2>Primitive</h2>
        <p>{firstName}</p>
        <p>{count}</p>
        <p>{isCoder ? "Coder": "Not Coder"}</p>
        <button className='btn btn-primary'
        onClick={() => {
          setFirstName("John Doe New");
          setCount(count+1);
          setIsCoder(!isCoder);
        }}>Update</button>
      </div>

      <div className="container text-center my-5 col-md-4">
        <h2>Array</h2>
        {todos && (todos.map(todo => {
          return (
            <p>{todo}</p>
          )
        }))}

        <input type="text" className='form-control my-4 border border-secondary'
        value={todoText} onChange={e => setTodoText(e.target.value)}/>

        <button className='btn btn-primary'
        onClick={addItem}>Add Item</button>

        {/* {posts && (
          posts.map(post => {
            return (
              <p>{post.title}</p>
            )
          })
        )} */}

      </div>

    </>
  );
}

export default App;

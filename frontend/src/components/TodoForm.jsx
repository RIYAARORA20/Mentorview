const TodoForm = () => {

    const onFormSubmit=()=>{

    }

    const onInputChange=(e)=>{
        console.log(e.target.value);
    }

  return (
    <form className="form" onSubmit={onFormSubmit}>
        <input
        placeholder="enter new todo.." 
        className="input"
        onChange={onInputChange}/>
    </form>
  )
}

export default TodoForm;

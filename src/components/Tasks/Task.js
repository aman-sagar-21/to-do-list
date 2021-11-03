import 'bootstrap/dist/css/bootstrap.css';
import './Task.css'

const Task = props =>{

    const onClickHandler = () =>{
        props.onRemoveTask(props.todo)
    }

    return (
        <>
            <div className='task-box' onClick={onClickHandler}>
                {props.todo.content}
            </div>
        </> 
    );
}

export default Task;
import './NewTaskInput.css'
import {useState} from'react';
const NewTaskForm = props =>{

    const [inputContent, setInputContent] = useState('');

    const inputChangeHandler = (e) =>{
        setInputContent(e.target.value);
    }

    const formSubmitHandler = (e)=>{
        e.preventDefault();
        const newTask = {
            content: inputContent,
            id: Math.random().toString() + Math.random()*10
        }

        props.onTaskAddition(newTask);
        setInputContent('');

    }

    return(
        <form onSubmit={formSubmitHandler} >
            <div className="mb-3 d-flex  justify-content-center">
                <input type="text" className="form-control task-input my-1" id="new-task" placeholder="write something..." value={inputContent} onChange={inputChangeHandler} />
                <button type="submit" className="btn btn-sm btn-primary ms-1 my-auto">add task</button>
            </div>
        </form>
    )
}

export default NewTaskForm;
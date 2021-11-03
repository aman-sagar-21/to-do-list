import './App.css';
import Task from './components/Tasks/Task';
import Card from './components/UI/Card/Card';
import NewTaskForm from './components/AddNewTask/NewTaskInput';
import { useState } from 'react';

const todos = [
  {
    content: 'Task 1',
    id: Math.random().toString()
  },
  {
    content: 'Task 2',
    id: Math.random().toString()
  }
]


function App() {

  // lots: lists of tasks
  const [todoList, setTodoList] = useState(todos);

  const addTaskHandler = (task) => {
    setTodoList((prevList)=>{return [task, ...prevList]});
  }

  const removeTodoHandler = (todo)=>{
    setTodoList((prevList)=>{
      return prevList.filter(
        (task)=>{return task.id!==todo.id}
      );
    });
  }
  
  let lots = todoList.map(
    (task)=>{
      return <Task todo={task} key={task.id} onRemoveTask={removeTodoHandler}/>;
    }
  );

  return (
    <div className="App">
      <Card>
        <NewTaskForm onTaskAddition={addTaskHandler} />
        {lots}
      </Card>
    </div>
  );
}

export default App;

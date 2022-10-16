import React, {useRef, useState, useEffect} from 'react';
import {Form} from "../Form/Form";
import {ITodoEl} from "../../utils/models";

const App = () => {
    const [tasks, setTasks] = useState<ITodoEl[]>([]);


    useEffect(() => {
        const tasksFromStorage = JSON.parse(localStorage.getItem('tasks') || '[]') as ITodoEl[]
        setTasks(tasksFromStorage)
    }, [])

    useEffect(() => {
        localStorage.setItem('tasks', JSON.stringify(tasks))
    }, [tasks])


    const removeHandler = (id: number) => {
        setTasks(prevState => tasks.filter(el => el.id !== id)
        )
    }

    const completeHandler = (id: number) => {
        setTasks(prevState => tasks.map(el => {
            if (el.id === id) {
                el.isComplete = !el.isComplete
            }
            return el
        }))
    }


    return (
        <div className="container">
            <h1 className='todo__title'>{`Количество дел: ${tasks.length}`}</h1>
            <Form tasks={tasks} onTasks={setTasks}/>
            <div className='todo-list'>
                {tasks.length === 0 ? <p className='todo-list__empty'>Список задач пуст</p> :
                    <ul className='todo-list__tasks'>
                        {tasks.map(el => {
                            const taskClass = ['todo-list__task']
                            if (el.isComplete) {
                                taskClass.push('todo-list__task_complete')
                            }

                            return (
                                <li className={taskClass.join(' ')} key={el.id}>
                                    <label className='todo-list__task-wrp'>
                                        <input type="checkbox"
                                               checked={el.isComplete} onChange={() => completeHandler(el.id)}/>
                                        <span
                                            className='todo-list__title'>{el.title}</span>
                                        <i className='material-icons black-text'
                                           onClick={() => removeHandler(el.id)}>clear</i>
                                    </label>
                                </li>
                            )
                        })}
                    </ul>
                }

            </div>
        </div>
    );
}

export default App;

import React, {useRef, useState} from 'react';
import {Form} from "../Form/Form";
import {ITodoEl} from "../../utils/models";

const App = () => {
    const [tasks, setTasks] = useState<ITodoEl[]>([]);
    const inputRef = useRef<HTMLInputElement>(null)

    const submitHandler = (e: React.ChangeEvent<HTMLFormElement>) => {
        e.preventDefault()
        const task = {
            id: Date.now(),
            title: inputRef.current!.value,
            isComplete: false
        }
        setTasks([...tasks, task])

    }

    return (
        <div className="container">
            <form id='todoForm' name='todoForm' className='input-field' onSubmit={submitHandler}>
                <input ref={inputRef} type='text' id='todo' name='todo'
                       placeholder='Введите необходимую задачу' autoComplete='off'/>
                <label htmlFor='todo' className='active'>Добавить задачу</label>
            </form>
            <div className='todo-list'>
                <p className='todo-list__empty'>Список задач пуст</p>
                <ul className='todo-list__tasks'>
                    {tasks.map(el => {
                        return (
                            <li className='todo-list__task' key={el.id}>
                                <label className='todo-list__task-wrp'>
                                    <input type="checkbox"
                                           checked={el.isComplete}/>
                                    <span className='todo-list__complete todo-list__complete_decorated'>{el.title}</span>
                                    <i className='material-icons black-text'>clear</i>
                                </label>
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    );
}

export default App;

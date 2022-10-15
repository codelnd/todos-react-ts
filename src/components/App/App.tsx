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
                       placeholder='Введите необходимую задачу'/>
                <label htmlFor='todo' className='active'>Добавить задачу</label>
            </form>
            <div className='todo-list'>
                <p className='todo-list__empty'>Список задач пуст</p>
            </div>
        </div>
    );
}

export default App;

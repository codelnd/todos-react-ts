import React, {useState} from 'react';
import {Form} from "../Form/Form";
import {ITodoEl} from "../../utils/models";

const App = () => {
    const [tasks, setTasks] = useState<ITodoEl[]>([]);


    return (
        <div className="container">
            <form id='todoForm' name='todoForm' className='input-field'>
                <input type='text' id='todo' name='todo'
                       placeholder='Введите необходимую задачу'/>
                <label htmlFor='todo' className='active'>Добавить задачу</label>
            </form>
        </div>
    );
}

export default App;

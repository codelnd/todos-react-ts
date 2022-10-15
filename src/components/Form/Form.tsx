import React from 'react';

export const Form = () => {
    return (
        <form id='todoForm' name='todoForm' className='input-field'>
            <input type='text' id='todo' name='todo' placeholder='Введите необходимую задачу'/>
            <label htmlFor='todo' className='active'>Добавить задачу</label>
        </form>
    );
};

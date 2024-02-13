import React from 'react';

const List = ({ tasks }) => {
    return (
        <ul>
            {tasks.map((task, index) => (
                <li key={task.id} style={{ border: '1px solid red', padding: '40px', margin: '5px' }}>
                    {`${index + 1}. ${task.title} - ${task.completed ? 'Completed' : 'Incomplete'}`}
                </li>
            ))}
        </ul>
    );
};

export default List;

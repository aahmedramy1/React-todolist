import React from "react";
import PropTypes from "prop-types";


const Todo = ({
    task: { description, id, done },
    handleDelete,
    handleDone,
}) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '50%' 
        }}>
            <div>
                <span style={{
                    textDecoration: done ? 'line-through' : 'none',
                }}>{description}</span>
            </div>
            <div style={{
                display: 'flex',
                gap: '1rem',
            }}>
                <img
                    style={{ width: `25px` }}
                    src={'/assets/iconfinder_new-24_103173.png'}
                    alt='delete icon'
                    onClick={() => handleDelete(id)}
                />
                <img
                    style={{width: `25px`}}
                    src={'/assets/done.png'}
                    alt='done icon'
                    onClick={() => handleDone(id)}
                 />
            </div>
        </div>
    )
}

Todo.propTypes = {
    description: PropTypes.string,
    id: PropTypes.string,
    done: PropTypes.bool,
    handleDelete: PropTypes.func,
    handleDone: PropTypes.func,
}

export default Todo;

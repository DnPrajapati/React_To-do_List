import React, { useState } from 'react'

export default function Todo(props) {
    const [showEdit, setShowEdit] = useState(false);
    const [editTitle, setEditTitle] = useState(props.todo.title);
    const [editDescribe, setEditDescribe] = useState(props.todo.Describe);

    const onDone = (e) => {

        let oldObj = {
            title: props.todo.title,
            Describe: props.todo.Describe,
        }

        let newObj = {
            title: editTitle,
            Describe: editDescribe,
        }

        props.onEdit(oldObj, newObj)

    }

    const onCancel = () => {
        setShowEdit(false)
        setEditTitle(props.todo.title)
        setEditDescribe(props.todo.Describe)
    }


    return (
        <>{showEdit ?
            <div className='row align-item-center py-0 mx-0 shadowDown subRaw'>
                <div className='col-3 align-self-center rowElement'>
                    <input className="form-control me-2" name='title' placeholder='Title' value={editTitle} onChange={(e) => setEditTitle(e.target.value)} autoFocus/>
                </div>
                <div className='col-7 align-self-center rowElement'>
                    <input className="form-control me-2" name='desc' placeholder='Description' value={editDescribe} onChange={(e) => setEditDescribe(e.target.value)} />
                </div>
                <div className='col-2 align-self-center rowElement'>
                    <button className="btn btn-primary todoBtn" onClick={onDone}>Done</button>
                    <button className="btn btn-danger ms-4 todoBtn" onClick={onCancel}>Cancel</button>
                </div>
            </div>
            :
            <div className='row align-item-center py-0 mx-0 shadowDown subRaw'>
                <div className='col-3 align-self-center rowElement'>{props.todo.title}</div>
                <div className='col-7 align-self-center rowElement'>{props.todo.Describe}</div>
                <div className='col-2 align-self-center rowElement'>
                    <button className="btn btn-primary todoBtn" onClick={() => setShowEdit(true)}>Edit</button>
                    <button className="btn btn-danger ms-4 todoBtn" onClick={() => { props.onDelete(props.todo) }}>Delete</button>
                </div>
            </div>
        }
        </>
    )
}

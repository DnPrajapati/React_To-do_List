import React, { useState } from "react";
import Todo from "./Todo.js";

export default function TodoBody(props) {
  const [showAddRow, setShowAddRow] = useState(false);
  const [editTitle, setEditTitle] = useState("");
  const [editDescribe, setEditDescribe] = useState("");
  const addData = (e) => {
    setShowAddRow(true);
    console.log(e);
  };
  const onAdd = (e) => {
    if (!(editTitle && editDescribe)) {
      window.alert("Title and Description should not be Empty");
      return;
    }
    let obj = {
      title: editTitle,
      Describe: editDescribe,
    };

    props.addData(obj);
    setShowAddRow(false);
    setEditTitle("");
    setEditDescribe("");
  };
  const onCancel = () => {
    setShowAddRow(false);
    setEditTitle("");
    setEditDescribe("");
  };
  
  return (
    <div className="TodoBody">
      <h2 className="my-5 title">Todo-List </h2>
      <div className="row align-item-center py-3 mx-0 h5 shadowDown Navbar">
        <div className="col-3 align-self-center">
          <b>Title</b>
        </div>
        <div className="col-7 align-self-center">
          <b>Description</b>
        </div>
        <div className="col-2 align-self-center">
          <b>Action</b>
        </div>
      </div>
      {props.TodoList.length === 0
        ? ""
        : props.TodoList.map((item) => (
            <Todo
              todo={item}
              key={
                item.title + item.Describe + Math.floor(Math.random() * 100 + 1)
              }
              onDelete={props.onDelete}
              onEdit={props.onEdit}
            />
          ))}

      <div>
        {showAddRow ? (
          <div className="row align-item-center py-0 mx-0 shadowDown">
            <div className="col-3 align-self-center rowElement">
              <input
                className="form-control me-2"
                name="title"
                placeholder="Title"
                value={editTitle}
                onChange={(e) => setEditTitle(e.target.value)}
                autoFocus
              />
            </div>
            <div className="col-7 align-self-center rowElement">
              <input
                className="form-control me-2"
                name="desc"
                placeholder="Description"
                value={editDescribe}
                onChange={(e) => setEditDescribe(e.target.value)}
              />
            </div>
            <div className="col-2 align-self-center rowElement">
              <button className="btn btn-primary todoBtn" onClick={onAdd}>
                Add
              </button>
              <button
                className="btn btn-danger ms-4 todoBtn"
                onClick={onCancel}
              >
                Cancel
              </button>
            </div>
          </div>
        ) : (
          <div className="row align-item-center py-0 mx-0">
            <div className="col-3 align-self-center addRow"></div>
            <div className="col-7 align-self-center addRow">
              {props.TodoList.length === 0 ? "Please Add Task" : ""}
            </div>
            <div className="col-2 align-self-center addRow">
              <button
                className="btn btn-primary todoBtn px-5"
                onClick={addData}
              >
                Add
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

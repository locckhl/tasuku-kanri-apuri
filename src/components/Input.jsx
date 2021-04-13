import React, { useState, useEffect } from "react";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ handleInput, task, handleClose }) {
  const [content, setContent] = useState(() => {
    if (task !== undefined) {
      return task.text;
    }
    return "";
  });
  const [newDate, setNewDate] = useState(() => {
    if (task !== undefined) {
      return task.deadLine;
    }
    return new Date().toISOString().substr(0, 10);
  });
  const errorMes = "Input cannot be empty. Please enter something.";

  // useEffect(() => {

  // }, [])

  // if (task !== undefined) {
  //   console.log(task)
  //   setContent(task.text);
  //   setNewDate(task.deadLine);
  // }
  return (
    <div className="row m-1 px-5">
      <div className="col col-11 mx-auto border ">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="border-0 add-todo-input bg-transparent rounded w-100"
              type="text"
              placeholder="Add new .."
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if (content === "") alert(errorMes);
                  else {
                    if (task) {
                      handleInput(content, newDate, task.key);
                      handleClose();
                    } else {
                      handleInput(content, newDate, "");
                      setContent("");
                    }
                  }
                }
              }}
            />
          </div>
          <div className="col-auto m-0 px-2 d-flex align-items-center">
            <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
              Due date not set
            </label>
            <input
              type="date"
              value={newDate}
              onChange={(e) => {
                if(e.target.value >= ((new Date()).toISOString().substr(0,10)))
                  setNewDate(e.target.value)
                else
                  alert("Cannot set due date at the day before today.")
              }}
            />
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if (content === "") alert(errorMes);
                else {
                  if (task) {
                    handleInput(content, newDate, task.key);
                    handleClose();
                  } else {
                    handleInput(content, newDate, "");
                    setContent("");
                  }
                }
              }}
            >
              {task ? "Edit" : "Add"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;

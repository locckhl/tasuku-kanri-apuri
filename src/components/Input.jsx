import React, { useState } from "react";
/* 
  【inputコンポーネント】
　・新しいTodoを作成するINPUTフィールドを作成するコンポーネント
　・Enterをクリックされたら入力された文字を使って新しいTodoを作成する
*/
function Input({ handleInput }) {
  const [content, setContent] = useState("");
  const [newDate, setNewDate] = useState((new Date()).toISOString().substr(0,10));
  const errorMes = "Input cannot be empty. Please enter something."
  return (
    <div className="row m-1 px-5">
      <div className="col col-11 mx-auto border ">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="border-0 add-todo-input bg-transparent rounded w-100"
              type="text"
              placeholder="Add new .."
              value = {content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  if(content === "")
                    alert(errorMes)
                  else {
                    setContent("");
                    handleInput(content, newDate);
                  }
                }
              }}
            />
          </div>
          <div className="col-auto m-0 px-2 d-flex align-items-center">
            <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
              Due date not set
            </label>
            {/* <i
            className="fa fa-calendar my-2 px-1 text-primary btn due-date-button"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Set a Due date"
          ></i>
          <i
            className="fa fa-calendar-times-o my-2 px-1 text-danger btn clear-due-date-button d-none"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Clear Due date"
          ></i> */}
            <input type="date" value = {newDate} onChange = {e => setNewDate(e.target.value)}/>
          </div>
          <div className="col-auto px-0 mx-0 mr-2">
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                if(content === "")
                    alert(errorMes)
                else {
                  setContent("");
                  handleInput(content, newDate);
                }
              }}
            >
              Add
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;

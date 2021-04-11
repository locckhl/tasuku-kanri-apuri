import React, { useState } from "react";
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from "./TodoItem";
import Input from "./Input";
import Filter from "./Filter";

/* ライブラリ */
import { getKey } from "../lib/util";

function Todo() {
  const [tasks, setTask] = useState([
    {
      text: "clean room",
      deadLine: new Date(Date.now()).toLocaleDateString(),
      done: false,
      key: getKey(),
    },
    {
      text: "eat, sleep",
      deadLine: new Date(Date.now()).toLocaleDateString(),
      done: false,
      key: getKey(),
    },
  ]);

  const displayItems = tasks

  const handleCheckBox = (checkedTask) => {
    const newItems = tasks.map(task => {
      if (task.key === checkedTask.key) {
        task.done = !task.done;
      }
      return task;
    });
    setTask(newItems);
  }
  return (
    <div className="row mx-1 px-5 pb-3 w-80 list">
      <div className="col mx-auto d-flex flex-column justify-content-between ">
        {/* Todo Item 1 */}
        {tasks.map(task => (
          <TodoItem task={task} handleCheckBox={handleCheckBox}/>
        ))}
      </div>
    </div>
  );
}

export default Todo;

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
      deadLine: new Date("2000-11-4").toISOString()
      .split("T")[0],
      done: false,
      key: getKey(),
    },
    {
      text: "eat, sleep",
      deadLine: new Date(Date.now()).toISOString()
      .split("T")[0],
      done: false,
      key: getKey(),
    },
    {
      text: "clean room",
      deadLine: new Date("2040-11-4").toISOString()
      .split("T")[0],
      done: false,
      key: getKey(),
    },
  ]);

  const [tab, setTab] = useState('ALL');

  const filteredTasks = tasks.filter( item => {
    if (tab === 'ALL') return true;
    if (tab === 'TODO') return !item.done;
    if (tab === 'DONE') return item.done;
  });

  const displayItems = tasks;

  const handleInput = (text, newDate) => {
    console.log("inputed");
    setTask([
      ...tasks,
      {
        text: text,
        deadLine: new Date(new Date(newDate).getTime() - (new Date(newDate).getTimezoneOffset() * 60000 ))
        .toISOString()
        .split("T")[0],
        done: false,
        key: getKey(),
      },
    ]);
  };

  const handleEdit = (newText, newDate, key) => {
    const newItems = tasks.map((task) => {
      if (task.key === key) {
        task.text = newText;
        task.deadLine = newDate;
      }
      return task;
    });
    setTask(newItems);
  }

  const handleCheckBox = (checkedTask) => {
    const newItems = tasks.map((task) => {
      if (task.key === checkedTask.key) {
        task.done = !task.done;
      }
      return task;
    });
    setTask(newItems);
  };

  const deleteTask = chosenTask => {
    const newItems = tasks.filter(task => task.key !== chosenTask.key);
    setTask(newItems);
  }

  const selectTab = value => {
    setTab(value)
  }

  return (
    <React.Fragment>
      {/* Create todo section  */}
      <Input handleInput={handleInput}></Input>
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      {/* View options section  */}
      <Filter status={tab} changeTab={selectTab} />
        {filteredTasks.map(task => (
          <TodoItem task={task} key={task.key} handleCheckBox={handleCheckBox} deleteTask={deleteTask} handleEdit={handleEdit} />
      ))}
      <div className="row mx-1 px-5 pb-3 w-80 list">
        <div className="col mx-auto d-flex flex-column justify-content-between ">
          {/* Todo Item 1 */}
          {/* {tasks.map((task) => (
            <TodoItem task={task} handleCheckBox={handleCheckBox} deleteTask={deleteTask} handleEdit={handleEdit}/>
          ))} */}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Todo;

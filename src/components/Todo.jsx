import React, { useState } from "react";
import ItemPagination from "./ItemPagination";
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
import SearchBar from "./SearchBar";

/* ライブラリ */
import { getKey } from "../lib/util";
import useStorage from "../hooks/storage";

function Todo() {
  const [tasks, setTask] = useStorage([
    {
      text: "clean room",
      deadLine: new Date("2000-11-4").toISOString().split("T")[0],
      done: false,
      key: getKey(),
    },
    {
      text: "eat, sleep",
      deadLine: new Date(Date.now()).toISOString().split("T")[0],
      done: false,
      key: getKey(),
    },
    {
      text: "clean room",
      deadLine: new Date("2040-11-4").toISOString().split("T")[0],
      done: false,
      key: getKey(),
    },
  ]);

  const [tab, setTab] = useState("ALL");

  const [timeFilter, setTimeFilter] = useState("TODAY");

  const [timeSort, setTimeSort] = useState("due-date-desc");

  const [searchInput, setSearchInput] = useState("");

  const filteredTasks = tasks.filter((item) => {
    if (tab === "ALL") return true;
    if (tab === "TODO") return !item.done;
    if (tab === "DONE") return item.done;
  });

  const [currentPage, setCurrentPage] = useState(2);

  const itemPerPage = 5;

  const filteredByNameTasks = filteredTasks.filter((item) => {
    return item.text.match(searchInput);
  });

  const filteredByTime = filteredByNameTasks.filter((item) => {
    const dateNow = Date.parse(
      new Date().getFullYear() +
        "-" +
        ("0" + (new Date().getMonth() + 1)).slice(-2) +
        "-" +
        ("0" + new Date().getDate()).slice(-2)
    );

    if (timeFilter === "PAST") return Date.parse(item.deadLine) < dateNow;
    if (timeFilter === "TODAY") return Date.parse(item.deadLine) === dateNow;
    if (timeFilter === "FUTURE") return Date.parse(item.deadLine) > dateNow;
  });

  const sortByTime = filteredByTime.sort((a, b) => {
    if (timeSort === "added-date-asc")
      return new Date(b.deadLine) - new Date(a.deadLine);
    if (timeSort === "due-date-desc")
      return new Date(a.deadLine) - new Date(b.deadLine);
  });

  let itemLength = sortByTime.length;
  // console.log(`length ${ itemLength}`)

  const paginateItems = sortByTime.filter((item) => {
    // console.log(`max ${itemPerPage*currentPage}`)

    return (
      sortByTime.indexOf(item) + 1 <= itemPerPage * currentPage &&
      itemPerPage * (currentPage - 1) < sortByTime.indexOf(item) + 1
    );
  });

  const handleInput = (text, newDate) => {
    console.log("inputed");
    setTask([
      ...tasks,
      {
        text: text,
        deadLine: new Date(
          new Date(newDate).getTime() -
            new Date(newDate).getTimezoneOffset() * 60000
        )
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
  };

  const handleCheckBox = (checkedTask) => {
    const newItems = tasks.map((task) => {
      if (task.key === checkedTask.key) {
        task.done = !task.done;
      }
      return task;
    });
    setTask(newItems);
  };

  const deleteTask = (chosenTask) => {
    const newItems = tasks.filter((task) => task.key !== chosenTask.key);
    setTask(newItems);
  };

  const selectTab = (value) => {
    setTab(value);
  };

  const changeTimeTab = (value) => {
    // console.log(value)
    setTimeFilter(value);
  };

  const sortTimeTab = (value) => {
    setTimeSort(value);
  };
  console.log(timeFilter);
  return (
    <React.Fragment>
      {/* Create todo section  */}
      <Input handleInput={handleInput}></Input>
      <SearchBar setSearchInput={setSearchInput}></SearchBar>
      <div className="p-2 mx-4 border-black-25 border-bottom"></div>
      {/* View options section  */}
      <Filter
        timeFilter={timeFilter}
        changeTab={selectTab}
        changeTimeTab={changeTimeTab}
        sortTimeTab={sortTimeTab}
        setCurrentPage={setCurrentPage}
      />

      <div className="row mx-1 px-5 pb-3 w-80 list">
        <div className="col mx-auto d-flex flex-column justify-content-between ">
          {/* Todo Item 1 */}
          <ItemPagination
            currentPage={currentPage}
            setCurrentPage={setCurrentPage}
            itemLength={itemLength}
            itemPerPage={itemPerPage}
          ></ItemPagination>
          {paginateItems.length ? (
            paginateItems.map((task) => (
              <TodoItem
                task={task}
                key={task.key}
                handleCheckBox={handleCheckBox}
                deleteTask={deleteTask}
                handleEdit={handleEdit}
              />
            ))
          ) : (
            <div className="font-weight-bold text-danger d-flex align-self-center justify-content-center">
              タスクはないね
            </div>
          )}
        </div>
      </div>
    </React.Fragment>
  );
}

export default Todo;

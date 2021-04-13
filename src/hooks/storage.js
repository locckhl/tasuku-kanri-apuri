import { useState, useEffect } from "react";

/* 
  【Storageフック】
　・TodoをlocalStorageを使って保存する
　・以下機能をサポートする
　  - localstrageに保存されているすべてのTodoの読み出し機能
　  - Todoをlocalstrageに保存する
　  - localstrageにあるTodoを削除する
*/

const STORAGE_KEY = "tasks";

function useStorage(input) {
  const [tasks, setItems] = useState(input); /* 副作用を使う */
  useEffect(() => {
    const data = window.localStorage.getItem(STORAGE_KEY);
    console.log(data);
    if (!data) {
      console.log("set data");

      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(input));
    } else {
      setItems(JSON.parse(data));
    }
  }, []);
  const setTask = (tasks) => {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
    setItems(tasks);
  };

  return [tasks, setTask];
}

export default useStorage;

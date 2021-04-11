import React, { useState } from 'react';
/* 
  【Todoのデータ構成】
　・key：Todoを特定するID（String）
　・text：Todoの内容（String）
　・done：完了状態（Boolean true:完了済み,, false:未完了）
*/

/* コンポーネント */
import TodoItem from './TodoItem';
import Input from './Input';
import Filter from './Filter';



function Todo() {

  return (
    <div className="row mx-1 px-5 pb-3 w-80 list">
    <div className="col mx-auto d-flex flex-column justify-content-between ">
      {/* Todo Item 1 */}
      <TodoItem></TodoItem>
   </div>
  </div>

  );
}

export default Todo;
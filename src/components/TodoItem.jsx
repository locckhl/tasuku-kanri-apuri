/* 
  【TodoItemコンポーネント】
　・Todoアイテムを表示する
　・チェックボックスにチェックが入っているか管理する
　・チェックボックスにチェックが入っているかアイテムをグレーアウトする
*/
import { Button } from "react-bootstrap";
import Edit from "./Edit";
function TodoItem({ task, handleCheckBox, handleEdit, deleteTask }) {
  return (
    <div
      className={
        task.done
          ? "row px-3 align-items-center todo-item rounded item-done"
          : "row px-3 align-items-center todo-item rounded"
      }
      style={{
        backgroundImage: "linear-gradient(to right, purple, pink)",
      }}
    >
      <div className="col-auto m-1 p-0 d-flex align-items-center">
        {/* <h2 className="m-0 p-0">
        <i
          className="fa fa-square-o m-0 p-0 d-none color"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Mark as complete"
        ></i>
        <i
          className="fa fa-check-square-o m-0 p-0 color"
          data-toggle="tooltip"
          data-placement="bottom"
          title="Mark as todo"
        ></i>
      </h2> */}
        <input
          type="checkbox"
          checked={task.done}
          style={{ transform: "scale(2)" }}
          onChange={() => {
            handleCheckBox(task);
          }}
        />
      </div>
      <div className="col px-1 m-1 d-flex align-items-center">
        <input
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input bg-transparent rounded px-3"
          readonly
          value={task.text}
          title={task.text}
        />
        <input
          type="text"
          className="form-control form-control-lg border-0 edit-todo-input rounded px-3 d-none"
          value={task.text}
        />
      </div>
      <div className="col-auto m-1 p-0 px-3">
        <div className="row">
          <div className="col-auto d-flex align-items-center rounded bg-white border border-warning">
            <i
              className="fa fa-hourglass-2 px-2 text-warning btn"
              data-toggle="tooltip"
              data-placement="bottom"
              title=""
              data-original-title="Due on date"
            ></i>
            <span className="text">{task.deadLine}</span>
          </div>
        </div>
      </div>

      <div className="col-auto d-flex align-items-center justify-content-between px-0">
        <Edit task={task} handleInput={handleEdit} />
        <Button
          className="ml-1"
          onClick={() => {
            deleteTask(task);
          }}
        >
          <i className="fa fa-trash-o"></i>
        </Button>
      </div>
    </div>
  );
}

export default TodoItem;

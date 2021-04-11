/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ onChange, status }) {
  return (
    <div className="row px-5">
      <div className="col d-flex my-2  justify-content-center">
        <button
          className={
            status === "ALL"
              ? "btn btn-primary mx-1 active"
              : "btn btn-primary mx-1 active"
          }
          // onClick={() => {
          //   onChange("ALL");
          // }}
        >
          Past
        </button>
        <button
          className={
            status === "TODO"
              ? "btn btn-primary mx-1 active"
              : "btn btn-primary mx-1 "
          }
          // onClick={() => {
          //   onChange("TODO");
          // }}
        >
          Today
        </button>
        <button
          className={
            status === "DONE"
              ? "btn btn-primary mx-1 active"
              : "btn btn-primary mx-1 "
          }
          // onClick={() => {
          //   onChange("DONE");
          // }}
        >
          Future
        </button>
      </div>
      <div className="col d-flex my-2  justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="all" selected>
              All
            </option>
            <option value="completed">Completed</option>
            <option value="active">Active</option>
            <option value="has-due-date">Has due date</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Sort
          </label>
          <select className="custom-select custom-select-sm btn my-2">
            <option value="added-date-asc" selected>
              Added date
            </option>
            <option value="due-date-desc">Due date</option>
          </select>
          <i
            className="fa fa fa-sort-amount-asc text-info btn mx-0 px-0 pl-1"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Ascending"
          ></i>
          <i
            className="fa fa fa-sort-amount-desc text-info btn mx-0 px-0 pl-1 d-none"
            data-toggle="tooltip"
            data-placement="bottom"
            title="Descending"
          ></i>
        </div>
      </div>
    </div>
  );
}

export default Filter;

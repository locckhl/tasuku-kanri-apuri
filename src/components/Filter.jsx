/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ timeFilter, changeTab, changeTimeTab,sortTimeTab, setCurrentPage }) {
  const handleChangeFilter = (event) => {
    changeTab(event.target.value);
  };

  const handleChangeSort = (event) => {
    sortTimeTab(event.target.value);
  };


  return (
    <div className="row px-5" onClick={()=>{
      setCurrentPage(1)
    }}>
      <div className="col d-flex my-2  justify-content-center">
        <button
          value="PAST"
          className={
            timeFilter === "PAST"
              ? "btn btn-primary mx-1 active"
              : "btn btn-primary mx-1 "
          }
          onClick={(e) => {
            changeTimeTab(e.target.value);
          }}
        >
          過去
        </button>
        <button
          value="TODAY"
          className={
            timeFilter === "TODAY"
              ? "btn btn-primary mx-1 active"
              : "btn btn-primary mx-1 "
          }
          onClick={(e) => {
            changeTimeTab(e.target.value);
          }}
        >
          今日
        </button>
        <button
          value="FUTURE"
          className={
            timeFilter === "FUTURE"
              ? "btn btn-primary mx-1 active"
              : "btn btn-primary mx-1 "
          }
          onClick={(e) => {
            changeTimeTab(e.target.value);
          }}
        >
          将来
        </button>
      </div>
      <div className="col d-flex my-2  justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select
            onChange={handleChangeFilter.bind(null)}
            className="custom-select custom-select-sm btn my-2"
          >
            <option value="ALL" selected>
              全て
            </option>
            <option value="DONE">完了</option>
            <option value="TODO">未完了</option>
          </select>
        </div>
        <div className="col-auto d-flex align-items-center px-1 pr-3">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Sort
          </label>
          <select className="custom-select custom-select-sm btn my-2"  onChange={handleChangeSort.bind(null)}>
            <option value="added-date-asc" >
              日付け⬇
            </option>
            <option value="due-date-desc" selected>日付け⬆</option>
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

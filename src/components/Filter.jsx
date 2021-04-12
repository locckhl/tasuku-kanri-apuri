/* 
  【Filterコンポーネント】
　・該当するTodoをステータス毎にで分けてリスト表示する
　・タブで表示する
　・サポートするステータスは「すべて」「未完了」「完了済み」
*/
function Filter({ value, changeTab }) {

  const handleChangeFilter = (event) => {
    if (event.target.value == "TODAY") {
      changeTab("ALL");
    } else {
      changeTab(event.target.value);
    }
  
  };


  // return (
  //    <div className="panel-tabs">
  //     <a href="#" 
  //       className={value === 'ALL' ?  'is-active' : ''}
  //       onClick={handleChangeFilter.bind(null, 'ALL')}  
  //     >全て</a>
  //     <a href="#" 
  //       className={value === 'TODO' ?  'is-active' : ''}
  //       onClick={handleChangeFilter.bind(null, 'TODO')}  
  //     >未完了</a>
  //     <a href="#" 
  //       className={value === 'DONE' ?  'is-active' : ''}
  //       onClick={handleChangeFilter.bind(null, 'DONE')}  
  //     >完了済み</a>
  //   </div>
  // );
  return (
    <div className="row px-5">
      <div className="col d-flex my-2  justify-content-end">
        <div className="col-auto d-flex align-items-center">
          <label className="text-secondary my-2 pr-2 view-opt-label">
            Filter
          </label>
          <select
            onChange={handleChangeFilter.bind(null)}  
            className="custom-select custom-select-sm btn my-2">
            <option value="ALL" selected>
              All
            </option>
            <option value="DONE">DONE</option>
            <option value="TODO">TODO</option>
            <option value="TODAY">Has due date</option>
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

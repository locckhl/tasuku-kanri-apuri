import React, { useState } from "react";

export default function SearchBar({setSearchInput}) {

  const [content, setContent] = useState("");

  return (
    <div className="row m-1 px-5">
      <div className="col col-11 mx-auto border ">
        <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
          <div className="col">
            <input
              className="border-0 add-todo-input bg-transparent rounded w-100"
              type="text"
              placeholder="検索　。。。"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
                setSearchInput(e.target.value);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

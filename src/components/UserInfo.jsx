import React from "react";

export default function UserInfo({user}) {
  return (
    <div>
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 h1 text-primary text-center mx-auto d-flex justify-content-center align-items-center">
            {/* <i className="fa fa-check bg-primary text-white rounded p-2"></i>  */}
            <div className="avatar mx-3">
              <img src="images/avt.jpg" />
            </div>
            <b>{user.name}</b>
          </div>
        </div>
      </div>
    </div>
  );
}

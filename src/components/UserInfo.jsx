import React from "react";

export default function UserInfo({ user }) {
  return (
    <div>
      <div className="row m-1 p-4">
        <div className="col">
          <div className="p-1 text-primary text-center mx-auto d-flex justify-content-center align-items-center">
            {/* <i className="fa fa-check bg-primary text-white rounded p-2"></i>  */}
              <div className="avatar mx-3">
                <img src="images/avt.jpg" />
              </div>

              <div className="d-flex flex-column">
                <h1>
                  <b>{user.name}</b>
                </h1>
                {/* <label for="song_image" class="custom-file-upload">
                  <i class="fa fa-cloud-upload"></i> Upload Ava
                </label> */}
                <input id="song_image" type="file" />
              </div>

            {/* <input class="mbtn-primary" type="file" name="student[image]" id="student_image"></input> */}

            <div></div>
          </div>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { Modal, Button } from "react-bootstrap";
import Input from './Input'

export default function Edit({ handleInput, task }) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  // const [content, setContent] = useState(task.text);
  // const [newDate, setNewDate] = useState(task.deadLine);
  // const errorMes = "Input cannot be empty. Please enter something."

  return (
    <div>
      <Button variant="primary" onClick={handleShow}>
        <i className="fa fa-pencil"></i>
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        dialogClassName="mw-80"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            このノートを編集
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Input handleInput={handleInput} task={task} handleClose={handleClose}></Input>
          {/* <div className="row m-1 ">
            <div className="col col-11 mx-auto border ">
              <div className="row bg-white rounded shadow-sm p-2 add-todo-wrapper align-items-center justify-content-center">
                <div className="col">
                  <input
                    className="border-0 add-todo-input bg-transparent rounded w-100"
                    type="text"
                    placeholder="Add new .."
                    value={content}
                    onChange={(e) => {
                      setContent(e.target.value);
                    }}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                          if(content === "")
                            alert(errorMes)
                          else {
                            // setContent("");
                            handleInput(content, newDate, task.key);
                          }
                        }
                      }}
                  />
                </div>
                <div className="col-auto m-0 px-2 d-flex align-items-center">
                  <label className="text-secondary my-2 p-0 px-1 view-opt-label due-date-label d-none">
                    Due date not set
                  </label>
        
                  <input type="date" value = {newDate} onChange = {e => setNewDate(e.target.value)} />
                </div>
              </div>
            </div>
          </div> */}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            キャンセル
          </Button>
          {/* <Button
            variant="primary"
            onClick={handleClose}
            onClick={() => {
                if(content === "")
                    alert(errorMes)
                else {
                //   setContent("");
                  handleInput(content, newDate, task.key);
                  handleClose();
                }
              }}
          >
            Save Changes
          </Button> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
}

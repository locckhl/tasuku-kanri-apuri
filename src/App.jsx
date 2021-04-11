import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Todo from "./components/Todo";

function App() {
  return (
    <div className="container  ">
      <div className="custom-container rounded mx-auto bg-light shadow popup">
        {/* App title section  */}
        <div className="row m-1 p-4">
          <div className="col">
            <div className="p-1 h1 text-primary text-center mx-auto d-flex justify-content-center align-items-center">
              {/* <i className="fa fa-check bg-primary text-white rounded p-2"></i>  */}
              <div className="avatar mx-3">
                <img src="images/avt.jpg" />
              </div>
              <b>User name</b>
            </div>
          </div>
        </div>
        {/* Create todo section  */}
        <Input></Input>
        <div className="p-2 mx-4 border-black-25 border-bottom"></div>
        {/* View options section  */}
        <Filter></Filter>
        {/* Todo list section  */}
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;

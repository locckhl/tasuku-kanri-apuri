import logo from "./logo.svg";
import "./App.css";
import Input from "./components/Input";
import Filter from "./components/Filter";
import Todo from "./components/Todo";
import UserInfo from "./components/UserInfo";
import { useState } from "react";



function App() {
  const [user, setUser] = useState({
    avatar: "string",
    name: "タスク・管理・アプリ♥♥♥",
  });


  return (
    <div className="container  ">
      <div className="custom-container rounded mx-auto bg-light shadow popup">
        {/* App title section  */}
        <UserInfo user={user}></UserInfo>
        
        {/* Todo list section  */}
        <Todo></Todo>
      </div>
    </div>
  );
}

export default App;

import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./components/login/login";
import Todo from "./components/Todo/todo";
import TodoApi from "./components/TodoApi/TodoApi";
import Navbar from "./Navbar";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/todo" element={<Todo />} />
        <Route path="/todo-list" element={<TodoApi />} />
      </Routes>
    </div>
  );
}

export default App;

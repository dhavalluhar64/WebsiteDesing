import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AddTodo, EditTodo } from "../store/Reducer/todoApp";
import Todo_Second from "./Todo-Second";

const TodoList_App = () => {
  const [inputValue, setInputValue] = useState({
    init: "",
  });

  const [Edit, setEdit] = useState(null);

  const add = useSelector((state) => state.Todo.add);

  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.target;

    setInputValue({ ...inputValue, [name]: value });
  };

  const AddData = () => {
    if (inputValue.init.trim() == "") {
      alert("Please enter a valid todo");

      return;
    } else if (Edit != null) {
      dispatch(EditTodo({ idx: Edit, newValue: inputValue.init }));

      setEdit(null);
    } else {
      dispatch(AddTodo(inputValue.init));
    }
    setInputValue({ init: "" });
  };

  const handleEditData = (index) => {
    setInputValue({ init: add[index] });

    setEdit(index);
  };

  return (
    <>
      <div className="container">
        <div className="d-flex col-md-4 m-auto">
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search"
            aria-label="Search"
            name="init"
            value={inputValue.init}
            onChange={handleChange}
          />

          <button className="btn btn-success" type="submit" onClick={AddData}>
            {Edit !== null ? "Update" : "Add"}
          </button>
        </div>

        <Todo_Second addTodoApp={add} handleEditData={handleEditData} />
      </div>
    </>
  );
};

export default TodoList_App;

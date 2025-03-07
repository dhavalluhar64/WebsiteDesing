import { useDispatch } from "react-redux";
import { DeleteTodo } from "../store/Reducer/todoApp";

const Todo_Second = ({ addTodoApp, handleEditData }) => {
  const dispatch = useDispatch();

  return (
    <>
      {addTodoApp.length > 0 ? (
        addTodoApp.map((item, idx) => {
          return (
            <div className="col-md-4 m-auto" key={idx}>
              <div className="input-user">
                {item}
                <button
                  className="btn btn-primary"
                  type="submit"
                  onClick={() => handleEditData(idx)}
                >
                  Edit
                </button>
                <button
                  className="btn btn-danger"
                  type="submit"
                  onClick={() => dispatch(DeleteTodo(item))}
                >
                  Delete
                </button>
              </div>
            </div>
          );
        })
      ) : (
        <div className="container">
          <div className="d-flex col-md-4 m-auto">
            <p>No Data Found</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Todo_Second;

import addTask from "../../assets/img/addTask.svg";
import { useState, useEffect } from "react";
import Task from "../Task/Task";
import CreateNewTask from "../Task/CreateTask";
import axios from "axios";

export default function ListTodo(id) {
  const [showCreateTask, setShowCreateTask] = useState(false);
  const [toDos, setToDos] = useState();
  const user = JSON.parse(localStorage.getItem("user-data"));
  const headers = {
    "access-token": user.access_token,
    uid: user.uid,
    client: user.client,
  };

  const pathId = id.id;
  const getTodo = async () => {
    await axios
      .get(`http://dev.thanqminh.com:3000/task_lists/${pathId}/todos`, {
        headers: headers,
      })
      .then((res) => {
        setToDos(res.data);
      });
  };
  useEffect(() => {
    getTodo();
  }, []);

  const handleCreateTask = () => {
    setShowCreateTask(!showCreateTask);
  };

  return (
    <div className="my-5">
      <div className="flex">
        <CreateNewTask
          id={id.id}
          onClose={handleCreateTask}
          visible={showCreateTask}
        />
      </div>
      {toDos &&
        toDos.map((todo) => (
          <Task
            key={todo.id}
            listId={pathId}
            headers={headers}
            id={todo.id}
            name={todo.name}
          />
        ))}
      <button
        onClick={() => setShowCreateTask(true)}
        className="flex items-center py-2 px-4 mt-4 mb-2 rounded-full w-full  bg-indigo-500 hover:bg-blue-500  block m-auto"
      >
        <img className="w-5 mr-2" src={addTask} alt="add new task" />
        <p className="text-xl  font-bold ">New task</p>
      </button>
    </div>
  );
}

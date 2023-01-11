import editIcon from "../../assets/img/edit.svg";
import deleteIcon from "../../assets/img/trash.svg";

import EditTask from "./EditTask";

import DelTasks from "./DeleteTask";
import { useState} from "react";

export default function Task(i) {
  const [showEditTask, setShowEditTask] = useState(false);
  const handleEditTask = () => {
    setShowEditTask(!showEditTask);
  };

  const [showDelTask, setShowDelTask] = useState(false);
  const handleDelTask = () => {
    setShowDelTask(!showDelTask);
  };
  return (
    <div className="w-full text-gray-900 justify-between items-center text-xl p-3 bg-gray-400/20 flex">
      <div className="flex">
        
        <p id="task__name">{i.name}</p>
      </div>
      <div className="flex ">
        <button className="mr-8" onClick={() => setShowEditTask(true)} type="">
          <img className="w-5" src={editIcon} alt="Edit task" />
        </button>
        <EditTask data={i} onClose={handleEditTask} visible={showEditTask} />
        <button className="mr-1" onClick={() => setShowDelTask(true)} type="">
          <img className="w-5" src={deleteIcon} alt="Delete task" />
        </button>
        <DelTasks data={i} onClose={handleDelTask} visible={showDelTask} />
      </div>
    </div>
  );
}

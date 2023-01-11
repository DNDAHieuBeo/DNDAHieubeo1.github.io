import axios from "axios";
import warningIcon from "../../assets/img/warning.svg"

export default function DelTask({ visible, onClose, data }) {
  const handleDelTask = async () => {
    await axios
    .delete(`http://dev.thanqminh.com:3000/task_lists/${data.listId}/todos/${data.id}`, {headers: data.headers})
    .then(() =>{
      console.log("success!");
      window.location.reload(false);
    })
  }
  const handleOnClose = (e) => {
    if (e.target.id === "deleteTask") onClose();
  };
  if (!visible) return null;

  return (
    <div
      id="deleteTask"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="max-w-xl text-gray-200 bg-slate-800/50 h-auto py-4 px-8 rounded-lg">
        <p className="text-xl font-bold pb-5">Task will be permanently deleted</p>
        <div className="flex flex-col items-center space-x-3">
          <img className="w-10 mb-5" src={warningIcon} alt="delete"/>
          <p>Delete this task ?</p>
        </div>
        <div className="flex items-center justify-center mt-8">
            <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>Cancel</button>
            <button onClick={handleDelTask} type="submit" className="bg-red-700 hover:bg-red-600 ml-5 px-5 py-2 text-lg rounded-lg ">Delete</button>
        </div>
      </div>
    </div>
    );
  }
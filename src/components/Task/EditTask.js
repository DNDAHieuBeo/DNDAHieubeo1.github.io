import axios from "axios";
import {useState} from "react";

export default function EditTask({ visible, onClose, data }) {
  const [editTodo, setEditTodo] = useState()
  const handleOnClose = (e) => {
    if (e.target.id === "EditTask") onClose();
  };
  if (!visible) return null;

  const handleEditTodo = async () => {
    const formData = {
      name: editTodo
    }
    await axios
    .patch(`http://dev.thanqminh.com:3000/task_lists/${data.listId}/todos/${data.id}`, formData, {headers: data.headers})
    .then((res)=> {
      window.location.reload(false)
    })
    .catch((err)=>{
      console.log(err);
    })
  }
  return (
    <div
      id="EditTask"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-10 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="w-1/4 text-gray-200 bg-slate-800/50 h-auto py-4 px-4 rounded-lg">
        <p className="text-xl font-bold pb-5">Edit Task</p>
        <div className="flex items-center  space-x-3">
          <input
            type="text"
            value={editTodo || ''}
            onChange={(e)=>setEditTodo(e.target.value)}
            placeholder={data.name}
            className="px-2 py-2 text-lg w-full  rounded-lg bg-gray-700"
          />
        </div>
        <div className="flex items-center justify-end mt-8">
            <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>Cancel</button>
            <button onClick={handleEditTodo} type="submit" className="bg-indigo-700 hover:bg-indigo-600 ml-5 px-5 py-2 text-lg rounded-lg ">Confirm edit</button>
        </div>
      </div>
    </div>
  );
}
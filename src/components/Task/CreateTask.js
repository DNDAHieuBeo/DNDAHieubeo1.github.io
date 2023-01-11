import axios from "axios";
import {useState} from "react"

export default function CreateNewTask({ visible, onClose, id }) {
  const [nameTodo, setNameTodo] = useState();
  const [successTodo, setSuccessTodo] = useState(false);

  const user = JSON.parse(localStorage.getItem("user-data"));
    const headers = {
        "access-token": user.access_token,
        'uid': user.uid,
        'client': user.client,
    };
  
    const handleCreateTask = async () => {
      
      const formData = {
        name: nameTodo
      }
      
      await axios
      .post(`http://dev.thanqminh.com:3000/task_lists/${id}/todos`, formData, {headers:headers})
      .then((res)=> {
        setSuccessTodo(true)
        console.log("success")
      })
      setNameTodo('')
      onClose()
    }

    const setHiddenMessage = () => {
      setSuccessTodo(false)
    }


  const handleOnClose = (e) => {
    if (e.target.id === "createNewTask") onClose();
  };
  if (!visible) return null;
  return (
    <div
      id="createNewTask"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <div className="w-1/4 bg-violet-800/50 h-60 px-4 rounded-lg justify-items-center">
        <p className="text-xl font-bold py-5">Create new task</p>
        <input
          type="text"
          value={nameTodo || ''}
          onChange={(e)=>setNameTodo(e.target.value)}
          onClick={setHiddenMessage}
          placeholder="Enter name task"
          className="px-2 py-2 w-full text-lg capitalize rounded-lg bg-gray-700"
        />
        {successTodo && <div className="pt-2 text-green-400 font-semibold">Created todo success</div>}
        <div className="flex items-center justify-end mt-8">
            <button className="bg-gray-700 hover:bg-slate-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>Cancel</button>
            <button onClick={handleCreateTask} type="submit" className="bg-indigo-700 hover:bg-indigo-600 ml-5 px-5 py-2 text-lg rounded-lg ">Create task</button>
        </div>
      </div>
    </div>
  );
}

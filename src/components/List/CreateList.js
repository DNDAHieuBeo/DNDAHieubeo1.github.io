import { useState } from "react";
import axios from "axios";

export default function CreateNewList({ visible, onClose }) {
  const [name, putName] = useState();
  const [desc, putDesc] = useState();
  const [success, setSuccess] = useState(false);
  
  const user = JSON.parse(localStorage.getItem("user-data"));
  const headers = {
      "access-token": user.access_token,
      'uid': user.uid,
      'client': user.client,
  };

  const postList = async(e) => {
    e.preventDefault();
    setSuccess(false)
    const formData = {
      name: name,
      description: desc
    }

    await axios
    .post("http://dev.thanqminh.com:3000/task_lists", formData, {headers: headers})
    .then((res) => {
      setSuccess(true)
      window.location.reload(false);
    });
    putName('');
    putDesc('');
    onClose();
  }

  const handleOnClose = (e) => {
    if (e.target.id === "NewList") onClose();
  };
  if (!visible) return null;

 
  return (
    <div
      id="NewList"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <form className="max-w-xl bg-slate-800/50 h-60 px-4 rounded-lg">
        <p className="text-xl font-bold py-5">NewList</p>
        <div className=" items-center space-x-3">
          <input
            value={name || ""}
            
            onChange={(e) => {putName(e.target.value)}}
            type="text"
            placeholder="Name list"
            className="px-2 py-2 text-lg capitalize rounded-lg bg-gray-700"
          />
        </div>
        {success && <p className="pt-2 text-green-400 font-semibold">Created list todo success</p>}
        <div className="flex items-center justify-end mt-8">
            <button className="bg-gray-700 hover:bg-slate-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>Cancel</button>
            <button onClick={postList} type="submit" className="bg-indigo-700 hover:bg-indigo-600 ml-5 px-5 py-2 text-lg rounded-lg ">Create list</button>
        </div>
      </form>
    </div>
  );
}

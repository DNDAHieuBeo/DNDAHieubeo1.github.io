import {useState} from "react";
import axios from "axios";

export default function EditList({ data, url, visible, onClose }) {
  const [name, setName] = useState()
  const [desc, setDesc] = useState()

  const EditList = async () => {
    const formData = {
      name: name,
      description: desc
    }
    await axios
    .patch(url.url, formData, {headers: url.headers})
  } 
  

  const handleOnClose = (e) => {
    if (e.target.id === "EditList") onClose();
  };
  if (!visible) return null;

  
  return (
    <div
      id="EditList"
      onClick={handleOnClose}
      className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
    >
      <form method="PUT" className="max-w-xl bg-slate-800/50 h-auto py-4 px-4 rounded-lg">
        <p className="text-xl font-bold pb-5">Edit List</p>
        <div className="flex items-center space-x-3">
          <input
            type="text"
            value={name || ""}
            onChange={(e)=>setName(e.target.value)}
            placeholder={data.name}
            className="px-2 py-2 text-lg capitalize rounded-lg bg-gray-700"
          />

        </div>
        <div className="flex items-center justify-end mt-8">
            <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>Cancel</button>
            <button onClick={EditList} type="submit" className="bg-indigo-700 hover:bg-indigo-600 ml-5 px-5 py-2 text-lg rounded-lg ">Confirm edit</button>
        </div>
      </form>
    </div>
    );
  }
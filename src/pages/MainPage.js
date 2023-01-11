
import { useState, useEffect } from "react";
import axios from "axios";
import add from "../assets/img/add.svg";
import List from "../components/List/List";
import NewList from "../components/List/CreateList";

export default function UserSpace() {
  const [lists, setLists] = useState([]);
  const user = JSON.parse(localStorage.getItem("user-data"));
  const headers = {
    "access-token": user.access_token,
    uid: user.uid,
    client: user.client,
  };
  const [createNewList, setCreateNewList] = useState(false);
  const handleCreate = () => {
    setCreateNewList(!createNewList);
  };
  const getLists = async () => {
    await axios
      .get("http://dev.thanqminh.com:3000/task_lists", { headers: headers })
      .then((res) => {
        setLists(res.data);
      });
  };
  useEffect(() => {
    getLists();
  }, []);
  return (
    <div className=" bg-mountain bg-cover bg-repeat flex justify-center ">
      <div className="h-screen w-full items-start px-10 flex">
        <button
          onClick={() => setCreateNewList(true)}
          className="absolute right-3 bottom-3 h-12 bg-gray-700 px-4 py-2 rounded-full justify-center items-center hover:bg-indigo-500 "
          type="button"
        >
          <img className="w-5 " src={add} alt="create list" />
        </button>
        <NewList onClose={handleCreate} visible={createNewList} />
        {lists.map((list) => (
          <List key={list.id} headers={headers} props={list} />
        ))}
      </div>
    </div>
  );
}

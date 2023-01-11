import editIcon from "../../assets/img/edit.svg";
import deleteIcon from "../../assets/img/trash.svg";
import {useState} from "react"
import EditList from "./EditList";
import DeleteList from "./DeleteList";
import axios from "axios";

export default function ListSelection (url) {
    const [showEditList, setShowEditList] = useState(false);
    const handleEditList = () => {
        setShowEditList(!showEditList);
    }
    const [showDeleteList, setShowDeleteList] = useState(false);
    const handleDeleteList = () => {
        setShowDeleteList(!showDeleteList);
    }
    const handleDelete = async() => {
        await axios
        .delete(url.url, {headers:url.headers})
        .then((res) => {

        })
    }
    return (
        <div id="ListSelection" className="flex">
            <div onClick={()=> setShowEditList(true)} className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer">
                <img className="w-5 " src={editIcon} alt="Edit list"/>
               
            </div>
            <EditList data={url.data} url={url} onClose={handleEditList} visible={showEditList} />
            <div onClick={()=> setShowDeleteList(true)} className="flex items-center py-2 px-4 hover:bg-gray-300 cursor-pointer" >
                <img className="w-5" src={deleteIcon} alt="Delete list"/>
                
            </div>
            <DeleteList onClose={handleDeleteList} visible={showDeleteList} handleDel={handleDelete}/>
        </div>
    )
}
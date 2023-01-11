import warningIcon from "../../assets/img/warning.svg"

export default function DeleteList({ visible, onClose, handleDel }) {
    const handleOnClose = (e) => {
      if (e.target.id === "deleteList") onClose();
    };
    if (!visible) return null;
    const deleteList = () => {
      handleDel();
    }
    return (
      <div
        id="deleteList"
        onClick={handleOnClose}
        className="fixed inset-0 bg-black bg-opacity-30 backdrop-blur-sm flex justify-center items-center z-50"
      >
        <form method="DELETE" className="max-w-xl bg-slate-800/50 h-auto py-4 px-8 rounded-lg">
          <p className="text-xl font-bold pb-5">Delete List</p>
          <div className="flex flex-col items-center space-x-3">
            <img className="w-10 mb-5" src={warningIcon} alt="delete"/>
            <p>Delete this list ?</p>
          </div>
          <div className="flex items-center justify-center mt-8">
              <button className="bg-gray-700 hover:bg-gray-600 px-5 py-2 text-lg rounded-lg " onClick={onClose}>Cancel</button>
              <button onClick={deleteList} className="bg-red-700 hover:bg-red-600 ml-5 px-5 py-2 text-lg rounded-lg ">Delete</button>
          </div>
        </form>
      </div>
    );
  }
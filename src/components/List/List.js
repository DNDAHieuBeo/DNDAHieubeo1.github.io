import ListOptions from "./ListSelection";
import ListTodo from "./ListTodo";

export default function Lists({ headers, props }) {
  return (
    <div className="bg-white mt-5 w-1/4 rounded-lg p-4 ml-4">
      <div className="flex justify-between relative ">
        <div className="flex items-center space-x-3 text-black">
          <p className="text-2xl ">{props.name}</p>
        </div>

        <ListOptions
          url={"http://dev.thanqminh.com:3000/task_lists/" + props.id}
          id={props.id}
          data={props}
          headers={headers}
        />
      </div>
      <ListTodo id={props.id} />
    </div>
  );
}

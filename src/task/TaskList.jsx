import { FaStar } from "react-icons/fa";

export default function TaskList({ tasks }) {
  const tagColors = {
    web: "bg-red-500",
    javascript: "bg-yellow-500",
    nodejs: "bg-green-500",
    reactjs: "bg-blue-500",
    default: "bg-gray-400",
  };

  return (
    <div className="overflow-auto">
      <table className="table-fixed overflow-auto xl:w-full">
        <thead>
          <tr>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[48px]"></th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-[300px]">
              {" "}
              Title{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize w-full">
              {" "}
              Description{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[350px]">
              {" "}
              Tags{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Priority{" "}
            </th>
            <th className="p-4 pb-8 text-sm font-semibold capitalize md:w-[100px]">
              {" "}
              Options{" "}
            </th>
          </tr>
        </thead>
        <tbody>
          {tasks.map((task) => (
            <tr className="border-b border-[#2E3443] [&>td]:align-baseline [&>td]:px-4 [&>td]:py-2">
              <td>
                {task.isFavorite ? 
                  <FaStar className="text-amber-300" /> : <FaStar className="text-gray-300" />
                }
              </td>
              <td>{task.title}</td>
              <td>
                <div>{task.description}</div>
              </td>

              <td>
                <ul className="flex justify-center gap-1.5 flex-wrap">
                  {task.tags.map((tag) => {
                    const tagColor =
                      tagColors[tag.toLowerCase()] || tagColors.default;
                    return (
                      <li
                        key={tag}
                        className={`rounded-full px-3 py-1 text-xs font-semibold text-white ${tagColor}`}
                      >
                        {tag}
                      </li>
                    );
                  })}
                </ul>
              </td>

              <td className="text-center">{task.priority}</td>
              <td>
                <div className="flex items-center justify-center space-x-3">
                  <button className="text-red-500">Delete</button>
                  <button className="text-blue-500">Edit</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

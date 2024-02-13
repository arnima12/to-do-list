import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';
import { MdDelete } from "react-icons/md";
const List = ({ item }) => {
  const { handleEditChange, handleDelete, handleComplete, completedItems } = useContext(MyContext);
  return (
    <div className="overflow-x-auto">
      <table className="table" style={{ border: 'none', borderCollapse: 'collapse' }}>
        <tbody>
          <tr>
            <td><input className=" w-96 text-center text-2xl text-sky-600" value={item.title} onChange={(e) => handleEditChange(e, item)} disabled={item.completed} /></td>

            <td><button onClick={() => handleDelete(item.id)}><MdDelete className="text-sky-600 text-3xl" /></button></td>
            <td className="w-48 text-center text-sky-600 font-bold text-2xl"><button
              onClick={() => handleComplete(item.id)}
              disabled={completedItems.includes(item.id)}
            >
              {completedItems.includes(item.id) ? '✓' : 'Mark Complete'}
            </button></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default List;
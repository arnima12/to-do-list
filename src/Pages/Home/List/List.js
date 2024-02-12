import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';

const List = ({item}) => {
    const {handleEditChange,handleDelete,handleComplete,completedItems} = useContext(MyContext);
    return (
        <div className="overflow-x-auto">
        <table className="table">
          <tbody>
           <tr>
            
             <td><input className=" w-96 text-center text-2xl " value={item.title} onChange={(e)=> handleEditChange(e,item)}/></td>
             <td><button onClick={() => handleDelete(item.id)}>Delete</button></td>
             <td><button
    onClick={() => handleComplete(item.id)}
    disabled={completedItems.includes(item.id)}
>
    {completedItems.includes(item.id) ? 'Completed' : 'Mark Complete'}
</button></td>
            </tr>
            
          </tbody>
        </table>
      </div>
    );
};

export default List;
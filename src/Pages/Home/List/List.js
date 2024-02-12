import React from 'react';

const List = ({item}) => {
    return (
        <div className="flex gap-8 mt-8 text-black">
           <p>{item.title}</p>
           <button>Delete</button>
        </div>
    );
};

export default List;
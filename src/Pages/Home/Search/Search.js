import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';

const Search = () => {
    const {handleSearchChange} = useContext(MyContext)
    return (
        <div className="flex justify-center mt-12">
            <input type="text" placeholder="Search..." className="input input-ghost w-full max-w-xs  border-sky-400 border-1 rounded" onChange={(e) => handleSearchChange(e.target.value)}/>
        </div>
    );
};

export default Search;
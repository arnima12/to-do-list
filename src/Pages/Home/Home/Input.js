import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';
import List from '../List/List';
import Search from '../Search/Search';

const Input = () => {
    const {inputValue,handleInputChange,handleButtonClick,filteredListItems} = useContext(MyContext)
    
    return (
        <div>
            <form onSubmit= {handleButtonClick} className = "flex justify-center mt-8 gap-4">
            <input type="text" placeholder="What's your task?" value={inputValue}  onChange={handleInputChange} className="input border-cyan-500 border-2 w-full max-w-xs" />
            <button className="bg-sky-600 text-3xl w-12 rounded text-white">+</button>
            </form>
            <Search/>
            <h1 className="text-center mt-12 text-5xl text-sky-800">Task List</h1>
            <div className="flex justify-center flex-row mt-12 rounded border-2 mx-8 py-8 border-cyan-600">
                
                <ul>
                    {filteredListItems.map((item) => (
                        <List key={item.id} title={item.title} item={item} ></List>

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Input;
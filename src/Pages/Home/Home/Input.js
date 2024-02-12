import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';
import List from '../List/List';

const Input = () => {
    const {inputValue,handleInputChange,handleButtonClick,listItems} = useContext(MyContext)
    
    return (
        <div>
            <form onSubmit= {handleButtonClick} className = "flex justify-center mt-8 gap-4">
            <input type="text" placeholder="Type here" value={inputValue}  onChange={handleInputChange} className="input border-green-700 w-full max-w-xs" />
            <button className="bg-emerald-700 text-3xl w-12 rounded text-white">+</button>
            </form>
            <div className="flex justify-center flex-row">
                <ul>
                    {listItems.map((item) => (
                        <List key={item.id} title={item.title} item={item} ></List>

                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Input;
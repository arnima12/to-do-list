import React, { createContext, useEffect, useState } from 'react';
export const MyContext = createContext();
const Provider = ({children}) => {
const [inputValue,setInputValue] = useState('');
const [listItems,setListItems] = useState([]);
const [idCounter, setIdCounter] = useState(0);
useEffect(() => {
    const storedListItems = localStorage.getItem('listItem');
    const parsedListItems = storedListItems ? JSON.parse(storedListItems) : [];
    setListItems(parsedListItems);
    setIdCounter(Math.max(...parsedListItems.map(item => item.id)) + 1); 
  }, []);
const handleInputChange = (e) =>{
    setInputValue(e.target.value)
    console.log(inputValue)
}
const handleButtonClick = (e) =>{
    e.preventDefault();
    if (inputValue) {

        const newList = [...listItems, { id: idCounter, title: inputValue, completed: false}];
        setListItems(newList)
        localStorage.setItem('listItem', JSON.stringify(newList))
    }
    
    setInputValue(" ");
   
}
const authInfo = {
    inputValue,
    handleInputChange,
    handleButtonClick,
    listItems
}
    return (
        <div>
            <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
        </div>
    );
};

export default Provider;
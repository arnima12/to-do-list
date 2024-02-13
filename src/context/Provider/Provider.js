import React, { createContext, useEffect, useState } from 'react';
export const MyContext = createContext();
const Provider = ({children}) => {
const [inputValue,setInputValue] = useState('');
const [listItems,setListItems] = useState([]);
const [idCounter, setIdCounter] = useState(0);
const [completedItems, setCompletedItems] = useState([]);
const [count,setCount] = useState(0);
const [completeCount,setCompleteCount] = useState(0);
const [searchTerm, setSearchTerm] = useState('');
useEffect(() => {
    const storedListItems = localStorage.getItem('listItem');
    const storedIdCounter = localStorage.getItem('idCounter');
    const storedCompletedItems = localStorage.getItem('completedItems');
    const storedCount =  localStorage.getItem('count');
    const storedCompleteCount =  localStorage.getItem('completeCount');
    const parsedListItems = storedListItems ? JSON.parse(storedListItems) : [];
    const parsedIdCounter = storedIdCounter ? parseInt(storedIdCounter) : 0;
    const parsedCompletedItems = storedCompletedItems ? JSON.parse(storedCompletedItems) : [];
    const parsedCount = storedCount? JSON.parse(storedCount) : 0;
    const parsedCompleteCount = storedCompleteCount? JSON.parse(storedCompleteCount) : 0;
    setListItems(parsedListItems);
    setIdCounter(parsedIdCounter);
    setCount(parsedCount);
    setCompleteCount(parsedCompleteCount);
    setCompletedItems(parsedCompletedItems)
  }, []);
const handleInputChange = (e) =>{
    setInputValue(e.target.value)
    console.log(inputValue)
}
const handleButtonClick = (e) =>{
    e.preventDefault();
    
    if (inputValue) {

        const newList = [...listItems, { id: idCounter, title: inputValue}];
        setListItems(newList)
        localStorage.setItem('listItem', JSON.stringify(newList))
        localStorage.setItem('idCounter', JSON.stringify(idCounter + 1));
        localStorage.setItem('count', JSON.stringify(count + 1));
        
    }
    
    setInputValue("");
    setIdCounter(idCounter + 1)
    setCount(count+1);
    console.log(count)
   
}
const handleEditChange = (e,item) =>{
    const updatedListItems = listItems.map((listItem) => {
        if (listItem.id === item.id) {
          return { ...listItem, title: e.target.value};
        } else {
          return listItem;
        }
        
    });
    localStorage.setItem('listItem', JSON.stringify(updatedListItems))
    setListItems(updatedListItems);

}
const handleDelete = (id) =>{
    const filteredList = listItems.filter((item) => item.id !== id);
    setListItems(filteredList);
    localStorage.setItem('listItem', JSON.stringify(filteredList))
    localStorage.setItem('count', JSON.stringify(count - 1));
    localStorage.setItem('completeCount', JSON.stringify(completeCount - 1));
    setCount(count - 1);
    setCompleteCount(completeCount - 1)
    
}
const handleComplete = (id) => {
    const isCompleted = completedItems.includes(id);
    const updatedCompletedItems = isCompleted
        ? completedItems.filter((itemId) => itemId !== id)
        : [...completedItems, id]; 
setCompletedItems(updatedCompletedItems);
setCompleteCount(completeCount + 1)
localStorage.setItem('completedItems', JSON.stringify(updatedCompletedItems));
localStorage.setItem('completeCount', JSON.stringify(completeCount + 1));
};
const handleSearchChange = (value) => {
    setSearchTerm(value);
  };
  const filteredListItems = listItems.filter((item) =>
  item.title.toLowerCase().includes(searchTerm.toLowerCase())
);
const authInfo = {
    inputValue,
    handleInputChange,
    handleButtonClick,
    filteredListItems,
    handleEditChange,
    handleDelete,
    handleComplete,
    completedItems,
    count,
    completeCount,
    handleSearchChange
    
}
    return (
        <div>
            <MyContext.Provider value={authInfo}>{children}</MyContext.Provider>
        </div>
    );
}

export default Provider;
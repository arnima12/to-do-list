import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';

const Counter = () => {
    const {count} = useContext(MyContext);
    return (
        <div className="flex flex-col items-center my-12 ">
            <h1 className="text-sky-700 mb-12 text-4xl">Count your task!</h1>
            <div className="countdown font-mono text-6xl bg-sky-300 w-64 h-40 flex justify-center items-center rounded-md border-green-400 text-white">
        {count}
      </div></div>

    );
};

export default Counter;
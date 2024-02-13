import React, { useContext } from 'react';
import { MyContext } from '../../../context/Provider/Provider';

const Counter = () => {
    const {count,completeCount} = useContext(MyContext);
    return (
        <div className="flex flex-row justify-center my-12 gap-8">
            <div>
            <h1 className="text-sky-700 mb-12 text-3xl text-center">Total Task</h1>
            <div className="countdown font-mono text-6xl bg-sky-300 w-64 h-40 flex justify-center items-center rounded-md border-green-400 text-white">
        {count}
      </div>
      </div>
      <div>
            <h1 className="text-sky-700 mb-12 text-3xl text-center">Completed Task</h1>
            <div className="countdown font-mono text-6xl bg-sky-300 w-64 h-40 flex justify-center items-center rounded-md border-green-400 text-white">
        {completeCount}
      </div>
      </div>
      </div>

    );
};

export default Counter;
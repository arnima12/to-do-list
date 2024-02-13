import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className="navbar bg-sky-400  text-white ">
            <Link to="/" className="btn btn-ghost normal-case text-xl">To Do List</Link>
        </div>
    );
};

export default Navbar;
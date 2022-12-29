import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const Navbar = () => {
    const [toggle, setToggle] = useState(false);
    const {user, logOut} = useContext(AuthContext)

    const toggleData = ()=> {
       setToggle(!toggle)       
    }   
     return (
       <nav className="py-5 bg-white-shadow md:flex md:items-center md:justify-between lg:border-b">
        <div className='flex justify-between items-center'>
            <Link to="/" className="text-[var(--main-color)] text-2xl cursor-pointer font-bold md:pl-0 pl-7">FOCUS</Link>

            <span className='text-3xl font-bold text-[var(--main-color)] cursor-pointer md:hidden block mx-3' onClick={toggleData}>
                <i className={toggle ? "uil uil-times" : "uil uil-bars"}></i>
            </span>
        </div>
        <ul className={`md:flex md:items-center z-[1] md:z-auto md:static absolute bg-white w-full md:w-auto md:py-0 py-4 md:pl-0 pl-7 md:opacity-100 opacity-0 top-[][-400px] transition-all ease-in duration-500 ${toggle ? 'top-80px opacity-100 drop-shadow-sm': "top-[-400px] opacity-0" }`}>

            <li className='mx-4 my-6 md:my-0'>
                <Link to="add-task" className='text-base hover:text-[var(--main-color)] duration-500 font-semibold '>Add Task</Link>
            </li>

            <li className='mx-4 my-6 md:my-0'>
                <Link to="my-task" className='text-base hover:text-[var(--main-color)] duration-500 font-semibold '>My Task</Link>
            </li>

            <li className='mx-4 my-6 md:my-0'>
                <Link to="completed-task" className='text-base hover:text-[var(--main-color)] duration-500 font-semibold '>Completed Task</Link>
            </li>

            {
                !user ? <li className='mx-4 my-6 md:my-0'>
                <Link to="/signup" className='text-base hover:text-[var(--main-color)] duration-500 font-semibold '>Signup</Link>
            </li>
            :
            
            <li className='mx-4 my-6 md:my-0'>
                <button onClick={logOut} className='text-base hover:text-[var(--main-color)] duration-500 font-semibold '>Logout</button>
            </li>
            }
        </ul>
       </nav>
    );
};

export default Navbar;
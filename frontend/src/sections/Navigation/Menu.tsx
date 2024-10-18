import React from 'react';
import { Link } from 'react-router-dom';
import Path from '../../Paths';

interface MenuProps {
    MenuClickHandler: () => void;
    isOpen: boolean;
}

const Menu: React.FC<MenuProps> = ({ 
    MenuClickHandler,
    isOpen,
 }) => {

    return(
        <>
            {/* Mobile Hamburger button */}
            <div className="xl:hidden flex gap-2 items-center">
                <button className="group h-14 w-14 rounded-xl hover:bg-slate-200" onClick={MenuClickHandler}>
                        <div className="grid justify-items-center gap-1.5">
                            <span className="h-1 w-8 rounded-full bg-gray-700 transition group-hover:rotate-45 group-hover:translate-y-2.5"></span>
                            <span className="h-1 w-8 rounded-full bg-gray-700 group-hover:scale-x-0 transition"></span>
                            <span className="h-1 w-8 rounded-full bg-gray-700 group-hover:-rotate-45 group-hover:-translate-y-2.5"></span>
                        </div>
                </button>
            </div>

            {/* Backdrop */}
            {isOpen && (
                <div
                onClick={MenuClickHandler}
                className="fixed inset-0 bg-black/50 z-40"
                ></div>
            )}
            
            {/* Menu links */}
            <ul className={`${isOpen ? 'absolute top-0 left-0 right-0 w-full backdrop-blur-xl bg-white/30 z-50 py-20 slide-down' : 'max-xl:hidden'} max-xl:flex-col flex gap-12 items-center`}>
                <div className={`${isOpen ? '' : 'hidden'} w-[36px] h-[36px] hover:cursor-pointer hover:text-blue-600 transition`} onClick={MenuClickHandler} >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/></svg>
                </div>
                
                <Link to={Path.Aboutus} className='hover:bg-gray-800 p-2 rounded-lg'>
                    <li className={isOpen ? `text-lg`: ''}>
                        <h1 className='text-white'>About us</h1>
                    </li>
                </Link>

                <Link to={Path.Audit} className='hover:bg-gray-800 p-2 rounded-lg'>
                    <li className={isOpen ? `text-lg`: ''}>
                        <h1 className='text-white'>Audit</h1>
                    </li>   
                </Link>
            </ul>
        </>
    );
}

export default Menu;
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../context/authSlice.ts";

export default function Navbar() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [isOpenMobile , setOpenMobile] = useState<Boolean>(false);

    const handleLogout = () => {
        dispatch(logout());
        navigate('/auth/login');
    };

    return (
        <nav className=' flex justify-between dark:border-gray-700 rounded-none bg-transparent dark:bg-transparent py-4 sm:px-[15px] px-2'>
            
            <div className="flex flex-col xl:flex-row w-full">
            <div className=" flex items-center w-full">
                <img className=" block xl:hidden m-auto"src="https://matdash-react-tailwind-main.netlify.app/assets/logo-Dq6uoD-m.svg" alt="" />
                <span onClick={()=>{setOpenMobile(e =>!e)}} className=" h-10 w-10 flex xl:hidden hover:text-primary hover:bg-lightprimary rounded-full justify-center items-center cursor-pointer"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--tabler text-gray-500" width="21" height="21" viewBox="0 0 24 24"><path fill="none" stroke="currentColor" className="text-inherit" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 12a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0m7 0a1 1 0 1 0 2 0a1 1 0 1 0-2 0"></path></svg></span>

            </div>

            <div className={`${isOpenMobile?'block':'hidden'} xl:flex mx-auto flex`}>
            <div onClick={() => {document.documentElement.classList.toggle('dark')}} className=" h-10 w-10 flex justify-center hover:text-primary hover:bg-lightprimary dark:hover:bg-darkminisidebar  dark:hover:text-primary focus:ring-0 rounded-full xl:block xl:flex justify-center items-center cursor-pointer text-darklink text-red-500  dark:text-white"><span className="flex items-center text-inherit"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-inherit" width="20" height="20" viewBox="0 0 24 24"><path stroke="none" className="fill-current text-inherit" d="m21.067 11.857l-.642-.388zm-8.924-8.924l-.388-.642zM21.25 12A9.25 9.25 0 0 1 12 21.25v1.5c5.937 0 10.75-4.813 10.75-10.75zM12 21.25A9.25 9.25 0 0 1 2.75 12h-1.5c0 5.937 4.813 10.75 10.75 10.75zM2.75 12A9.25 9.25 0 0 1 12 2.75v-1.5C6.063 1.25 1.25 6.063 1.25 12zm12.75 2.25A5.75 5.75 0 0 1 9.75 8.5h-1.5a7.25 7.25 0 0 0 7.25 7.25zm4.925-2.781A5.75 5.75 0 0 1 15.5 14.25v1.5a7.25 7.25 0 0 0 6.21-3.505zM9.75 8.5a5.75 5.75 0 0 1 2.781-4.925l-.776-1.284A7.25 7.25 0 0 0 8.25 8.5zM12 2.75a.38.38 0 0 1-.268-.118a.3.3 0 0 1-.082-.155c-.004-.031-.002-.121.105-.186l.776 1.284c.503-.304.665-.861.606-1.299c-.062-.455-.42-1.026-1.137-1.026zm9.71 9.495c-.066.107-.156.109-.187.105a.3.3 0 0 1-.155-.082a.38.38 0 0 1-.118-.268h1.5c0-.717-.571-1.075-1.026-1.137c-.438-.059-.995.103-1.299.606z"></path></svg></span></div>
            <button  onClick={handleLogout} className=" font-medium xl:block xl:flex h-10 px-10 w-10 text-darklink dark:text-white text-base hover:text-primary  hover:bg-lightprimary dark:hover:text-primary dark:hover:bg-darkminisidebar  rounded-full flex justify-center  items-center cursor-pointer">Logout</button>
            </div>
            </div>
        </nav>
    )
}

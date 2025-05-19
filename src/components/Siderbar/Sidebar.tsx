import  { useEffect, useRef, useState } from 'react'
import { NavLink } from 'react-router-dom';

export default function Sidebar() {
    const [isOpen,SetOpen] = useState<Boolean>(false);
    const [isOpenMobile , SetOpenMobile] = useState<Boolean>(false);
    const sidebarRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (sidebarRef.current && !sidebarRef.current.contains(event.target as Node)) {
                SetOpenMobile(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

  return (
    <div className={`${isOpen?'mr-0':'mr-4'} transition-all duration-[.5s] ease-in-out h-full flex dark:bg-transparent`}>
<div className=' absolute xl:hidden flex-col justify-start items-center w-[72px] transition-transform duration-300 ease-in-out '>
        <div className='flex w-full justify-start items-center p-5 '>

        <button onClick={()=>SetOpenMobile(i =>!i)}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar text-black dark:text-white dark:hover:text-primary" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"className="text-inherit" strokeLinecap="round" strokeWidth="1.5"><path className="text-inherit" stroke="currentColor" d="M20 7H4"></path><path stroke="currentColor"  className="text-inherit"d="M20  12H4" opacity=".5"></path><path stroke="currentColor" className="text-inherit" d="M20 17H4"></path></g></svg>
        </button>
        </div>

    </div>


    <div className='hidden xl:block bg-[var(--color-lightgray)] flex-col justify-start items-center w-[72px] transition-transform duration-300 ease-in-out h-screen dark:bg-[var(--color-dark)]'>
        <div className='flex w-full justify-start items-center p-5 '>

        <button onClick={()=>SetOpen(i =>!i)}>
        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar text-black dark:text-white dark:hover:text-primary" width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"className="text-inherit" strokeLinecap="round" strokeWidth="1.5"><path className="text-inherit" stroke="currentColor" d="M20 7H4"></path><path stroke="currentColor"  className="text-inherit"d="M20  12H4" opacity=".5"></path><path stroke="currentColor" className="text-inherit" d="M20 17H4"></path></g></svg>
        </button>
        </div>
        <button type="button" className="group relative p-0.5 text-center font-medium rounded-md h-12 w-12 dark:text-white/70 rounded-tw flex justify-center items-center mx-auto mb-2 text-white bg-primary hover:bg-[var(--color-primary-emphasis)] hover:text-white dark:hover:text-white"><span className="flex items-center gap-2 transition-all duration-150 justify-center rounded-md px-4 py-2 text-sm"><svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar dark:bg-blue " width="24" height="24" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path stroke="white" d="M4.979 9.685C2.993 8.891 2 8.494 2 8s.993-.89 2.979-1.685l2.808-1.123C9.773 4.397 10.767 4 12 4s2.227.397 4.213 1.192l2.808 1.123C21.007 7.109 22 7.506 22 8s-.993.89-2.979 1.685l-2.808 1.124C14.227 11.603 13.233 12 12 12s-2.227-.397-4.213-1.191z"></path><path stroke="white" d="m5.766 10l-.787.315C2.993 11.109 2 11.507 2 12s.993.89 2.979 1.685l2.808 1.124C9.773 15.603 10.767 16 12 16s2.227-.397 4.213-1.191l2.808-1.124C21.007 12.891 22 12.493 22 12s-.993-.89-2.979-1.685L18.234 10M5.766 14l-.787.315C2.993 15.109 2 15.507 2 16s.993.89 2.979 1.685l2.808 1.124C9.773 19.603 10.767 20 12 20s2.227-.397 4.213-1.192l2.808-1.123C21.007 16.891 22 16.494 22 16c0-.493-.993-.89-2.979-1.685L18.234 14" opacity=".5"></path></g></svg></span></button>
        
    </div>

    <div className={`${isOpen ?'w-[240px] ':'w-[0px] '}  hidden xl:block h-full overflow-hidden  transition-[transform,width] duration-[1s] ease-in-out bg-white dark:bg-[var(--color-darkgray)]`}>
        <div className={`${isOpen ?'translate-x-[0px]':'translate-x-[-300px]'} flex flex-col items-center justify-start w-[240px] box-border h-full transition-all duration-[1.2s] ease-in-out `}>

            <div className='pe-4 rtl:pe-0 rtl:ps-4 px-5 py-4'>
            <img src="https://matdash-react-tailwind-main.netlify.app/assets/logo-Dq6uoD-m.svg" className=' w-full' alt="" />
            </div>
            <div className='w-full flex flex-col justify-center relative px-4 mt-4'>
                <label htmlFor="" className='text-link dark:text-white/70 font-semibold caption font-semibold leading-6 tracking-widest text-xs text-sm  pb-2 uppercase'>DASHBOARDS</label>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                        `flex items-center px-4 py-3 mb-1 gap-3 text-black text-[15px] leading-[normal] font-normal dark:text-white  rounded-xl dark:hover:text-white cursor-pointer transition-colors ${
                            isActive 
                                ? 'active bg-primary text-white' 
                                : 'hover:text-primary dark:hover:text-primary'
                        }`
                    }
                >
                    <span className='flex justify-start items-center gap-4 text-inherit'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-inherit" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"className='text-inherit' strokeWidth="1.5"><path className='text-inherit' stroke='currentColor'  strokeLinecap="round" d="M22 22H2"></path><path className='text-inherit' stroke='currentColor' d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22" opacity=".5"></path><path className='text-inherit' stroke='currentColor' d="M15 22V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17"></path><path className='text-inherit' stroke='currentColor' d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22" opacity=".5"></path></g></svg>
                        Dashboard
                    </span>
                </NavLink>
                <NavLink 
                    to="/upload" 
                    className={({ isActive }) => 
                        `flex items-center px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal dark:text-white text-black rounded-xl   cursor-pointer transition-colors ${
                            isActive 
                                ? 'active bg-primary text-white hover:text-white '   
                                : 'hover:text-primary dark:hover:text-primary'
                        }`
                    }
                >
                    <span className='flex justify-start items-center gap-4 text-inherit'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar undefined text-inherit" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" className='text-inherit ' strokeWidth="1.5"><path className='text-inherit' stroke='currentColor' d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"></path><path className='text-inherit' stroke='currentColor' d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" opacity=".5"></path></g></svg>
                        Upload
                    </span>
                </NavLink>
            </div>
            <hr className='w-[90%] mx-auto my-5 p-4 border-[var(--color-border)] dark:border-[var(--color-darkborder)]'/>
        </div>
    </div>


    <div ref={sidebarRef} className={`${isOpenMobile ?'w-[240px] ':'w-[0px] '} fixed z-10 xl:hidden block h-full overflow-hidden  transition-[transform,width] duration-[1s] ease-in-out bg-white dark:bg-[var(--color-darkgray)]`}>
        <div className={`${isOpenMobile ?'translate-x-[0px]':'translate-x-[-300px]'} flex flex-col items-center justify-start w-[240px] box-border h-full transition-all duration-[1.2s] ease-in-out `}>

            <div className='pe-4 rtl:pe-0 rtl:ps-4 px-5 py-4'>
            <img src="https://matdash-react-tailwind-main.netlify.app/assets/logo-Dq6uoD-m.svg" className=' w-full' alt="" />
            </div>
            <div className='w-full flex flex-col justify-center relative px-4 mt-4'>
                <label htmlFor="" className='text-link dark:text-white/70 font-semibold caption font-semibold leading-6 tracking-widest text-xs text-sm  pb-2 uppercase'>DASHBOARDS</label>
                <NavLink 
                    to='/' 
                    className={({ isActive }) => 
                        `flex items-center px-4 py-3 mb-1 gap-3 text-black text-[15px] leading-[normal] font-normal dark:text-white  rounded-xl dark:hover:text-white cursor-pointer transition-colors ${
                            isActive 
                                ? 'active bg-primary text-white' 
                                : 'hover:text-primary dark:hover:text-primary'
                        }`
                    }
                >
                    <span className='flex justify-start items-center gap-4 text-inherit'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="text-inherit" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor"className='text-inherit' strokeWidth="1.5"><path className='text-inherit' stroke='currentColor'  strokeLinecap="round" d="M22 22H2"></path><path className='text-inherit' stroke='currentColor' d="M21 22v-7.5a1.5 1.5 0 0 0-1.5-1.5h-3a1.5 1.5 0 0 0-1.5 1.5V22" opacity=".5"></path><path className='text-inherit' stroke='currentColor' d="M15 22V5c0-1.414 0-2.121-.44-2.56C14.122 2 13.415 2 12 2s-2.121 0-2.56.44C9 2.878 9 3.585 9 5v17"></path><path className='text-inherit' stroke='currentColor' d="M9 22V9.5A1.5 1.5 0 0 0 7.5 8h-3A1.5 1.5 0 0 0 3 9.5V22" opacity=".5"></path></g></svg>
                        Dashboard
                    </span>
                </NavLink>
                <NavLink 
                    to="/upload" 
                    className={({ isActive }) => 
                        `flex items-center px-4 py-3 mb-1 gap-3 text-[15px] leading-[normal] font-normal dark:text-white text-black rounded-xl   cursor-pointer transition-colors ${
                            isActive 
                                ? 'active bg-primary text-white hover:text-white '   
                                : 'hover:text-primary dark:hover:text-primary'
                        }`
                    }
                >
                    <span className='flex justify-start items-center gap-4 text-inherit'>
                        <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" aria-hidden="true" role="img" className="iconify iconify--solar undefined text-inherit" width="18" height="18" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" className='text-inherit ' strokeWidth="1.5"><path className='text-inherit' stroke='currentColor' d="M20.942 3.058c2.47 2.469.468 8.474-4.47 13.413c-4.94 4.939-10.945 6.94-13.414 4.471c-2.47-2.47-.468-8.474 4.471-13.413S18.473.589 20.942 3.058Zm-17.884 0c-2.47 2.47-.468 8.475 4.47 13.413c4.94 4.939 10.945 6.94 13.414 4.471c2.47-2.469.468-8.474-4.471-13.413S5.527.589 3.058 3.058Z"></path><path className='text-inherit' stroke='currentColor' d="M14.5 12a2.5 2.5 0 1 1-5 0a2.5 2.5 0 0 1 5 0Z" opacity=".5"></path></g></svg>
                        Upload
                    </span>
                </NavLink>
            </div>
            <hr className='w-[90%] mx-auto my-5 p-4 border-[var(--color-border)] dark:border-[var(--color-darkborder)]'/>
        </div>
    </div>
    </div>
  )
}

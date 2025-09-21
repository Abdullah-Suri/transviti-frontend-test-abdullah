import {useState, useEffect, useRef} from 'react';
import logo from '@/assets/svg/logo.svg';
import searchIcon from '@/assets/svg/search-icon.svg';
import logoutIcon from '@/assets/svg/log-out-icon.svg';
import insightIcon from '@/assets/svg/insight-icon.svg';
import profileIcon from '@/assets/svg/profile-icon.svg';
import userAccImg from '@/assets/img/acc-img.png';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const menuRef = useRef(null);
    const [isProfileOpen, setIsProfileOpen] = useState(false);

    useEffect(() => {
        function handleClickOutside(event) {
          if (menuRef.current && !menuRef.current.contains(event.target)) {
            setIsOpen(false);
          }
        }
    
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);
      
  return (
    <nav className='bg-white'>
        <div className='container flex items-center justify-between py-4'>
            <div className='flex items-center'>
                <img src={logo} className='2xl:mr-8 mr-4' alt='TalentVare' />
                <ul className='lg:flex hidden items-center 2xl:gap-6 gap-2.5 2xl:text-base text-sm text-teriatory'>
                    <li className='font-medium'>
                        <Link to='/' className='text-primary'>Find Jobse</Link>
                    </li>
                    <li className='font-medium'>
                        <Link to='/' className='hover:text-primary'>Top Companies</Link>
                    </li>
                    <li className='font-medium'>
                        <Link to='/' className='hover:text-primary'>Job Tracker</Link>
                    </li>
                    <li className='font-medium'>
                        <Link to='/' className='hover:text-primary'>My Calendar</Link>
                    </li>
                    <li className='font-medium'>
                        <Link to='/' className='hover:text-primary'>Documents</Link>
                    </li>
                    <li className='font-medium'>
                        <Link to='/' className='hover:text-primary'>Messages</Link>
                    </li>
                    <li className='font-medium'>
                        <Link to='/' className='hover:text-primary'>Notifications</Link>
                    </li>
                </ul>
                <div ref={menuRef}>
                    <button className='lg:hidden block text-secondary' onClick={() => setIsOpen((prev) => !prev)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM3 11H15V13H3V11ZM3 18H21V20H3V18Z"></path></svg>
                    </button>
                    {isOpen && (
                        <div className='fixed left-0 top-0 sm:w-1/3 w-[80%] h-full z-[9] p-5 bg-white shadow-md rounded-e-md overflow-hidden'>
                            <button onClick={() => setIsOpen((prev) => !prev)}>
                                <svg xmlns="http://www.w3.org/2000/svg" className='size-5' viewBox="0 0 24 24" fill="currentColor"><path d="M11.9997 10.5865L16.9495 5.63672L18.3637 7.05093L13.4139 12.0007L18.3637 16.9504L16.9495 18.3646L11.9997 13.4149L7.04996 18.3646L5.63574 16.9504L10.5855 12.0007L5.63574 7.05093L7.04996 5.63672L11.9997 10.5865Z"></path></svg>
                            </button>
                            <ul className="">
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='text-primary'>Find Jobse</Link>
                                </li>
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='hover:text-primary'>Top Companies</Link>
                                </li>
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='hover:text-primary'>Job Tracker</Link>
                                </li>
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='hover:text-primary'>My Calendar</Link>
                                </li>
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='hover:text-primary'>Documents</Link>
                                </li>
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='hover:text-primary'>Messages</Link>
                                </li>
                                <li className='hover:bg-gray-100 py-2.5'>
                                    <Link to='/' className='hover:text-primary'>Notifications</Link>
                                </li>
                            </ul>
                            <button className='w-full sm:hidden block bg-primary hover:bg-hover-primary transition-all duration-200 text-white rounded-lg px-5 py-2.5 mt-2.5'>Resume Builder</button>
                        </div>
                    )}

                </div>
            </div>
            <div className='flex items-center gap-3.5'>
                <button className='sm:hidden flex'>
                    <img src={searchIcon} alt="search icon" />
                </button>
                <div className='sm:flex hidden items-center gap-5 bg-[#F6F9FF] py-2.5 xl:px-5 px-2.5 rounded-lg'>
                    <img src={searchIcon} alt="search icon" />
                    <input type="search" placeholder='Search' className='outline-none bg-transparent' />
                </div>
                <button className='sm:block hidden bg-primary hover:bg-hover-primary transition-all duration-200 text-white rounded-lg px-5 py-2.5'>Resume Builder</button>
                <div className="relative">
                    <div className="cursor-pointer" onClick={() => setIsProfileOpen(!isProfileOpen)}>
                        <img src={userAccImg} alt="User Account" className="w-10 h-10 rounded-full" />
                    </div>

                    <div className={`absolute z-[9] right-0 mt-4 w-48 bg-white shadow-md rounded-lg transition-all duration-300 overflow-hidden ${
                            isProfileOpen ? "max-h-48 opacity-100 p-2" : "max-h-0 opacity-0 p-0"
                        }`}
                    >
                        <ul className="text-gray-700">
                            <li className="flex items-center gap-1.5 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src={profileIcon} alt="profile icon" /> 
                                 My Profile
                            </li>
                            <li className="flex items-center gap-1.5 px-4 py-2 hover:bg-gray-100 cursor-pointer">
                                <img src={insightIcon} alt="insight icon" /> 
                                Insights
                            </li>
                            <li className="flex items-center gap-1.5 px-4 py-2 text-red-500 hover:bg-red-100/70 cursor-pointer">
                                <img src={logoutIcon} alt="log out icon" /> 
                                Logout
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </nav>
  )
}

export { Header }
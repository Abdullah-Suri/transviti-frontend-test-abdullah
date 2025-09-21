import {useState} from 'react'
import dropdownIcon from '@/assets/svg/dropdown-icon.svg'
import searchIcon from '@/assets/svg/search-white-icon.svg';

const SearchJobs = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenLocation, setIsOpenLocation] = useState(false);

  return (
    <div>
        <h4 className='text-xl font-semibold'>Find your Dream Job, <span className='text-primary'>Albert!</span></h4>
        <p className='text-sm font-medium text-teriatory mt-1.5'>Explore the latest job openings and apply for the best opportunities available today!</p>
        <div className='flex items-center justify-between lg:flex-nowrap flex-wrap bg-white p-5 rounded-[10px] mt-5'>
            <div className='lg:w-1/4 w-full'>
                <input type="text" className='outline-none placeholder:text-teriatory text-sm w-full focus-within:border-b' placeholder='Job Title, Company, or Keywords' />
            </div>
            <div className='w-fit flex items-center flex-wrap lg:mt-0 mt-2.5 max-md:gap-5'>
                <div className='relative text-teriatory lg:border-x sm:border-r' onClick={() => setIsOpen(!isOpen)}>
                    <div className='flex items-center gap-3.5 text-sm lg:px-7 px-3 select-none cursor-pointer'>
                        <span>Select Location</span>
                        <span>
                            <img src={dropdownIcon} alt="drop down icon" className={`transition-transform ${isOpen ? "rotate-180" : ""}`} />
                        </span>
                    </div>
                    {isOpen && (
                        <ul className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md z-10">
                            <li className='select-opt'>Karachi</li>
                            <li className='select-opt'>Lahore</li>
                            <li className='select-opt'>Islamabad</li>
                        </ul>
                    )}
                </div>
                <div className='relative text-teriatory' onClick={() => setIsOpenLocation(!isOpenLocation)}>
                    <div className='flex items-center gap-3.5 text-sm lg:px-7 px-3 select-none cursor-pointer'>
                        <span>Job type</span>
                        <span>
                            <img src={dropdownIcon} alt="drop down icon" className={`transition-transform ${isOpenLocation ? "rotate-180" : ""}`} />
                        </span>
                    </div>
                    {isOpenLocation && (
                        <ul className="absolute left-0 mt-2 w-full bg-white border rounded-md shadow-md z-10">
                            <li className='select-opt'>Remote</li>
                            <li className='select-opt'>On-site</li>
                            <li className='select-opt'>Hybrid</li>
                        </ul>
                    )}
                </div>
                <button className='max-sm:w-full flex items-center justify-center gap-2.5 text-sm bg-primary hover:bg-hover-primary transition-all duration-200 text-white rounded-lg px-9 py-2.5'>
                    <img src={searchIcon} alt="search icon" />
                    <span>
                        Search 
                    </span>
                </button>
            </div>
        </div>
    </div>
  )
}

export { SearchJobs }
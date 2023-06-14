import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';

import "./topbar.css";

export default function Topbar() {
  return (
    <div className='flex sticky top-0 z-50 bg-blue-500 items-center p-2 w-full shadow-md'>
      <div className="topbarLeft w-3/12">
        <span className='text-white text-2xl font-bold m-6 '>Aksocial</span>
      </div>
      <div className="topbarCenter w-5/12">
        <div className="searchbar bg-white rounded-full p-1 flex items-center">
          <SearchIcon className='ml-2'/>
          <input className='rounded-full w-11/12 font-MainText h-10 outline-none pl-2' placeholder="Search for friend, post or video" type="text" />
        </div>
      </div>
      <div className="topbarRight w-4/12 flex items-center justify-between text-white">
        <div className="text-base pl-4">
          <span className='px-2'>Homepage</span>
          <span className='px-2'>Timeline</span>
        </div>
        <div className="topbarIcons flex items-center px-2">
          <div className='p-1 flex items-center'>
            <PersonIcon className='caret-white'/>
            <span className='badge flex items-center'>1</span>
          </div>

          <div className='p-1 flex items-center'>
          <ChatIcon className='caret-white'/>
          <span className='badge flex items-center'>2</span>
          </div>

          <div className='p-1 flex items-center'>
          <NotificationsIcon className='caret-white'/>
          <span className='badge flex items-center'>1</span>
          </div>

          <div className='w-10 h-10 rounded-full bg-black overflow-hidden ml-2'>
            <img src={require("./1.jpg")} alt="" className='object-fill w-12'/>
          </div>
        </div>
      </div>
    </div>
  )
}
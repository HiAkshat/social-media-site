import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';

import "./leftbar.css"

export default function LeftBar() {
  return (
    <div className="LeftBar h-[calc(100vh-64px)] overflow-y-scroll w-3/12 pt-2">
      <div>
        <ul>
          <li>
            <RssFeedIcon />
            <span>Feed</span>
          </li>
          <li>
            <ChatIcon />
            <span>Chat</span>
          </li>
          <li>
            <PlayCircleIcon />
            <span>Videos</span>
          </li>
          <li>
            <GroupIcon />
            <span>Groups</span>
          </li>
          <li>
            <BookmarksIcon />
            <span>Bookmarks</span>
          </li>
          <li>
            <HelpIcon />
            <span>FAQ</span>
          </li>
          <li>
            <WorkIcon />
            <span>Jobs</span>
          </li>
        </ul>
      </div>
      <button className='ml-6 mt-2 px-4 py-2 bg-slate-100 rounded-xl'>Show More</button>
      <hr className='border-gray-300 my-6 m-6'/>

      <div>
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>

        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>

        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>
        
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>
        
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>
                
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>        
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>        
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>        
        <div className='flex items-center pl-6 pb-4'>
          <img src={require("./1.jpg")} alt="" className='w-12 rounded-full'/>
          <span>Emma Watson</span>
        </div>
        
      </div>
    </div>
  )
}
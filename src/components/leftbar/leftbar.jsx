import RssFeedIcon from '@mui/icons-material/RssFeed';
import ChatIcon from '@mui/icons-material/Chat';
import PlayCircleIcon from '@mui/icons-material/PlayCircle';
import GroupIcon from '@mui/icons-material/Group';
import BookmarksIcon from '@mui/icons-material/Bookmarks';
import HelpIcon from '@mui/icons-material/Help';
import WorkIcon from '@mui/icons-material/Work';

import "./leftbar.css";
import CloseFriends from '../closeFriends/closeFriends';
import {Users} from "../../dummyData";

export default function LeftBar() {
  return (
    <div className="LeftBar sticky top-[0px] flex-[3] h-[calc(100vh)] overflow-y-auto pt-2">
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

      {Users.map(u => (<CloseFriends key={u.id} user={u}/>))}
    </div>
  )
}
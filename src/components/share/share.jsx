import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import AddReactionIcon from '@mui/icons-material/AddReaction';
import SendIcon from '@mui/icons-material/Send';

import "./share.css";

export default function Share() {
  return (
    <div className='share mb-4 p-1 rounded-xl'>
      <div className='flex items-center m-2'>
        <img className='w-14 rounded-full p-2' src="./assets/1.jpg" alt="" />
        <input className='w-full outline-none pl-2' rows="3" placeholder="What's on your mind?" />
      </div>
      <hr className='mx-4'/>
      <div className='flex items-center m-2'>
        <div className='flex w-11/12'>
          <div className='shareIcons text-blue-500'>
            <InsertPhotoIcon />
            <span className='shareText'>Attach</span>
          </div>
          <div className='shareIcons text-red-500'>
            <LocationOnIcon />
            <span className='shareText'>Location</span>
          </div>
          <div className='shareIcons text-purple-500'>
            <AlternateEmailIcon />
            <span className='shareText'>Tag</span>
          </div>
          <div className='shareIcons text-yellow-500'>
            <AddReactionIcon />
            <span className='shareText'>React</span>
          </div>
        </div>

        <div className='cursor-pointer text-green-600'>
          <SendIcon />
        </div>
      </div>

    </div>
  )
}
import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./post.css";

export default function Post() {
  return (
    <div className='post rounded-xl'>
      <div className="flex items-center justify-between p-2">
        <div className='flex items-center'>
          <img className="w-12 rounded-full p-2 cursor-pointer" src={require("./1.jpg")} alt="" />
          <span className='font-bold cursor-pointer'>Rick Astley</span>
          <span className='postTime text-sm ml-2'>12 mins ago</span>
        </div>
        <MoreVertIcon className='cursor-pointer'/>
      </div>
      <span className='m-4 text-xl'>First time in Delhi yayy</span>
      <img className='postImage' src={require("./post.jpg")} alt="" />
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center">
          <img className="w-8 cursor-pointer" src={require("./like.png")} alt="" />
          <img className="w-8 cursor-pointer" src={require("./heart.png")} alt="" />
          <span className='pl-2'>43 people like it</span>
        </div>
        <span className='underline cursor-pointer'>11 Comments</span>
      </div>
    </div>
  )
  }
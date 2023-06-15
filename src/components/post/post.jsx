import MoreVertIcon from '@mui/icons-material/MoreVert';

import "./post.css";
import {Users} from "../../dummyData"
import { useState } from 'react';

export default function Post(post) {  
  post = post.post;
  const user = Users.filter(u => u.id === post.userId);

  const [like, setLike] = useState(post.like);
  const [isLiked, setIsLiked] = useState(false);

  const handleLikes = () => {
    setLike(isLiked ? like-1 : like+1);
    setIsLiked(!isLiked);
  }

  return (
    <div className='post rounded-xl mb-6 mr-2'>
      <div className="flex items-center justify-between p-2">
        <div className='flex items-center'>
          <img className="w-12 h-12 object-cover rounded-full p-2 cursor-pointer" src={user[0].profilePicture} alt="" />
          <span className='font-bold cursor-pointer'>{user[0].username}</span>
          <span className='postTime text-sm ml-2'>{post.date}</span>
        </div>
        <MoreVertIcon className='cursor-pointer'/>
      </div>
      {post.desc===null?null:<span className='m-4 text-xl'>{post?.desc}</span>}
      <img className='postImage' src={post.photo} alt="" />
      <div className="flex items-center justify-between px-4 pb-4">
        <div className="flex items-center">
          <img className="w-8 cursor-pointer" src="./assets/like.png" alt="" onClick={handleLikes}/>
          <img className="w-8 cursor-pointer" src="./assets/heart.png" alt="" />
          <span className='pl-2'>{like} people like it</span>
        </div>
        <span className='underline cursor-pointer'>{post.comment} Comments</span>
      </div>
    </div>
  )
  }
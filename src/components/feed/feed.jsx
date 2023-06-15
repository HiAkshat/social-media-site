import Share from "../share/share";
import Post from "../post/post";
import {Posts} from "../../dummyData"

export default function Feed() {
  return (
    <div className="flex-[5] h-[calc(100vh-64px)] mx-4 mb-4">
      <Share />
      {Posts.map((p) => (
        <Post key={p.id} post={p}/>
      ))}
      
    </div>
  )
}
import Share from "../share/share";
import Post from "../post/post";

export default function Feed() {
  return (
    <div className="w-5/12 overflow-y-scroll h-[calc(100vh-64px)] mx-4 mb-4">
      <Share />
      <Post />
      <Post />
      <Post />
    </div>
  )
}
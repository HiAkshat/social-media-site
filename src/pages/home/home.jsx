import Topbar from "../../components/topbar/topbar";
import RightBar from "../../components/rightbar/rightbar";
import LeftBar from "../../components/leftbar/leftbar";
import Feed from "../../components/feed/feed";

export default function Home(){
  return (
    <div>
      <Topbar />
      <div className="flex">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  )
}
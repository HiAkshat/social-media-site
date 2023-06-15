import Topbar from "../../components/topbar/topbar";
import RightBar from "../../components/rightbar/rightbar";
import LeftBar from "../../components/leftbar/leftbar";
import Feed from "../../components/feed/feed";

import "./home.css";

export default function Home(){
  return (
    <div className="home">
      <Topbar />
      <div className="flex overflow-y-auto">
        <LeftBar />
        <Feed />
        <RightBar />
      </div>
    </div>
  )
}
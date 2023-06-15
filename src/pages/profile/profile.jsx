import Topbar from "../../components/topbar/topbar";
import RightBar from "../../components/rightbar/rightbar";
import LeftBar from "../../components/leftbar/leftbar";
import Feed from "../../components/feed/feed";

import "./profile.css";

export default function Profile() {
  return (
    <div>
      <Topbar />
      <div className="flex">
        <LeftBar />
        <div className="flex-[9] overflow-y-scroll">
            <div>
              <div className="h-[320px] relative">
                <img className="w-full h-[250px] object-cover" src="./assets/poster1.jpg" alt="" />
                <img className="w-36 h-36 rounded-full absolute left-[0] right-[0] bottom-[0] border-[5px] border-white m-auto" src="./assets/1.jpg" alt="" />
              </div>
              <div className="mb-6">
                <span className="block text-center text-4xl font-bold">Marcia Roy</span>
                <span className="block text-center">Wassup beeches!!</span>
              </div>
            </div>
          <div className="flex">
            <Feed />
            <RightBar />
          </div>
        </div>
      
      </div>
    </div>
  )
}
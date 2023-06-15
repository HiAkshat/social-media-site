import "./rightbar.css";
import OnlineFriends from "../onlineFriends/onlineFriends"
import {Users} from "../../dummyData"

export default function RightBar() {
  const homeRightBar = (
    <>
      <div className="flex items-center">
        <img className='w-12 m-4' src="./assets/gift.png" alt="" />
        <span><span className="font-bold">Anya</span> and <span className="font-bold">3 other friends </span>have their birthday today</span>
      </div>
      <img className="w-full rounded-3xl p-4" src="./assets/ad.jpeg" alt="" />
      <span className="m-4 text-xl font-semibold">Online Friends</span>
      <ul className="m-4">
        {Users.map((u) => (<OnlineFriends user={u}/>))}
      </ul>
    </>
  )

  const profileRightBar= (
    <div className="">
      <span className="font-bold text-2xl ml-2">User Information</span>
      <div className="ml-2 mt-2">
        <div><span className="text-gray-700 text-lg mr-2">City: </span><span className="text-lg">New York</span></div>
        <div><span className="text-gray-700 text-lg mr-2">From: </span><span className="text-lg">Bravos</span></div>
        <div><span className="text-gray-700 text-lg mr-2">Relationship: </span><span className="text-lg">Single</span></div>
      </div>
      <span className="block font-bold text-2xl ml-2 mt-4">Friends of Marcia Roy</span>
      <div className="flex flex-wrap">
        <div>
          <img className="friendsList object-cover rounded-xl" src="./assets/person/1.jpeg" alt="" />
          <span>Anya Stark</span>
        </div>
        <div>
          <img className="friendsList object-cover rounded-xl" src="./assets/person/2.jpeg" alt="" />
          <span>Anya Stark</span>
        </div>
        <div>
          <img className="friendsList object-cover rounded-xl" src="./assets/person/3.jpeg" alt="" />
          <span>Anya Stark</span>
        </div>
        <div>
          <img className="friendsList object-cover rounded-xl" src="./assets/person/4.jpeg" alt="" />
          <span>Anya Stark</span>
        </div>
        <div>
          <img className="friendsList object-cover rounded-xl" src="./assets/person/5.jpeg" alt="" />
          <span>Anya Stark</span>
        </div>
      </div>
    </div>
  )

  return (
    <div className="rightbar flex-[4] h-[calc(100vh-64px)]">
      {profileRightBar}
    </div>
  )
}
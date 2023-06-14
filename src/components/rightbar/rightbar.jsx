import "./rightbar.css";

export default function RightBar() {
  return (
    <div className="rightbar  overflow-y-scroll w-4/12 h-[calc(100vh-64px)]">
      <div className="flex items-center">
        <img className='w-12 m-4' src={require("./gift.png")} alt="" />
        <span><span className="font-bold">Anya</span> and <span className="font-bold">3 other friends </span>have their birthday today</span>
      </div>
      <img className="w-full rounded-3xl p-4" src={require("./ad.jpeg")} alt="" />
      <span className="m-4 text-xl font-semibold">Online Friends</span>
      <ul className="m-4">
        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        <li className="flex items-center my-4">
          <img className="w-12 rounded-full" src={require("./billie.jpg")} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">Billie Eillish</span>
        </li>

        
      </ul>
    </div>
  )
}
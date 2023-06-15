import "./register.css"

export default function Register() {
  return (
    <div className="flex justify-center h-[100vh] items-center bg-gray-100">
      <div className="flex justify-between h-[70vh] w-[70%] items-center">
        <div className="flex-[7]">
          <span className="title block">Aksocial</span>
          <span className="text-2xl font-medium block mr-10">Connect with friends and the world around you on Aksocial.</span>
        </div>
        <div className="inputs flex flex-col flex-[5] bg-white rounded-xl p-6 m-4">
          <input className="border-2 border-gray-200 rounded-xl p-4 my-4 outline-none" type="text" placeholder="Email"/>
          <input className="border-2 border-gray-200 rounded-xl p-4 my-4 outline-none" type="text" placeholder="Username"/>
          <input className="border-2 border-gray-200 rounded-xl p-4 my-4 outline-none"type="text" placeholder="Password"/>
          <input className="border-2 border-gray-200 rounded-xl p-4 my-4 outline-none"type="text" placeholder="Confirm Password"/>
          <button className="w-full bg-blue-500 rounded-xl p-4 text-xl text-white font-bold my-4">Register</button>
          <button className="w-4/5 m-auto bg-green-500 rounded-xl p-4 text-xl text-white font-bold mt-4">Log In to Existing Account</button>
        </div>
      </div>
    </div>
  )
}
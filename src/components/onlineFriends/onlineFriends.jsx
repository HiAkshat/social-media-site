export default function OnlieFriends(user) {
  console.log(user.user.username)
  return (
    <div>
        <li className="flex items-center my-4">
          <img className="w-12 h-12 object-cover rounded-full" src={user.user.profilePicture} alt="" />
          <div className="relative bottom-4 right-4 w-4 h-4 rounded-full border-2 border-white bg-green-500"></div>
          <span className="">{user.user.username}</span>
        </li>     
    </div>
  )
}
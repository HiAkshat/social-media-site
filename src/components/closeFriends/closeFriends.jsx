export default function CloseFriends(user) {
  return (
    <div className='flex items-center pl-6 pb-4'>
      <img src={user.user.profilePicture} alt="" className='w-12 h-12 object-cover rounded-full'/>
      <span className="pl-2">{user.user.username}</span>
    </div>
  )
}
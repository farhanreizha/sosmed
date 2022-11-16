import Link from 'next/link'
import { HiEllipsisHorizontal, HiOutlineChatBubbleLeft, HiOutlineHeart } from 'react-icons/hi2'

const CommentList = () => {
  return (
    <div className='p-4 flex gap-3'>
      {/* CardBody */}
      <picture>
        <img
          src='https://plus.unsplash.com/premium_photo-1664439709285-35a275007777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
          alt='profile'
          className='rounded-full bg-slate-500 h-10 w-10 object-cover'
        />
      </picture>
      <div className='flex-1 space-y-4'>
        {/* Header thread */}
        <div className='flex justify-between'>
          <div className='flex gap-2'>
            <Link href='/'>Displayname</Link>
            <p className='text-slate-500'>@username 2h</p>
          </div>
          <HiEllipsisHorizontal />
        </div>
        {/* Body thread */}
        <div className=''>Comment message</div>
        {/* Footer thread */}
        <div className='flex gap-3'>
          <div className='flex items-center space-x-1'>
            <HiOutlineHeart /> <div>0</div>
          </div>
          <div className='flex items-center space-x-1'>
            <HiOutlineChatBubbleLeft /> <div>0</div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default CommentList

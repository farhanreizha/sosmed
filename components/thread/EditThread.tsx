import Link from 'next/link'

const EditThread = () => {
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
        </div>
        {/* Body thread Edit */}
        <div className='relative'>
          <textarea className='w-full bg-transparent resize-none h-32 outline-none p-4 placeholder:text-slate-500 border border-slate-400'>
            Thread posted
          </textarea>
          <button className='px-4 absolute right-0 top-12'>send</button>
        </div>
        <div className='flex gap-1 text-sm'>
          Press <button className='text-red-500'>ESC / CANCLE</button> to change thread
        </div>
      </div>
    </div>
  )
}
export default EditThread

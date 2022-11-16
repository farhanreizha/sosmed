const Profile = () => {
  return (
    <>
      <div className='container mx-auto max-w-6xl'>
        <div className='p-4 w-full bg-blue-500'>
          <div className='space-y-3'>
            <div className='h-96 overflow-hidden rounded-md'>
              <picture className='h-96 w-full bg-blue-800'>
                <img
                  src='https://plus.unsplash.com/premium_photo-1664439709285-35a275007777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
                  alt='profile'
                  className='object-center object-none'
                />
              </picture>
            </div>
            <div className='flex space-x-3'>
              <picture>
                <img
                  src='https://plus.unsplash.com/premium_photo-1664439709285-35a275007777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
                  alt='profile'
                  className='rounded-full bg-slate-500 h-10 w-10 object-cover'
                />
              </picture>
              <span>banner & profile</span>
            </div>
          </div>
          <div>thread</div>
        </div>
      </div>
    </>
  )
}
export default Profile

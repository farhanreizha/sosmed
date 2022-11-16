const CreateThread = () => {
  return (
    <div className='relative'>
      <textarea
        className='w-full bg-transparent resize-none h-32 outline-none p-4 placeholder:text-slate-500'
        placeholder='Create your threads'
      />
      <button className='px-4 absolute right-0 top-12'>send</button>
    </div>
  )
}
export default CreateThread

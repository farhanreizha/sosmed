import Link from 'next/link'
import styles from 'styles/Home.module.css'

const Header = () => {
  return (
    <nav className='border-b border-slate-200 sticky top-0 bg-slate-300 shadow-lg z-10'>
      <div className={styles.containers}>
        <div className='flex justify-between px-4 py-1 items-center'>
          <Link href='/' className=''>
            Brand
          </Link>

          {/* Dropdown */}
          <div className=''>
            <picture>
              <img
                src='https://plus.unsplash.com/premium_photo-1664439709285-35a275007777?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80'
                alt='profile'
                className='rounded-full bg-slate-500 h-10 w-10 object-cover'
              />
            </picture>
            <span className='hidden'>Username</span>
          </div>
        </div>
      </div>
    </nav>
  )
}
export default Header

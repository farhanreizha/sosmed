import Header from '@components/layout/Header'
import Navigation from '@components/navigation'
import CreateThread from '@components/thread/CreateThread'
import EditThread from '@components/thread/EditThread'
import ThreadList from '@components/thread/ThreadList'
import Trending from '@components/trending'
import styles from '@styles/Home.module.css'

export default function Home() {
  return (
    <>
      {/* Content */}
      <main className={styles.containers}>
        <div className='grid grid-cols-12 mx-auto'>
          {/* Navigation */}
          <Navigation />

          {/* Main */}
          <section className='col-span-full lg:col-span-8 lg:border-x divide-y divide-slate-200 h-screen'>
            {/* Form Create Thread */}
            <CreateThread />

            {/* Card Thread */}
            <ThreadList />
            <EditThread />
          </section>

          {/* Trending */}
          <Trending />
        </div>
      </main>
    </>
  )
}

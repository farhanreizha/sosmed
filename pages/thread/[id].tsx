import Thread from '@components/thread/Thread'
import Header from '@components/layout/Header'
import CommentList from '@components/comment/CommentList'
import EditComment from '@components/comment/EditComment'
import styles from '@styles/Home.module.css'
import Navigation from '@components/navigation'
import Trending from '@components/trending'

const ThreadDetail = () => {
  return (
    <>
      {/* Content */}
      <main className={styles.containers}>
        <div className='grid grid-cols-12 mx-auto'>
          {/* Navigation */}
          <Navigation />

          {/* Main */}
          <section className='col-span-full lg:col-span-8 lg:border-x divide-y divide-slate-200 h-screen'>
            {/* Card Thread */}
            <Thread />

            {/* Comment */}
            <CommentList />
            <EditComment />
          </section>

          {/* Trending */}
          <Trending />
        </div>
      </main>
    </>
  )
}
export default ThreadDetail

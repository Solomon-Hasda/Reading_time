
import { useState } from 'react'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

function App() {

  const [bookmarks, setBookmarks] = useState([])
  const [read_time, setReadTime] = useState(0)

  const handleMarkAsRead = (time,id) => {
    const newReadTime = time + read_time;
    setReadTime(newReadTime);
    const remainingBookmarks = bookmarks.filter(bookmark => bookmark.id !==id);
    setBookmarks(remainingBookmarks);
  }

  const handleBookmarks = blog => {
    const newBookmarks = [...bookmarks, blog];
    setBookmarks(newBookmarks);
  }

  return (
    <>
      <div className='max-w-6xl mx-auto'>
        <Header></Header>
        <div className='md:flex'>
          <Blogs
            handleBookmarks={handleBookmarks}
            handleMarkAsRead={handleMarkAsRead}
          ></Blogs>
          <Bookmarks 
          bookmarks={bookmarks}
          read_time={read_time}
          ></Bookmarks>
        </div>
      </div>
    </>
  )
}

export default App

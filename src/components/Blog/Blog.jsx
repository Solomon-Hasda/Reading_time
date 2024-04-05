import PropTypes from 'prop-types';
import { FaRegBookmark } from "react-icons/fa";

const Blog = ({blog,handleBookmarks,handleMarkAsRead}) => {
    const {title,cover,author,author_image,reading_time,hashtags,posted_date,id} = blog;
    return (
        <div className='mb-20 space-y-3'>
            <img className='h-[500px] w-full rounded-lg' src={cover} alt="" />
            <div className='flex justify-between items-center'>
                <div className='flex items-center gap-6'>
                    <img className='h-[50px] w-[50px] rounded-full' src={author_image} alt="" />
                    <div>
                        <h3 className='font-semibold text-2xl'>{author}</h3>
                        <p>{posted_date}</p>
                    </div>
                </div>
                <div>
                    <p className='font-normal'>{reading_time} Min to read 
                     <button className='hover:text-purple-700' onClick={()=>handleBookmarks(blog)}><FaRegBookmark /></button></p>
                   
                </div>
            </div>
            <h2 className='text-3xl font-semibold'>{title}</h2>
            <p>
                {
                    hashtags.map((hash,idx) =><span className='mr-4 text-blue-500 hover:text-purple-500' key={idx}><a href="">#{hash}</a></span>)
                }
            </p>
            <button onClick={()=>handleMarkAsRead(reading_time,id)}><p className='text-indigo-400 hover:text-purple-400' >Mark as read</p></button>
        </div>
    );
};

Blog.propTypes = {
    blog:PropTypes.object.isRequired,
    handleBookmarks: PropTypes.func,
    handleMarkAsRead : PropTypes.func,
}

export default Blog;
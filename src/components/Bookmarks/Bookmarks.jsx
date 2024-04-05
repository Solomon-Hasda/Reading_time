import Bookmark from "../Bookmark/Bookmark";
import PropTypes from 'prop-types';


const Bookmarks = ({bookmarks,read_time}) => {

    return (
        <div className="md:w-1/3 bg-sky-200 ml-4 mt-4">
            <h3 className="text-3xl text-violet-500 mx-4 p-4">Reading Time : {read_time} Min</h3>
            <hr />

            <h1  className="text-3xl font-semibol mx-4 px-4 border-b-2 mt-4 text-indigo-500">Bookmark Blogs : {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark,idx) =><Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
        </div>
    );
};

Bookmark.propTypes = {
    bookmarks: PropTypes.object,
    read_time : PropTypes.number
}

export default Bookmarks;
import PropTypes from 'prop-types';

const Bookmark = ({bookmark}) => {
    const {title} = bookmark;
    return (
        <div className='bg-slate-200 p-4 m-4 rounded-lg '>
            <p className='font-semibold text-blue-700'>{title}</p>
        </div>
    );
};

Bookmark.propTypes = {
  
    bookmark: PropTypes.object
}


export default Bookmark;
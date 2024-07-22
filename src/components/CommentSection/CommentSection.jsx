import './CommentSection.scss';
import CommentCard from '../CommentCard/CommentCard';

const CommentSection = ({ selectedVideo }) => {
    const currentVideoComments = selectedVideo?.comments || [];

    return (
        <>
            <h3 className='comment-form__title'>{currentVideoComments.length} Comments</h3>
            <section className='comment-form'>
                <div className='comment-form__avatar'></div>
                <form className='comment-form__form'>
                    <label htmlFor='newComment' className='comment-form__label'>JOIN THE CONVERSATION</label>
                    <div className='comment-form__nonmobile-container'>
                        <textarea id='newComment' className='comment-form__input' placeholder='Add a new comment'></textarea>
                        <button
                            className='comment-form__button'
                            onClick={(event) => event.preventDefault()}
                        >
                            COMMENT
                        </button>
                    </div>
                </form>
            </section>

            <section className='comment-section'>
                {currentVideoComments.map((comment) => 
                    <CommentCard        
                        key={comment.id} 
                        commentComment={comment.comment}
                        commentName={comment.name}
                        commentTimestamp={comment.timestamp}
                    />
                )}
                
            </section>
        </>
    );
};

export default CommentSection;

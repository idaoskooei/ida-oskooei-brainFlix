import './CommentSection.scss';
import CommentCard from '../CommentCard/CommentCard';


const CommentSection = ({selectedVideo}) => {

    return (
        <>
            <h3 className='comment-form__title'>3 Comments</h3>
            <section className='comment-form'>
                <div className='comment-form__avatar'></div>
                <form className='comment-form__form'>
                    <label htmlFor='newComment' className='comment-form__label'>JOIN THE CONVERSATION</label>
                    <div className='comment-form__nonmobile-container'>
                        <textarea id='newComment' className='comment-form__input' placeholder='Add a new comment'></textarea>
                        <button className='comment-form__button'>COMMENT</button>
                    </div>
                </form>
            </section>

            <section className='comment-section'>
                {selectedVideo.comments.map((e, i) => 
                    <CommentCard        
                        key = {i} 
                        commentComment = {e.comment}
                        commentName = {e.name}
                        commentTimestamp = {e.timestamp}
                    />
                )}
                
            </section>
        </>
    );
}

export default CommentSection;
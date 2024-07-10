import './CommentCard.scss';


const CommentCard = (props) => {

    return (
        <section className='comment-card'>
            <div className='comment-card__avatar'></div>
            <div className='comment-card__container'>
                <div className='comment-card__header'>
                    <div className='comment-card__name'>{props.commentName}</div>
                    <div className='comment-card__date'>
                        {new Date(props.commentTimestamp)
                            .toLocaleDateString("en-US", {
                                year: "numeric",
                                month: "2-digit",
                                day: "2-digit",
                        })}
                    </div>
                </div>
                <p className='comment-card__text'>{props.commentComment}</p>
            </div>
        </section>
    );
}

export default CommentCard;
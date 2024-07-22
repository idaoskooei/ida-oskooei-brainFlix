import { Link } from 'react-router-dom'

import './VideoList.scss';

const VideoList = ({videoArray, selectedVideo}) => {

    return (
        <section className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {videoArray?.filter(video=> video.id != selectedVideo?.id).map((e) =>
            <Link
            to={`/video/${e.id}`} 
            className="video-card__link"
            key={e.id}
            >
                <section className='video-card'>
                <div style={{backgroundImage: `url(${e.image})`}} className='video-card__img'></div>
                <div className='video-card__text'>
                                <p className='video-card__title'>{e.title}</p>
                                <p className='video-card__channel'>{e.channel}</p>
                            </div>
                </section>  
            </Link>
)}
         </section>
    );
}

export default VideoList;
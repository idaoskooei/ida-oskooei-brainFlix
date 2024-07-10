import './VideoList.scss';
import VideoData from '../../data/video-details.json'

const VideoList = ({setVideoId, selectedVideoId}) => {

    return (
        <section className='video-list'>
            <h2 className='video-list__title'>NEXT VIDEOS</h2>
            {VideoData?.map((e, i)=>
                <section className={`video-card ${selectedVideoId===e.id?"video-card--hide":""}`} 
                    key={i} 
                    onClick={() => setVideoId(e.id)}
                >
                        <div style={{backgroundImage: `url(${e.image})`}} className='video-card__img'></div>
                        <div className='video-card__text'>
                            <p className='video-card__title'>{e.title}</p>
                            <p className='video-card__channel'>{e.channel}</p>
                        </div>
                </section>
            )}
        </section>
    );
}

export default VideoList;
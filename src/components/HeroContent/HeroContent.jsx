import './HeroContent.scss';

import viewIcon from '../../assets/Icons/views.svg';
import likeIcon from '../../assets/Icons/likes.svg';

const HeroContent =({selectedVideo}) => {
  
    return (
      <section className='hero__content'>
                  <h1 className='hero__title'>{selectedVideo?.title}</h1>
                  <div className='hero__box'>   
                      <div className='hero__container'>
                          <p className='hero__name'>By {selectedVideo?.channel}</p>
                          <p className='hero__date'>
                              {new Date(selectedVideo?.timestamp)
                                  .toLocaleDateString("en-US", {
                                      year: "numeric",
                                      month: "2-digit",
                                      day: "2-digit",
                              })}
                          </p>
                      </div>
                      <div className='hero__container'>
                          <div className='hero__container-icon'>
                              <img src={viewIcon} className="hero__view-icon"></img>
                              <p className='hero__view'>{selectedVideo?.views}</p>
                          </div>
                          <div className='hero__container-icon'>
                              <img src={likeIcon} className="hero__like-icon"></img>
                              <p className='hero__like'>{selectedVideo?.likes}</p>
                          </div>
                      </div>
                  </div>
                  <p className='hero__description'>{selectedVideo?.description}</p>
              </section>
      )
   }
  export default HeroContent;
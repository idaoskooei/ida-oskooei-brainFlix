import React, { useState } from 'react';

import Video from './data/video-details.json';
import Header from './components/Header/Header';
import Hero from './components/Hero/Hero';
import CommentSection from './components/CommentSection/CommentSection';
import VideoList from './components/VideoList/VideoList';
import HeroContent from './components/HeroContent/HeroContent';

import './App.scss'

function App() {

    const [currentVideoId, setVideoId] = useState(Video[0].id);
    let selectedVideo = Video.find(e => e.id === currentVideoId)
  
    return (
    <>
      <Header /> 
      <Hero 
        selectedVideo = {selectedVideo}
      />
      <section className='container'>
        <section className='container__left'>
          <HeroContent 
            selectedVideo = {selectedVideo}
          />
          <CommentSection 
            selectedVideo = {selectedVideo}
          />
        </section>

  <section className ='container_right'>
  <VideoList
          setVideoId = {setVideoId}
          selectedVideoId = {selectedVideo.id}
        />
  </section>
      </section>
    </>  
    );
  }
  
  export default App;

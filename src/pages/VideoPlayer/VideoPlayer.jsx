import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios'

import Hero from "../../components/Hero/Hero";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList"
import HeroContent from "../../components/HeroContent/HeroContent"

const VideoPlayer = () => {
    const {videoId} = useParams()
    const [videoArray, setVideoArray] = useState();
    const [selectedVideo,setSelectedVideo] = useState();

    useEffect( () => {
        axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=eb0a0738-fbb2-4a75-a000-e9a8cd7e2827")
        .then(response => setVideoArray(response.data))
        .catch(error => console.log(error))
    }, [])

    useEffect(()=> {
        if (videoId){
            axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=eb0a0738-fbb2-4a75-a000-e9a8cd7e2827`)
            .then(response => setSelectedVideo(response.data))
            .catch(error => console.log(error))
        } else {
            axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/25ce5d91-a262-4dcf-bb87-42b87546bcfa`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        }
    }, [videoId])

    return (
        <>
        <Hero selectedVideo={ selectedVideo}/>
        {}
        <section className="container">
            <section className="container__left">
                <HeroContent selectedVideo={selectedVideo}/>
                <CommentSection selectedVideo={selectedVideo}/>
            </section>

            <VideoList
             videoArray={videoArray}
             selectedVideo = {selectedVideo}
            />
            
            </section>
        </>
    
    )
}

export default VideoPlayer;
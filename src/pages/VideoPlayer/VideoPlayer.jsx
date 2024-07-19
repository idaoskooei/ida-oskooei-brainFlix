import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Hero from "../../components/Hero/Hero";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";
import HeroContent from "../../components/HeroContent/HeroContent";

const baseURL = "https://unit-3-project-api-0a5620414506.herokuapp.com";
const apiKey = "eb0a0738-fbb2-4a75-a000-e9a8cd7e2827";

const VideoPlayer = () => {
    const {videoId} = useParams()

    const [videoArray, setVideoArray] = useState();
    const [selectedVideo, setSelectedVideo] = useState();

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response =  await axios.get(`${baseURL}/videos?api_key=${apiKey}`);
                setVideoArray(response.data);
                
            } catch (error) {
                console.log(error);
            }
        }
        fetchVideos();
    }, [])
 
    useEffect(() => {
        if(videoId) {
            axios.get(`${baseURL}/videos/${videoId}?api_key=${apiKey}`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        } else {
            axios.get(`${baseURL}/videos/b6f35f03-7936-409b-bd2a-446bcc5f30e7?api_key=${apiKey}`)
            .then(response => setSelectedVideo(response.data))
            .catch(error=> console.log(error))
        }
        
    },[videoId])

    return (
        <>
            <Hero selectedVideo = {selectedVideo}/>
            <section className='container'>
                <section className='container__left'>
                <HeroContent  selectedVideo = {selectedVideo}/>
                <CommentSection selectedVideo = {selectedVideo} />
                </section>
                <VideoList
                    videoArray = {videoArray}
                    selectedVideo = {selectedVideo}
                />
            </section>
        </>
      )
}

export default VideoPlayer;

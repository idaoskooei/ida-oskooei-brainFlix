import { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import axios from 'axios';

import Hero from "../../components/Hero/Hero";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";
import HeroContent from "../../components/HeroContent/HeroContent";

const VideoPlayer = () => {
    const { videoId } = useParams();
    const [videoArray, setVideoArray] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [defaultVideoId, setDefaultVideoId] = useState('25ce5d91-a262-4dcf-bb87-42b87546bcfa'); // Default video ID

    useEffect(() => {
        axios.get("https://unit-3-project-api-0a5620414506.herokuapp.com/videos?api_key=eb0a0738-fbb2-4a75-a000-e9a8cd7e2827")
            .then(response => {
                setVideoArray(response.data);
                // Set the selected video if videoId is not defined
                if (!videoId) {
                    const defaultVideo = response.data.find(video => video.id === defaultVideoId);
                    setSelectedVideo(defaultVideo);
                }
            })
            .catch(error => console.log(error));
    }, [videoId, defaultVideoId]);

    useEffect(() => {
        if (videoId) {
            axios.get(`https://unit-3-project-api-0a5620414506.herokuapp.com/videos/${videoId}?api_key=eb0a0738-fbb2-4a75-a000-e9a8cd7e2827`)
                .then(response => setSelectedVideo(response.data))
                .catch(error => console.log(error));
        }
    }, [videoId]);

    return (
        <>
            <Hero selectedVideo={selectedVideo} />
            <section className="container">
                <section className="container__left">
                    <HeroContent selectedVideo={selectedVideo} />
                    <CommentSection selectedVideo={selectedVideo} />
                </section>
                <VideoList
                    videoArray={videoArray}
                    selectedVideo={selectedVideo}
                />
            </section>
        </>
    );
}

export default VideoPlayer;

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
    const { videoId } = useParams();
    const [videoArray, setVideoArray] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${baseURL}/videos?api_key=${apiKey}`);
                setVideoArray(response.data);

                if (!videoId && response.data.length > 0) {
                    const defaultVideoId = response.data[3].id;
                    fetchVideoById(defaultVideoId);
                }
            } catch (error) {
                console.log(error);
            }
        };
        fetchVideos();
    }, [videoId]);

    const fetchVideoById = async (id) => {
        try {
            const response = await axios.get(`${baseURL}/videos/${id}?api_key=${apiKey}`);
            setSelectedVideo(response.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (videoId) {
            fetchVideoById(videoId);
        }
    }, [videoId]);

    return (
        <>
            <Hero selectedVideo={selectedVideo} />
            <section className='container'>
                <section className='container__left'>
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
};

export default VideoPlayer;

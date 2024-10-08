import { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';

import Hero from "../../components/Hero/Hero";
import CommentSection from "../../components/CommentSection/CommentSection";
import VideoList from "../../components/VideoList/VideoList";
import HeroContent from "../../components/HeroContent/HeroContent";
import NotFound from "../../components/NotFound/NotFound";

const baseURL = "http://localhost:3000";

const VideoPlayer = () => {
    const { videoId } = useParams();
    const navigate = useNavigate();
    const [videoArray, setVideoArray] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [isNotFound, setIsNotFound] = useState(false);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await axios.get(`${baseURL}/videos`);
                setVideoArray(response.data);

                if (!videoId && response.data.length > 0) {
                    navigate(`/video/${response.data[0].id}`);
                }
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        fetchVideos();
    }, [navigate, videoId]);

    useEffect(() => {
        const fetchVideoById = async (id) => {
            try {
                const response = await axios.get(`${baseURL}/videos/${id}`);
                setSelectedVideo(response.data);
                setIsNotFound(false);
            } catch (error) {
                if (error.response && error.response.status === 404) {
                    setIsNotFound(true);
                    setSelectedVideo(null);
                } else {
                    console.error("Error fetching video:", error);
                }
            }
        };

        if (videoId) {
            fetchVideoById(videoId);
        }
    }, [videoId]);

    if (isNotFound) {
        return <NotFound />;
    }

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

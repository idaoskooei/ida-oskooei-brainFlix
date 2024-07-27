import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import '../../pages/VideoUpload/VideoUpload.scss'

const baseURL = "http://localhost:3000";

const VideoUpload = () => {
    let navigate = useNavigate();
    const [videoTitle, setVideoTitle] = useState("");
    const [videoDesc, setVideoDesc] = useState("");

    const handleTitle = (event) => {
        setVideoTitle(event.target.value);
    };

    const handleDesc = (event) => {
        setVideoDesc(event.target.value);
    };

    const handleCancel = (event) => {
        event.preventDefault();
        setVideoDesc("");
        setVideoTitle("");
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!videoTitle || !videoDesc) {
            alert("Failed to upload, ensure all fields are filled!");
            return;
        }

        try {
            const newVideo = {
                title: videoTitle,
                description: videoDesc,
            };
            await axios.post(`${baseURL}/videos`, newVideo);
            alert("Upload successful");
            navigate('/');
        } catch (error) {
            console.error("Error uploading video:", error);
            alert("Failed to upload video");
        }
    };

    return (
        <section className='upload'>
            <h1 className='upload__title'>Upload Video</h1>
            <form className='form' onSubmit={handleSubmit}>
                <div className='form__container-desktop'>
                    <div className='form__left-container'>
                        <h3 className='upload__label'>VIDEO THUMBNAIL</h3>
                        <div className='upload__thumbnail'></div>
                    </div>
                    <div className='form__right-container'>
                        <label htmlFor="videoTitle" className='form__label'>
                            TITLE YOUR VIDEO
                        </label>
                        <input 
                            name="videoTitle" 
                            id="videoTitle" 
                            placeholder='Add a title to your video'  
                            className='form__input'
                            onChange={handleTitle}
                            value={videoTitle}
                        />
                        <label htmlFor="videoDesc" className='form__label'>
                            ADD A VIDEO DESCRIPTION
                        </label>
                        <textarea 
                            name="videoDesc" 
                            id="videoDesc"
                            placeholder='Add a description to your video'  
                            className='form__textarea'
                            onChange={handleDesc}
                            value={videoDesc}
                        />
                    </div>
                </div>
                <div className='form__nonmobile-container'>
                    <button type="submit" className='form__button'>PUBLISH</button>
                    <button 
                        className='form__button form__button--cancel' 
                        onClick={handleCancel}
                    >CANCEL</button>
                </div>
            </form>
        </section>
    );
};

export default VideoUpload;

'use client'
import { useEffect, useState } from 'react';
// import fetch from 'isomorphic-unfetch';

const apiKey = 'AIzaSyA0GyIX7Ix7CpkUXQ2vzJXehkgq4fgJH-Q';
const channelId = 'UCpt01PpLKIIo7LH2wWxtIEw'; // Replace with your channel's ID
const Video = () => {
    const [videos, setVideos] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchVideos = async () => {
            try {
                const response = await fetch(`https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${channelId}&part=snippet,id&order=date&maxResults=9`);
                if (!response.ok) {
                    throw new Error('Failed to fetch data from YouTube API');
                }
                const data = await response.json();
                const videoItems = data.items;
                setVideos(videoItems);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchVideos();
    }, []);


    const frameStyle = {
        width: "100%",
        height: "200px",
        border: "none",
    };

    return (
        <div className='bg-gradient-to-r from-blue-500 to-pink-500 shadow-2xl text-white mb-10'>
            <h2 className='text-5xl font-bold underline text-center my-20'>Watch My YouTube Videos</h2>
            {error ? (
                <p>Error: {error}</p>
            ) : (
                <div className="container mx-5 grid grid-cols-3 gap-5 border-purple-950">
                    {videos.map((video) => (
                        <div key={video.id.videoId} className="video-item">
                            <iframe
                                width="560"
                                height="315"
                                src={`https://www.youtube.com/embed/${video.id.videoId}`}
                                title={video.snippet.title}
                                allowFullScreen
                                style={frameStyle}
                            ></iframe>
                            <h5>{video.snippet.title}</h5>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Video;

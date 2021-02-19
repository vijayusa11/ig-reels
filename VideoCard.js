import React, { useState, useRef } from 'react'
import './VideoCard.css'
import ReactPlayer from 'react-player';
import VideoHeader from './VideoHeader';
import VideoFooter from './VideoFooter';

function VideoCard({ channel, avatarSrc, song, url, likes, shares }) {
    const [isVideoPlaying, setIsVideoPlaying] = useState(false);
    const videoRef = useRef(null);
    const onVideoPress = () => {
        if (isVideoPlaying) {
            //pause
            videoRef.current.pause();
            setIsVideoPlaying(false)
        } else {
            //play
            videoRef.current.play();
            setIsVideoPlaying(true)
        }
    }
    return (
        <div className='videoCard'>
            <VideoHeader />
            <ReactPlayer ref={videoRef} onClick={onVideoPress} width='100%' height='70%' className='videoCard__Player' url={url} alt='Vijay' loop='false' />
            <VideoFooter 
            channel={channel}
            avatarSrc={avatarSrc}
            song={song}
            likes={likes}
            shares={shares}
            />
        </div>
    )
}

export default VideoCard

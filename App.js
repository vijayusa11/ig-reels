import './App.css';
import VideoCard from './VideoCard';
import { useState, useEffect } from 'react'
import db from './firebase'

function App() {
  const [reels, setReels] = useState([]);
  useEffect(() => {
    db.collection('reels').onSnapshot(snapshot => (
      setReels(snapshot.docs.map((doc) => doc.data()))
    ))
  }, [])
  return (
    <div className="app">
      <div className='app__top'>
        <h1>Vijay</h1>
      </div>
      <div className='app_videos'>
        {reels.map(({ channel, avatarSrc, song, url, likes, shares }) => (
        <VideoCard 
          channel= {channel}
          avatarSrc = {avatarSrc}
          song= {song}
          url = {url}
          likes = {likes}
          shares = {shares}
        />
        ))}
       
      
      </div>
    </div>
  );
}

export default App;

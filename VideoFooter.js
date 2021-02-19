import { Avatar, Button } from '@material-ui/core'
import React from 'react'
import './VideoFooter.css'
import MusicNoteIcon from '@material-ui/icons/MusicNote';
import Ticker from 'react-ticker'
import FavoriteIcon from '@material-ui/icons/Favorite';
import ModeCommentIcon from '@material-ui/icons/ModeComment';
import SendIcon from '@material-ui/icons/Send';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';

function VideoFooter({ channel, avatarSrc, song, likes, shares }) {
    return (
        <div className='videoFooter'>
            <div className='videoFooter__text'>
                <Avatar src={avatarSrc} />
                <h3>{channel} •<Button>Follow</Button> </h3>
            </div>
           <div className='videoFooter__ticker'>
                <MusicNoteIcon className='videoFooter__icon' /> <Ticker mode='smooth'>
                    {({ index }) => (
                        <>
                        <p>{song}</p>
                        </>
                    )}
                </Ticker>
            </div>
            <div className='videoFooter__actions'>
                <div className='videoFooter__actionsLeft'>
                    <FavoriteIcon />
                    <ModeCommentIcon />
                    <SendIcon />
                    <MoreHorizIcon />
                </div>
                <div className='videoFooter__actionsRight'>
                    <div className='videoFooter__star'>
                        <FavoriteIcon />
                        <p>{likes}</p>
                    </div>
                    <div className='videoFooter__star'>
                        <ModeCommentIcon />
                        <p>{shares}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default VideoFooter

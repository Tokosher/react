import React from 'react';
import VideoItem from './VideoItem';

const VideoList = ({ videos }) => {
    const videosList = videos.map(video => {
        return <VideoItem video={video}/>;
    });

    return <div className="ui relaxed divided list">{videosList}</div>
};

export default VideoList;
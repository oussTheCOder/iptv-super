'use client'
import React from 'react';

const VideoComponent = () => {
    return (
        <video  width="750" height="500" controls>
            <source src="/assets/videos/metaverse.mp4" type="video/mp4" />
            Your browser does not support the video tag.
        </video>
    );
}

export default VideoComponent;

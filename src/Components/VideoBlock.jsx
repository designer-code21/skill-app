import React, {useRef} from 'react'

export default function VideoBlock() {
    const videoRef = useRef();

    const handlePlay = () => {
        videoRef.current.play();
    };

    const handlePause = () => {
        videoRef.current.pause();
    };
  return (
    <div className="video-block">
        <div class="button-inline">
            <button class="tabs py-2 px-8 rounded-lg active bg-purple-900 text-purple-100" onClick={handlePlay}>Play</button>
            <button class="tabs py-2 px-8 rounded-lg bg-purple-100 text-purple-900" onClick={handlePause}>Pause</button>
        </div>
        <div className="video-box">
            <video ref={videoRef}>
                <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
            </video>
        </div>
    </div>
  )
}

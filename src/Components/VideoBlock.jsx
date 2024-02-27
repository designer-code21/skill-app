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
    <div className="video-block mt-6">
        <div className="button-inline">
            <button className="tabs py-2 px-8 rounded-lg active bg-purple-900 text-purple-100 mr-4" onClick={handlePlay}>Play</button>
            <button className="tabs py-2 px-8 rounded-lg bg-purple-100 text-purple-900" onClick={handlePause}>Pause</button>
        </div>
        <div className="video-box max-w-2xl rounded-xl p-4 bg-purple-100 mt-4">
            <video ref={videoRef} className='rounded-lg'>
                <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4" />
            </video>
        </div>
    </div>
  )
}

import { useState } from 'react';
import App from '../App';

import video1 from '../../Video 1.mp4';
// import video2 from '../../Video 2.mp4';`
// import video3 from '../../Video 3.mp4';`

const videos = [video1];

const IntroWrapper = () => {
  const [showApp, setShowApp] = useState(false);
  const [selectedVideo] = useState(() => {
    const index = Math.floor(Math.random() * videos.length);
    return videos[index];
  });

  const handleEndOrError = () => {
    setShowApp(true);
  };

  if (showApp) {
    return <App />;
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <video
        src={selectedVideo}
        autoPlay
        muted
        playsInline
        onEnded={handleEndOrError}
        onError={handleEndOrError}
        className="w-full max-w-xl h-auto object-contain"
      />
    </div>
  );
};

export default IntroWrapper;

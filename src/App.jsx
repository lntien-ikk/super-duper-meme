//import { useReducer, useState } from 'react'
import './App.css'
import { Caculator } from './Component/Caculator';
import Example from './Component/Example';
import VideoToFrame from './Component/videoToAscii';

function App() {

  // const [count, setCount] = useState(0);
  // const [rstate, dispatch] = useReducer(prev => ++prev, 0)

  // const countUp = () => setCount(prev => ++prev);
  // const rcountUp = () => dispatch();

  const videoUrl = "video.mp4";
  const convertChars = "!\"#$%&'(@`";
  const renderResolution = 150;
  //const updateInterval = 50;

  return (
    <>
      {/* <Caculator /> */}
      <VideoToFrame videoUrl={videoUrl} convertChars={convertChars} renderResolution={renderResolution}/>
      <Example />
    </>
  )
}

export default App

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import VideoPlayer from './pages/VideoPlayer/VideoPlayer';
import VideoUpload from './pages/VideoUpload/VideoUpload';
import  NotFound from './pages/NotFound/NotFound'

import './App.scss'

function App() {
  
  return(
    <>
    <BrowserRouter>
    <Header /> 
<Routes>
<Route path="/" element= {<VideoPlayer/>}></Route>
<Route path="/video/:videoId" element= {<VideoPlayer/>} > </Route>
<Route path="/upload" element={<VideoUpload />}></Route>
<Route path='*' element={<NotFound />}></Route>
</Routes>
    </BrowserRouter>
 </>  
  );
}
  export default App;

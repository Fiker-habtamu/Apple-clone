import React,{useState,useEffect} from 'react'
import "./TheLastSecotion.css";

function TheLastSecotion() {
    const [youTubeVideos, setVideo] = useState([])
    useEffect(() =>{
           fetch(import.meta.env.VITE_API_KEY)
             .then((response) => response.json())
             .then((data) => {
               const youtubeVideosData = data.items;
               setVideo(youtubeVideosData);
             });
    },[])
    console.log(youTubeVideos);
    

     return (
       <>
         <div className="Latest-container container">
           <h1 className="latestVideos">Latest videos</h1>
           <div className="All-videos row  ">
             {youTubeVideos?.map((singleVideo) => {
               let vidId = singleVideo.id.videoId;
               let vidLink = `https://www.youtube.com/watch?v=${vidId}`;

               return (
                 //  <div className="All-videos">
                 <a
                   href={vidLink}
                   target="_blank"
                   className=" col-sm-12 col-md-6"
                 >
                   <div className="video ">
                     <div className="videos-img">
                       <img
                         src={singleVideo.snippet.thumbnails.high.url}
                         alt="images"
                       />
                     </div>
                     <div className="vid-title">
                       <p>{singleVideo.snippet.title}</p>
                     </div>
                     <div className="disc">
                       <p>{singleVideo.snippet.description}</p>
                     </div>
                   </div>
                 </a>
                 //  </div>
               );
             })}
           </div>
         </div>
         ;
       </>
     );
}

export default TheLastSecotion

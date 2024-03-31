import React, { useEffect, useState } from "react";
import { YOUTUBE_VIDEO_API } from "../utils/api-data.js";
import VideoCard from "./VideoCard.jsx" 
import { Link } from "react-router-dom";

export default function VideoContainer() {
    const [videos, setVideos] = useState([ ]);

    useEffect(() =>  {getData()},[]);

   const getData = async () => {
    const data = await fetch(YOUTUBE_VIDEO_API);
    const json =  await data.json();
         
        setVideos(json.items)
        
    };

    return (

        <div className="flex flex-wrap">
            {videos.map((video) => <Link to={"/watch?v=" +video.id}><VideoCard key= {video.id} info={ video }/>
            </Link>
            )}
           
        </div> 
    )
};1
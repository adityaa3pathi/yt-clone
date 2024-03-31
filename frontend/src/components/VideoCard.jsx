



export default function VideoCard({ info } ) {

    if(!info) {
        return(
            <div>Loading...</div>
        )
    }
        console.log(info);
        const {snippet, statistics} = info;
        const {thumbnails, title, channelTitle } = snippet



  



    return (
         <div className="p-2 m-2 w-72 shadow-lg">
           
            <img className=" rounded-lg " src={thumbnails.medium.url}></img>
            <h1 className=" font-bold">{title}</h1>
            <h4>{channelTitle}</h4>
            <h4>{statistics.viewCount} views</h4>
            

         </div>

    )
}
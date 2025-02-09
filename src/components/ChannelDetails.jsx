import {useState , useEffect} from 'react'
import { useParams } from 'react-router-dom'
import { Box } from '@mui/system'
import Videos from "./Videos"
import ChannelCard from "./ChannelCard"
import {fetchFromAPI} from "../utils/fetchFromAPI"

const ChannelDetails = () => {
  const [videos , setVideos] = useState([]);
const [channelDetail , setChannelDetail] = useState(null)
const {id} = useParams();
console.log( videos)
useEffect(()=> {
fetchFromAPI (`channels?part=snippet&id=${id}`).then((data)=> setChannelDetail(data?.items[0]));

fetchFromAPI (`search?channelId=${id}&part=snippet&order=date`).then((data)=> setVideos(data?.items));
},[id])
  return (
    <Box minHeight="95vh">
      <Box>
        <div 
        style={{
          background: "linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(149,41,41,1) 51%, rgba(0,0,0,1) 100%)",
          zIndex:10,
          height:"300px"
        }}/>
        <ChannelCard marginTop="-110px" channelDetail={channelDetail}/>

      </Box> 
      <Box display="flex" p="2">
        <Box sx={{
          mr:{sm:"100px"}
        }}/>
          <Videos videos={videos} />
        
      </Box>
    </Box>
  )
}

export default ChannelDetails

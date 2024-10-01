/* import {useState , useEffect} from 'react'
import { Link , useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography , Box, Stack } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'

import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const VideoDetails = () => {
  const [videoDetail , setVideoDetail]=useState(null);
  const {id} = useParams();

  useEffect(()=>{
fetchFromAPI(`videos?part=snippet,statics&id=${id}`)
.then((data) => setVideoDetail(data.item[0]));
  },[id])
  return (
    <Box minHeight="95vh">
    <Stack direction={{xs:"column" , md:"row"}}>
    <Box flex={1}>
    <Box sx={{
      width:"100%",
      position:"sticky",
      top:"86px"
    }}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
      className="react-player" controls/>
    </Box>
    </Box>
    </Stack>
    </Box>
  )
}

export default VideoDetails */

import {useState , useEffect} from 'react'
import { Link , useParams} from 'react-router-dom'
import ReactPlayer from 'react-player'
import { Typography , Box, Stack } from '@mui/material'
import CheckCircle from '@mui/icons-material/CheckCircle'

import Videos from './Videos'
import { fetchFromAPI } from '../utils/fetchFromAPI'


const VideoDetails = () => {
  const [videoDetail , setVideoDetail]=useState(null);
  const {id} = useParams();
  const [videos , setVideos] = useState(null);

  useEffect(()=>{
    fetchFromAPI(`videos?part=snippet,statistics&id=${id}`)
    .then((data) => setVideoDetail(data.item[0]));

    fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
    .then((data) => setVideos(data.items))

  },[id])
/* if (!videoDetail?.snippet) return "loading..." */

  /* const {snippet : {title , channelId, channelTitle}, statistics : {viewCount , likeCount}} = videoDetail; */
  return (
    <Box minHeight="95vh">
    <Stack direction={{xs:"column" , md:"row"}}>
    <Box flex={1}>
    <Box sx={{
      width:"100%",
      position:"sticky",
      top:"86px"
    }}>
      <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
      className="react-player" controls/>
      <Typography color="#fff" variant="h5" fontWeight="bold" p={2}>
        {/*  {title}  */}
      </Typography>
      <Stack direction="row" justifyContent="space-between" sx={{
        color : "#fff"
      }} py={1} px={2}>

     {/*  <Link to={`/channel/${channelId}`}>
      <Typography>
        {channelTitle}
      </Typography>
      </Link> */}

<Stack>
  {/* <Typography variant="body1" sx={{
    opacity:0.7
  }}>
  {viewCount} views
  </Typography> */}
</Stack>

    </Stack>
    </Box>
    </Box>
    </Stack>

    <Box px={2} py={{md:1 , xs:5}} justifyContent="center" alignItem="center">
  {/* <Videos videos={videos}/> */}
    </Box>
    </Box>
  )
}

export default VideoDetails
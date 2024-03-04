import React, { useEffect, useState } from 'react'
import { Row,Col } from 'react-bootstrap'
import VideoCard from './VideoCard'
import { getAllVideosAPI,getSingleCategoryAPI, updateCategoryAPI } from '../services/allAPI'

function View({uploadVideoResponse,setRemoveCategoryVideoResponse}) {

  const [allVideos,setAllVideos] =useState([])
const [deleteVideoResponce,setDeleteVideoResponce] = useState("")

 const getAllVideos = async ()=>{
const result =await getAllVideosAPI()
// console.log(result);

if (result?.status==200){   
  setAllVideos(result?.data);
}
  }
  useEffect(()=>{
    getAllVideos()
  },[uploadVideoResponse,deleteVideoResponce])

  // console.log(allVideos);
  const dragOverView =(e)=>{
    e.preventDefault()
  }
  const handleCategoryVideo = async(e)=>{
    const {videoId,CategoryId} = JSON.parse(e.dataTransfer.getData("removeVideoDetails"))
    console.log(`Remove Video Id: ${videoId},from category Id: ${CategoryId}`);
    //get A category
    const {data} =await getSingleCategoryAPI(CategoryId)
    const updatedVideoList = data.allVideos.filter(item=>item.id!=videoId)
    console.log(updatedVideoList);
     const {id,categoryName}=data
    const result = await updateCategoryAPI(CategoryId,{id,categoryName,allVideos:updatedVideoList})
    setRemoveCategoryVideoResponse(result.data)

  }
  
  return (
    <>
    <Row  droppable="true" onDragOver={e=>dragOverView(e)} onDrop={e=>handleCategoryVideo(e)}>
      { allVideos?.length>0? allVideos?.map((video,index)=>(
         <Col key={index} className='mb-4' sm={12} md={6} lg={4}>
         <VideoCard displayData={video} setDeleteVideoResponce={setDeleteVideoResponce}/>
     </Col>

      ))
      :
<div className='text-danger fw-bolder'>No videos are uploaded yet!!!</div>
      }

    </Row>
    </>
  )
}

export default View
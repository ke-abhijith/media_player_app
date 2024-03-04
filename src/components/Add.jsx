import React,{useState} from 'react'
import { Modal,Button ,Form,FloatingLabel} from 'react-bootstrap'
import { uploadVideoAPI,getSingleCategoryAPI } from '../services/allAPI';


function Add({setUploadVideoResponse}) {
    const [uploadVideo,setUploadVideo]= useState({caption:"",imageURL:"",youtubeLink:""})
    const [show, setShow] = useState(false);

    const handleClose = () => {
      setShow(false);
      setUploadVideo({...uploadVideo,caption:"",imageURL:"",youtubeLink:""})
    }


    const handleShow = () => setShow(true);

    const getYoutubeEmbedLink =(link)=>{
      if(link.includes("v=")){
        let videoId= link.split("v=")[1].slice(0,11)
        setUploadVideo({...uploadVideo,youtubeLink:`https://www.youtube.com/embed/${videoId}`})

      }else{
        setUploadVideo({...uploadVideo,youtubeLink:""})
        alert("Input proper youtube link!!!")

      }

    }

    console.log(uploadVideo);

    const handleUpload= async()=>{
      //store upload video from http://localhost:5173/home to  http://localhost:3000/videos
      const {caption,imageURL,youtubeLink} = uploadVideo
      if(caption && imageURL && youtubeLink){
        //proceed to store video
        const result= await uploadVideoAPI(uploadVideo)
        console.log(result);
      
        if(result.status>=200 && result.status<300){
          alert(`video'${result.data.caption}'uploaded successfully!!!`)
          setUploadVideoResponse(result.data)
          handleClose()

        }else{
          alert("API Call Failed...Please try after some time!!!")
        }


      }else{
        alert("please fill the form completely!!!")
      }

    }

  return (
    <> 
    <div className="d-flex align-items-center">
        <h5>Upload A Video</h5>
        <button onClick={handleShow} className='btn bg-secondary ms-2 '> <i className="fa-solid fa-plus"></i></button>
    </div>

    

    <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>Video Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
         <p>Please fill the following details!!!</p>
         <div className="border rounded border-secondary p-3">

         <FloatingLabel
        controlId="floatingInputCaption"
        label="Video Caption"
        className="mb-3"
      >
        <Form.Control  value={uploadVideo.caption} onChange={e=>setUploadVideo({...uploadVideo,caption:e.target.value})} type="text" placeholder="Video Caption" />
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputImg"
        label="Image Url"
        className="mb-3"
      >
        <Form.Control value={uploadVideo.imageURL} onChange={e=>setUploadVideo({...uploadVideo,imageURL:e.target.value})} type="text" placeholder="Image Url"/>
      </FloatingLabel>

      <FloatingLabel
        controlId="floatingInputLink"
        label="Youtube Video Link"
        className="mb-3"
      >
        <Form.Control  value={uploadVideo.youtubeLink} onChange={e=>getYoutubeEmbedLink(e.target.value)} type="text" placeholder="Youtube Video Link" />
      </FloatingLabel>

         </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button onClick={handleUpload} className='btn btn-info' >Upload</Button>
        </Modal.Footer>
      </Modal>

    </>
  )
}

export default Add
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Card } from 'react-bootstrap'

function LandingPage() {

  const navigate= useNavigate()

  const handleNavigate=()=>{
    //navigate to home
    navigate('/home')
  }
  return (
   <>
   <div className='container mt-5'>
    <div className="header row align-items-center m-5">
      <div className="col-lg-5">
        <h3>Welcome to <span className='text-warning'>Media player</span></h3>
        <p style={{textAlign:'justify'}}>Media Player App.will allow you to add and remove their uploaded videos, also helps to arrange them in different categories by providing drag and drop functionalities </p>
        <button onClick={handleNavigate} className='btn btn-info mt-3'>Get Started</button>
      </div>
      <div className="col-lg-1"></div>
      <div className="col-lg-6">
        <img style={{width:'100%'}} src="https://i.pinimg.com/originals/dc/c9/ce/dcc9cea8525b59b91d1a6ed0e27fff59.gif" alt="Landing page" />
      </div>

    </div>
    <div className="features">
      <h3 className="text-center">Features</h3>
      <div className="row mt-5">
        <div className="col-lg-4">
        <Card  style={{height:'450px'}}>
      <Card.Img style={{height:'300px'}} variant="top" src="https://media1.tenor.com/images/e8f28121eba19ac9b346358e4d7d66e4/tenor.gif?itemid=8009181" />
      <Card.Body>
        <Card.Title>Managing Videos</Card.Title>
        <Card.Text>
         User can upload view and remove videos.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card  style={{height:'450px'}}>
      <Card.Img style={{height:'300px'}} variant="top" src="https://i.pinimg.com/originals/86/a7/65/86a76562ff84a8e8ea1c7781a99b07f3.gif" />
      <Card.Body>
        <Card.Title>Categorize Videos</Card.Title>
        <Card.Text>
          user can categorise the videos according to their preferences using drag and drop features.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
        <div className="col-lg-4">
        <Card style={{height:'450px'}} >
      <Card.Img style={{height:'300px'}} variant="top" src="https://media.tenor.com/images/4ec0e1d1d61d9801820728de9cf19625/tenor.gif" />
      <Card.Body>
        <Card.Title>Watch History</Card.Title>
        <Card.Text>
        User are able to see the history of watched videos.
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
      </div>
    </div>
    <div className=" video row  border p-5 mt-5 rounded mb-5 align-items-center">
      <div className="col-lg-5">
        <h3 className='text-warning'>Simple, Fast And Powerful</h3>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>Play Everything:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius earum sed modi possimus repudiandae perspiciatis eligendi quasi ratione placeat corrupti voluptatibus fugit sint, accusantium hic nobis error! Voluptatibus, repellat.</p>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>Categorize Videos:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius earum sed modi possimus repudiandae perspiciatis eligendi quasi ratione placeat corrupti voluptatibus fugit sint, accusantium hic nobis error! Voluptatibus, repellat.</p>
        <p style={{textAlign:'justify'}}> <span className='fs-4'>Watch History:</span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate eius earum sed modi possimus repudiandae perspiciatis eligendi quasi ratione placeat corrupti voluptatibus fugit sint, accusantium hic nobis error! Voluptatibus, repellat.</p>

      </div>
      <div className="col"></div>
      <div className="col-lg-6">
      <iframe width="658" height="400" src="https://www.youtube.com/embed/8VEqzGViPrc" title="Badass (From &quot;Leo&quot;)" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

      </div>
    </div>
   </div>
   <hr />
   </>
  )
}

export default LandingPage
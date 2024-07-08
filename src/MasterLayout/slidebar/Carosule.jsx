import Carousel from 'react-bootstrap/Carousel';
import imgFour from '../../images/4.png';
import imgFive  from '../../images/5.png';
import imgSix from '../../images/6.png';

function Carosule() {
  return (
   <>
   
    <Carousel data-bs-theme="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgFour}
          alt="First slide"
        />
   
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgFive} 
          alt="Second slide"
        />
        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={imgSix} 
          alt="Third slide"
        />
      
      </Carousel.Item>
    </Carousel>
   
   
   
   
   
   
   
   </>
  )
}

export default Carosule
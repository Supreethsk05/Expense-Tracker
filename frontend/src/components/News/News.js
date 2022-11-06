import Carousel from 'react-bootstrap/Carousel';

function CarouselFadeExample() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSGyfOf0M-Wp5Afnsu8_gntUOjF051C1pcYCw&usqp=CAU"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZFTFmrbkP6Isi_G6YXXoWBD-4f88MS4yXIQ&usqp=CAU"    
 alt='Business news 2'   />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgfqmA3MSAcYQd37z8utY6LxMptBPuCfFD0g&usqp=CAU"    
alt="Business news 3"    />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default CarouselFadeExample;
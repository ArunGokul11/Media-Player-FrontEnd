import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';
function Landingpage() {
  return (
    <>
      <div className='container my-5'>
        <Row>
          <Col>
            <h3>Welcome to <span className='text-warning'>Media Player</span></h3>
            <p style={{ textAlign: 'justify' }}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eius incidunt labore vitae recusandae velit dicta voluptatibus aliquid nihil eaque, corrupti perferendis, delectus maiores fuga, rerum esse deleniti nisi? A, vel.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur autem eveniet itaque laborum facere nemo maxime ab totam doloribus aperiam veniam incidunt libero ipsam dolores delectus distinctio, molestias, obcaecati esse.
            </p>
            <Link to={'/home'}>
              <button className='btn btn-warning mt-5 p-3'>Get started <i class="fa-solid fa-arrow-right"></i></button></Link>
          </Col>
          <Col>
            <img src="https://media.tenor.com/lhlDEs5fNNEAAAAC/music-beat.gif" alt="" style={{ height: "400px" }} />
          </Col>
        </Row>
        <div className='container'>
          <h3>Features</h3>

          <div className=' d-flex align-items-center justify-content-evenly'>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/2d/2d/51/2d2d51ba3d86b27b221abb162c24edc0.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://i.pinimg.com/originals/ad/d2/31/add23123b088c3301cc2c71f7767048d.gif" />
              <Card.Body>
                <Card.Title>Card Title</Card.Title>
                <Card.Text>
                  Some quick example text to build on the card title and make up the
                  bulk of the card's content.
                </Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      <div className='container mb-5 mt-5 border border-2 border-secondary rounded p-5'>
        <Row className='d-flex align-items-center justify-content-evenly'>
          <div className='col-md-6'>
            <h3 className='text-warning'>Simple And Powerfull</h3>
            <p style={{color:'white'}}><span className='fw-bolder fs-5 text-primary' >Play Everything:</span><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laudantium recusandae ipsum maxime? Provident, quam repellendus ea placeat pariatur eaque, magni nulla incidunt officia hic velit, dolor voluptate vitae dolore!</span></p>
            <p style={{color:'white'}}><span className='fw-bolder fs-5 text-primary' >Play Everything:</span><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laudantium recusandae ipsum maxime? Provident, quam repellendus ea placeat pariatur eaque, magni nulla incidunt officia hic velit, dolor voluptate vitae dolore!</span></p>
            <p style={{color:'white'}}><span className='fw-bolder fs-5 text-primary' >Play Everything:</span><span>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto laudantium recusandae ipsum maxime? Provident, quam repellendus ea placeat pariatur eaque, magni nulla incidunt officia hic velit, dolor voluptate vitae dolore!</span></p>
          </div>
          <div className='col-md-6'>
          <iframe width="600" height="486" src="https://www.youtube.com/embed/HihakYi5M2I" title="Salaar Hindi Trailer | Prabhas | Prashanth Neel | Prithviraj|Shruthi|Hombale Films| Vijay Kiragandur" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
          </div>
        </Row>
      </div>
    </>
  );
};
export default Landingpage;
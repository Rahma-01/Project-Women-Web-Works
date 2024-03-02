import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Image, Navbar, Nav, Carousel } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  // const [selectedData, setSelectedData] = useState({})
  const [showModal, setShowModal] = useState(false)

  const getData = async () => {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush')
    console.log(response.data);
    setData(response.data)
  }

  // const getDataById = async (id) => {
  //   const response = await axios.get(`https://makeup-api.herokuapp.com/api/v1/products/${id}`)
  //   console.log(response.data);
  //   setSelectedData(response.data)
  // }

  const cardOnClick = (item) => {
    // setSelectedData(item)
    setShowModal(true)
  }

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Navbar style={{backgroundColor: '#F2BED1'}} data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Carousel>
          <Carousel.Item>
            <center>
              <Image src='mountain.jpg' width={'1080px'} height={'518px'} />
            </center>
            <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <center>
              <Image src='mountain.jpg' width={'1080px'} height={'518px'}/>
            </center>
            <Carousel.Caption>
              <h3>Second slide label</h3>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            </Carousel.Caption>
          </Carousel.Item>
          
          <Carousel.Item>
            <center>
              <Image src='mountain.jpg' width={'1080px'} height={'518px'}/>
            </center>
            <Carousel.Caption>
              <h3>Third slide label</h3>
              <p>
                Praesent commodo cursus magna, vel scelerisque nisl consectetur.
              </p>
            </Carousel.Caption>
          </Carousel.Item>
      </Carousel>

      <Container>
        <Row>
          <Col xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
            <Card style={{backgroundColor: '#FDCEDF', margin: '20px', padding: '20px', width: '500px', height: '300px'}}>
              <Card.Title>Makeup</Card.Title>
              <Card.Body>
                <Row>
                  <Col xs={6}>
                    <Image src='test.jpg' height={'187pc'} width={'187px'} />
                  </Col>
                  <Col xs={6}>
                    <Image src='test.jpg' height={'187px'} width={'187px'} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}>
            <Card style={{backgroundColor: '#FDCEDF', margin: '20px', padding: '20px', width: '500px', height: '300px'}}>
              <Card.Title>Makeup</Card.Title>
              <Card.Body>
                <Row>
                  <Col xs={6}>
                    <Image src='test.jpg' height={'187px'} width={'187px'} />
                  </Col>
                  <Col xs={6}>
                    <Image src='test.jpg' height={'187px'} width={'187px'} />
                  </Col>
                </Row>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
            {data.map((item) => (
              <Col xs={8} sm={7} md={6} lg={4}>
                <Card style={{ height: '513px', margin: '16px', padding: '32px', maxWidth: '300px' }}>
                  <Card.Img variant="top" sizes='400px' src={item.image_link} alt='gambar' />
                  <Card.Body style={{margin: '2px', padding: '2px'}}>
                    <Card.Title className='text-truncate'>{item.name}</Card.Title>
                    <Card.Text className='text-truncate'>
                      <div>
                      Brand: {item.brand ? item.brand : 'No Brand'}
                      </div>
                      <div>
                      Product Type: {item.product_type}
                      </div>
                      <div>
                      Category: {item.category}
                      </div>
                      <div>
                      Price: {item.price}
                      </div>
                    </Card.Text>
                    <Button variant="primary" onClick={cardOnClick}>Details</Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
              </Row>

              <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Halo test test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet
                </Modal.Body>
              </Modal>
      </Container>
      <div className='Footer' style={{backgroundColor:'#F2BED1', padding: '40px'}}>
        <Container>
              <p>
                Footer
              </p>
        </Container>
      </div>
    </>
  );
}

export default App;

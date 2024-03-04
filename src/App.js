import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Image, Navbar, Nav, Stack } from 'react-bootstrap';
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

  const mobileMode = window.innerWidth <= 768

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

      <Container>
        <Stack gap={5} style={{alignItems: 'center'}}>
          <Stack direction={mobileMode ? 'vertical' : 'horizontal'} style={{justifyContent: 'space-evenly', alignItems: 'center'}} gap={4}>
            {/* <Col xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}> */}
              <Card style={{backgroundColor: '#FDCEDF', marginTop: '20px', padding: '20px', width: '500px', height: '300px'}}>
                <Card.Title style={{alignSelf: 'center'}}>Categories</Card.Title>
                <Card.Body>
                  <Row>
                    <Col xs={6}>
                      <Image src='test.jpg' height={'187px'} width={'187px'} style={{borderRadius: '8px'}}/>
                    </Col>
                    <Col xs={6}>
                      <Image src='test.jpg' height={'187px'} width={'187px'} style={{borderRadius: '8px'}}/>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            {/* </Col> */}
            {/* <Col xs={'auto'} sm={'auto'} md={'auto'} lg={'auto'}> */}
              <Card style={{backgroundColor: '#FDCEDF', marginTop: '20px', padding: '20px', width: '500px', height: '300px'}}>
                <Card.Title style={{alignSelf: 'center'}}>Brands</Card.Title>
                <Card.Body>
                  <Row>
                    <Col xs={6}>
                      <Image src='test.jpg' height={'187px'} width={'187px'} style={{borderRadius: '8px'}}/>
                    </Col>
                    <Col xs={6}>
                      <Image src='test.jpg' height={'187px'} width={'187px'} style={{borderRadius: '8px'}}/>
                    </Col>
                  </Row>
                </Card.Body>
              </Card>
            {/* </Col> */}
          </Stack>
          <Row style={{alignSelf: 'center'}}>
              {data.map((item) => (
                <Col xs={8} sm={7} md={6} lg={4}>
                  <Card onClick={cardOnClick} style={{ backgroundColor: '#FDCEDF', height: '513px', margin: '16px', padding: '32px', maxWidth: '300px' }}>
                    <Card.Img variant="top" sizes='400px' src={item.image_link} alt='gambar' style={{borderRadius: '8px'}} />
                    <Card.Body style={{margin: '2px', padding: '2px'}}>
                      {/* <Card.Title className='text-truncate'>{item.name}</Card.Title> */}
                      <Card.Text>
                        {/* <div>
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
                        </div> */}
                        <Stack gap={2}>
                          <Stack>
                            <p>{item.name}</p>
                            <Stack direction='horizontal'>
                              <p><strong>Category: </strong>{item.category}</p>
                            </Stack>
                          </Stack>
                          <p><strong>${item.price}</strong></p>
                        </Stack>
                      </Card.Text>
                      {/* <Button variant="primary" onClick={cardOnClick}>Details</Button> */}
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Stack>

              <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                <Modal.Header closeButton>
                  <Modal.Title>Halo test test</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                  Lorem ipsum dolor sit amet
                </Modal.Body>
              </Modal>
      </Container>
    </>
  );
}

export default App;

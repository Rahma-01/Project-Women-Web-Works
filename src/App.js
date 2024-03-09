import React, { useEffect, useState } from 'react';
import { Card, Container, Row, Col, Modal, Image, Navbar, Nav, Stack } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState()
  const [showModal, setShowModal] = useState(false)
  const [innerWidth, setInnerWidth] = useState(window.innerWidth);

  const getData = async () => {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush')
    // console.log(response.data);
    setData(response.data)
  }

  const getDataById = async (id) => {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush')
    const detailData = response.data.find((item) => item.id === id)
    setSelectedData(detailData)
    console.log(selectedData);
  }

const cardOnClick = (id) => {
  setShowModal(true);
  // Wrap the function call inside another function to prevent it from being called on every render
  const fetchData = async () => {
    await getDataById(id);
  };
  fetchData();
};

  const handleResize = () => {
    setInnerWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Navbar style={{backgroundColor: '#F2BED1', width: '100%'}} data-bs-theme="light">
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
          <Stack direction={innerWidth > 768 ? 'horizontal' : 'vertical'} style={{justifyContent: 'space-evenly', alignItems: 'center'}} gap={4}>
              <Card style={{backgroundColor: '#FDCEDF', marginTop: '20px'}}>
                <Container>
                  <Card.Title style={{alignSelf: 'center'}}>Categories</Card.Title>
                  <Card.Body>
                    <Row>
                      <Col xs={6}>
                        <Image src='test.jpg' height={'200rem'} width={'auto'} style={{borderRadius: '8px'}}/>
                      </Col>
                      <Col xs={6}>
                        <Image src='test.jpg' height={'200rem'} width={'auto'} style={{borderRadius: '8px'}}/>
                      </Col>
                    </Row>
                  </Card.Body>
                </Container>
              </Card>
              <Card style={{backgroundColor: '#FDCEDF', marginTop: '20px'}}>
                <Container>
                  <Card.Title style={{alignSelf: 'center'}}>Brands</Card.Title>
                  <Card.Body>
                    <Row>
                      <Col xs={6}>
                        <Image src='test.jpg' height={'200rem'} width={'auto'} style={{borderRadius: '8px'}}/>
                      </Col>
                      <Col xs={6}>
                        <Image src='test.jpg' height={'200rem'} width={'auto'} style={{borderRadius: '8px'}}/>
                      </Col>
                    </Row>
                  </Card.Body>
                </Container>
              </Card>
          </Stack>
          <Row style={{alignSelf: 'center'}}>
              {data.map((item) => (
                <Col xs={8} sm={7} md={6} lg={4}>
                  <Card onClick={() => cardOnClick(item.id)} style={{ backgroundColor: '#FDCEDF', height: '450px', margin: '16px', padding: '32px', maxWidth: '300px' }}>
                    <Card.Img variant="top" height={'200px'} width={'200px'} src={item.image_link} alt='gambar' style={{borderRadius: '8px'}} />
                    <Card.Body style={{margin: '2px', padding: '2px'}}>
                      <Card.Text>
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
                    </Card.Body>
                  </Card>
                </Col>
              ))}
          </Row>
        </Stack>
              <Modal show={showModal} onHide={() => setShowModal(false)} centered>
                  <Modal.Header style={{backgroundColor: '#F9F5F6'}} closeButton>
                    <Modal.Title>{selectedData?.name}</Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{backgroundColor: '#F9F5F6'}}>
                    <Container>
                      <Row>
                        <Col xs={12} md={8} lg={4}>
                          <Card>
                            <Card.Img variant="top" src={selectedData?.image_link} alt='gambar' style={{borderRadius: '8px'}} />
                            <Card.Body>
                              <Card.Title>{selectedData.brand ? selectedData?.brand : selectedData?.name}</Card.Title>

                            </Card.Body>
                          </Card>
                        </Col>
                        <Col xs={12} md={8} lg={8}>
                          {selectedData?.description}
                        </Col>
                      </Row>
                    </Container>
                    
                  </Modal.Body>
              </Modal>
      </Container>
    </>
  );
}

export default App;
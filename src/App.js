import React, { useEffect, useState } from 'react';
import { Button, Stack, Card, Container, Row, Col, Modal, Image, Navbar, Nav, Carousel, Form, NavDropdown } from 'react-bootstrap';
import axios from 'axios';
import { BiSearch } from "react-icons/bi";
import {BsBag} from 'react-icons/bs'
import Search from './components/Search';

function App() {
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState({})
  const [innerWidth, setInnerWidth] = useState(window.innerWidth)
  const [showModal, setShowModal] = useState(false)

  const getData = async () => {
    const response = await axios.get('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=blush')
    console.log(response.data);
    setData(response.data)
  };

  const getDataById = async (id) => {
    const response = await data.find((item) => item.id === id)
    console.log(response);
    setSelectedData(response)
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
      <Navbar sticky='top' expand="lg" style={{backgroundColor: '#F2BED1', paddingLeft:'15%', paddingRight:'15%'}}>
        <Container fluid style={{paddingLeft:'0', paddingRight:'0'}}>
          <Navbar.Brand href="#">
            <Image src='logo.png'/>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
              <NavDropdown title="Categories" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Blush</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Bronze</NavDropdown.Item>
              <NavDropdown.Item href="#action3">Eyebrow</NavDropdown.Item>
              <NavDropdown.Item href="#action4">Eyeliner</NavDropdown.Item>
              <NavDropdown.Item href="#action5">Eyeshadow</NavDropdown.Item>
              <NavDropdown.Item href="#action6">Foundation</NavDropdown.Item>
              <NavDropdown.Item href="#action7">Lip liner</NavDropdown.Item>
              <NavDropdown.Item href="#action8">Lipstick</NavDropdown.Item>
              <NavDropdown.Item href="#action9">Mascara</NavDropdown.Item>
              <NavDropdown.Item href="#action10">Nail polish</NavDropdown.Item>
              </NavDropdown>              

              <NavDropdown title="Brands" id="navbarScrollingDropdown">
                <NavDropdown.Item href="#action11">almay</NavDropdown.Item>
                <NavDropdown.Item href="#action12">alva</NavDropdown.Item>
                <NavDropdown.Item href="#action13">anna sui</NavDropdown.Item>
                <NavDropdown.Item href="#action14">annabelle</NavDropdown.Item>
                <NavDropdown.Item href="#action15">benefit</NavDropdown.Item>
                <NavDropdown.Item href="#action16">boosh</NavDropdown.Item>
                <NavDropdown.Item href="#action17">burt's bees</NavDropdown.Item>
                <NavDropdown.Item href="#action18">butter london</NavDropdown.Item>
                <NavDropdown.Item href="#action19">c'est moi</NavDropdown.Item>
                <NavDropdown.Item href="#action20">cargo cosmetics</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action21">other brands</NavDropdown.Item>

                {/* <NavDropdown.Item href="#action21">china glaze</NavDropdown.Item>
                <NavDropdown.Item href="#action22">clinique</NavDropdown.Item>
                <NavDropdown.Item href="#action23">coastal classic creation</NavDropdown.Item>
                <NavDropdown.Item href="#action24">colourpop</NavDropdown.Item>
                <NavDropdown.Item href="#action25">covergirl</NavDropdown.Item>
                <NavDropdown.Item href="#action26">dalish</NavDropdown.Item>
                <NavDropdown.Item href="#action27">deciem</NavDropdown.Item>
                <NavDropdown.Item href="#action28">dior</NavDropdown.Item>
                <NavDropdown.Item href="#action29">dr. hauschka</NavDropdown.Item>
                <NavDropdown.Item href="#action30">e.l.f.</NavDropdown.Item>
                <NavDropdown.Item href="#action31">essie</NavDropdown.Item>
                <NavDropdown.Item href="#action32">fenty</NavDropdown.Item>
                <NavDropdown.Item href="#action33">glossier</NavDropdown.Item>
                <NavDropdown.Item href="#action34">green people</NavDropdown.Item>
                <NavDropdown.Item href="#action35">iman</NavDropdown.Item>
                <NavDropdown.Item href="#action36">l'oreal</NavDropdown.Item>
                <NavDropdown.Item href="#action37">lotus cosmetics usa</NavDropdown.Item>
                <NavDropdown.Item href="#action38">maia's mineral galaxy</NavDropdown.Item>
                <NavDropdown.Item href="#action39">marcelle</NavDropdown.Item>
                <NavDropdown.Item href="#action40">marienatie</NavDropdown.Item>
                <NavDropdown.Item href="#action41">maybelline</NavDropdown.Item>
                <NavDropdown.Item href="#action42">milani</NavDropdown.Item>
                <NavDropdown.Item href="#action43">mineral fusion</NavDropdown.Item>
                <NavDropdown.Item href="#action44">misa</NavDropdown.Item>
                <NavDropdown.Item href="#action45">mistura</NavDropdown.Item>
                <NavDropdown.Item href="#action46">moov</NavDropdown.Item>
                <NavDropdown.Item href="#action47">nudus</NavDropdown.Item>
                <NavDropdown.Item href="#action48">nyx</NavDropdown.Item>
                <NavDropdown.Item href="#action49">orly</NavDropdown.Item>
                <NavDropdown.Item href="#action50">pacifica</NavDropdown.Item>
                <NavDropdown.Item href="#action51">penny lane organics</NavDropdown.Item>
                <NavDropdown.Item href="#action52">physicians formula</NavDropdown.Item>
                <NavDropdown.Item href="#action53">piggy paint</NavDropdown.Item>
                <NavDropdown.Item href="#action54">pure anada</NavDropdown.Item>
                <NavDropdown.Item href="#action55">rejuva minerals</NavDropdown.Item>
                <NavDropdown.Item href="#action56">revlon</NavDropdown.Item>
                <NavDropdown.Item href="#action57">sally b's skin yummies</NavDropdown.Item>
                <NavDropdown.Item href="#action58">salon perfect</NavDropdown.Item>
                <NavDropdown.Item href="#action59">sante</NavDropdown.Item>
                <NavDropdown.Item href="#action60">sinful colours</NavDropdown.Item>
                <NavDropdown.Item href="#action61">smashbox</NavDropdown.Item>
                <NavDropdown.Item href="#action62">stila</NavDropdown.Item>
                <NavDropdown.Item href="#action63">suncoat</NavDropdown.Item>
                <NavDropdown.Item href="#action64">w3llpeople</NavDropdown.Item>
                <NavDropdown.Item href="#action65">wet n wild</NavDropdown.Item>
                <NavDropdown.Item href="#action70">zorah</NavDropdown.Item>
                <NavDropdown.Item href="#action71">zorah biocosmetiques</NavDropdown.Item> */}
              </NavDropdown>

              <Nav.Link href="#action72">Contact Us</Nav.Link>
            </Nav>

            <Search />

            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <Button variant="light" className="me-2">
                <BiSearch />
              </Button>
            </Form> */}
            
            <Button variant="outline-dark" className="me-2">
              <BsBag />
            </Button>
            
            <Button variant="outline-primary" className="me-2">Login</Button>{' '}
            <Button variant="primary">Sign Up</Button>{' '}
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <main style={{paddingLeft:'15%', paddingRight:'15%'}}>
        <Carousel style={{paddingTop:'38px', paddingBottom:'38px'}}>
            <Carousel.Item>
              <center>
                <Image src='carousel1.png' width={'100%'} />
              </center>
            </Carousel.Item>
            
            <Carousel.Item>
              <center>
                <Image src='carousel2.png' width={'100%'}/>
              </center>
            </Carousel.Item>
            
            <Carousel.Item>
              <center>
                <Image src='carousel3.png' width={'100%'}/>
              </center>
            </Carousel.Item>
        </Carousel>

        <Container>
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
        </Container>
      </main>

      <footer style={{backgroundColor:'#F2BED1', padding: '20px'}}>
        <Container>
              <p style={{fontSize:'20px', textAlign:'center'}}>
                Copyright © Makeup Store
              </p>
        </Container>
      </footer>
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
                              <Card.Title>{selectedData?.brand ? selectedData?.brand : selectedData?.name}</Card.Title>

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
    </>
 );
}

export default App;
 

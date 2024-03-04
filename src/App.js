import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Modal, Image, Navbar, Nav, Carousel, Form, NavDropdown } from 'react-bootstrap';
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


              {/* const CustomToggle = React.forwardRef(({ children, onClick }, ref) => (
                <a
                  href=""
                  ref={ref}
                  onClick={(e) => {
                    e.preventDefault();
                    onClick(e);
                  }}
                >
                  {children}
                  &#x25bc;
                </a>
              ));

              const CustomMenu = React.forwardRef(
                ({ children, style, className, 'aria-labelledby': labeledBy }, ref) => {
                  const [value, setValue] = useState('');

                  return (
                    <div
                      ref={ref}
                      style={style}
                      className={className}
                      aria-labelledby={labeledBy}
                    >
                      <Form.Control
                        autoFocus
                        className="mx-3 my-2 w-auto"
                        placeholder="Type to filter..."
                        onChange={(e) => setValue(e.target.value)}
                        value={value}
                      />
                      <ul className="list-unstyled">
                        {React.Children.toArray(children).filter(
                          (child) =>
                            !value || child.props.children.toLowerCase().startsWith(value),
                        )}
                      </ul>
                    </div>
                  );
                },
              );

              render(
                <Dropdown>
                  <Dropdown.Toggle as={CustomToggle} id="dropdown-custom-components">
                    Custom toggle
                  </Dropdown.Toggle>

                  <Dropdown.Menu as={CustomMenu}>
                    <Dropdown.Item eventKey="1">Red</Dropdown.Item>
                    <Dropdown.Item eventKey="2">Blue</Dropdown.Item>
                    <Dropdown.Item eventKey="3" active>
                      Orange
                    </Dropdown.Item>
                    <Dropdown.Item eventKey="1">Red-Orange</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>,
              ); */}

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
                <NavDropdown.Item href="#action21">china glaze</NavDropdown.Item>
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
                <NavDropdown.Item href="#action71">zorah biocosmetiques</NavDropdown.Item>
              </NavDropdown>

              <Nav.Link href="#action2">Contact Us</Nav.Link>
            </Nav>

            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
            </Form>

            {/* <Image src='bag.svg'/> */}
            {/* <i class="bi bi-heart-fill"></i> */}

            <Button variant="outline-secondary" className="me-2">Log In</Button>{' '}
            <Button variant="primary" className="me-2">Sign Up</Button>{' '}
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <main style={{paddingLeft:'15%', paddingRight:'15%'}}>
        <Carousel style={{paddingTop:'38px', paddingBottom:'38px'}}>
            <Carousel.Item>
              <center>
                <Image src='mountain.jpg' width={'1080px'} height={'518px'}/>
              </center>

              <Carousel.Caption>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </Carousel.Caption>
            </Carousel.Item>
            
            <Carousel.Item>
              <center>
                <Image src='mountain.jpg' width={'1180px'} height={'518px'}/>
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
      </main>

      

      <footer style={{backgroundColor:'#F2BED1', padding: '20px'}}>
        <Container>
              <p style={{fontSize:'20px', textAlign:'center'}}>
                Copyright © Makeup Store
              </p>
        </Container>
      </footer>
    </>
  );
}

export default App;

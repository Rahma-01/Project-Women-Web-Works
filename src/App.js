import React, { useEffect, useState } from 'react';
import { Button, Card, Container, Row, Col, Modal } from 'react-bootstrap';
import axios from 'axios';

function App() {
  const [data, setData] = useState([])
  const [selectedData, setSelectedData] = useState({})
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

  // const cardOnClick = (item) => {
  //   setSelectedData(item)
  //   setShowModal(true)
  // }

  useEffect(() => {
    getData()
  }, [])

  return (
    <Container>
      <Row>
          {data.map((item) => (
            <Col xs={8} sm={7} md={6} lg={4}>
              <Card style={{ width: '18rem', margin: '2em' }}>
                <Card.Img variant="top" src={item.image_link} alt='gambar' />
                <Card.Body>
                  <Card.Title>{item.name}</Card.Title>
                  <Card.Text>
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
                  <Button variant="primary">Go somewhere</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
            </Row>

            {/* <Modal show={showModal} onHide={() => setShowModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>{selectedData && selectedData.name}</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                {selectedData && selectedData.description_full}
              </Modal.Body>
            </Modal> */}
    </Container>
  );
}

export default App;

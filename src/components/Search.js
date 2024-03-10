import React from 'react'
import {Form, Button} from 'react-bootstrap'
import { BiSearch } from 'react-icons/bi'

function Search() {
  return (
    <Form className="d-flex">
    <Form.Control
      type="search"
      placeholder="Search"
      aria-label="Search"
    />
    <Button variant="light" className="me-2">
      <BiSearch />
    </Button>
  </Form>
  )
}

export default Search
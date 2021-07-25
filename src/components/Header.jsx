import React, { useState } from 'react'
import {
  Navbar,
  Container,
  Form,
  FormControl
} from 'react-bootstrap'
import PropTypes from 'prop-types'

const Header = ({ handleSearch }) => {
  const [previousSearchQueries, setPreviousSearchQueries] = useState([])
  const [searchValue, setSearchValue] = useState('')
  const [showSuggestions, setShowSuggestions] = useState(false)
  const loadSearchQueries = () => {
    let searchQueries =
      JSON.parse(localStorage.getItem('searches')) || []
    searchQueries = searchQueries.filter(
      (value) => value !== ''
    )
    setPreviousSearchQueries(searchQueries)
    setShowSuggestions(true)
  }

  const doSearch = (query) => {
    setSearchValue(query)
    handleSearch(query)
    setShowSuggestions(false)
  }

  const handleChange = (e) => {
    setSearchValue(e.target.value)
    handleSearch(searchValue)
  }

  return (
    <>
    <Navbar bg="light" expand="lg" fixed="top">
      <Container>
        <Navbar.Brand href="#home">Search Images</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form className="d-flex flex-fill">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
              value={searchValue}
              onChange={handleChange}
              onFocus={loadSearchQueries}
            />
          </Form>
        </Navbar.Collapse>
      </Container>
      {showSuggestions && <div className="suggestions">
          {previousSearchQueries.map(query => <div key={query} onClick={() => doSearch(query)}>{query}</div>)}
        </div>}
    </Navbar>
    </>
  )
}

Header.propTypes = {
  handleSearch: PropTypes.func.isRequired
}

export default Header

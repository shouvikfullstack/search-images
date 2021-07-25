import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Header from './components/Header'
import ImageList from './components/ImageList'
import { getImages, searchImages } from './services/imageService'
import InfiniteScroll from 'react-infinite-scroller'
import { Spinner } from 'react-bootstrap'

function App () {
  const [images, setImages] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    const deboundSearch = setTimeout(() => {
      setImages([])
    }, 1000)

    return () => clearTimeout(deboundSearch)
  }, [searchQuery])

  const addToLocalStorage = () => {
    const previousSearches = JSON.parse(localStorage.getItem('searches')) || []
    if (!previousSearches.includes(searchQuery)) {
      previousSearches.push(searchQuery)
      localStorage.setItem('searches', JSON.stringify(previousSearches))
    }
  }

  const setImagesFromResponse = (page = 0) => {
    addToLocalStorage()
    if (searchQuery) {
      searchImages(searchQuery, page).then((result) => {
        setImages([...images, ...result.photos])
        setHasMore(result.hasMore)
      })
    } else {
      getImages(page).then((result) => {
        setImages([...images, ...result.photos])
        setHasMore(result.hasMore)
      })
    }
  }

  const handleSearch = (query) => {
    setSearchQuery(query)
  }

  const loadMore = (page) => {
    if (!hasMore) return
    setImagesFromResponse(page)
  }

  return (
    <div className="App">
      <Header handleSearch={handleSearch} />
        <InfiniteScroll
        className="m-5"
        key={searchQuery}
        pageStart={0}
        loadMore={loadMore}
        hasMore={hasMore}
        loader={
          <Spinner key={0} animation="border" role="status" className="m-4">
            <span className="visually-hidden">Loading...</span>
          </Spinner>
        }
      >
        <ImageList images={images} />
      </InfiniteScroll>
    </div>
  )
}

export default App

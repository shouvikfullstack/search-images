import axios from 'axios'

export const getImages = (page) => {
  return axios
    .get(
        `${process.env.REACT_APP_API_URL}?method=flickr.photos.getRecent&api_key=${process.env.REACT_APP_API_KEY}&format=json&nojsoncallback=1&per_page=${process.env.REACT_APP_PER_PAGE}&page=${page}`
    )
    .then((result) => {
      return {
        photos: result.data.photos.photo,
        // eslint-disable-next-line eqeqeq
        hasMore: page != result.data.photos.pages
      }
    })
}

export const searchImages = (query, page) => {
  return axios
    .get(
        `${process.env.REACT_APP_API_URL}?method=flickr.photos.search&api_key=${process.env.REACT_APP_API_KEY}&text=${query}&format=json&nojsoncallback=1&per_page=${process.env.REACT_APP_PER_PAGE}&page=${page}`
    )
    .then((result) => {
      return {
        photos: result.data.photos.photo,
        // eslint-disable-next-line eqeqeq
        hasMore: page != result.data.photos.pages
      }
    })
}

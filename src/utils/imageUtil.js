export const getImageUrl = (image) => {
  return `https://live.staticflickr.com/${image.server}/${image.id}_${image.secret}.jpg`
}

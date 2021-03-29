import React,{Fragment, useEffect,useState} from 'react'

// class Photos extends React.Component {
const Photos = () =>  {
  const [pageStart, setPageStart] = useState(0)
  const [photos, setPhotos] = useState([])

  useEffect(()=>{
    fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${pageStart}&_limit=5`)
  },[])

  useEffect(()=>{
    fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${pageStart}&_limit=5`)
  },[pageStart])

  const fetchPhotos = (url) => {
    console.log('>>>url:', url)
    fetch(url)
      .then(res=>res.json())
      .then(
        (result)=>{
          setPhotos(result)
        },
        (error)=>{
          // handle it properlly
        }
      )
  }

  const firstPage = () => {
    setPageStart(0)
  }

  const previousPage = () => {
    setPageStart(pageStart-5)
  }

  const nextPage = () => {
    setPageStart(pageStart+5)
  }

  const lastPage = () => {
    setPageStart(30)
  }

  const isFirstPage = () => {
    return pageStart === 0
  }

  const isLastPage = () => {
    return pageStart === 30
  }

  return(
    <Fragment>
      <h1>This is my photo page</h1>
      <table>
        {
          photos.map((photo)=>(
            <tr key={photo.id}>
              <td>{photo.title}</td>
            </tr>
          ))
        }
      </table>
      <button onClick = {()=>firstPage()} disabled={isFirstPage()}>First</button>
      <button onClick={()=>previousPage()} disabled={isFirstPage()}>Previous</button>
      <button onClick={()=>nextPage()} disabled={isLastPage()}>Next</button>
      <button onClick = {()=>lastPage()} disabled={isLastPage()}>Last</button>
    </Fragment>
  )
}

export default Photos
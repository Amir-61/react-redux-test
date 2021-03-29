import React,{Fragment} from 'react'

class Photos extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      photos:[],
      errors: {},
      pageStart: 0
    }
    this.fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${this.state.pageStart}&_limit=5`)
  }

  fetchPhotos(url) {
    console.log('>>>url:', url)
    fetch(url)
      .then(res=>res.json())
      .then(
        (result)=>{
          this.setState({photos: result})
        },
        (error)=>{
          this.setState({errors: error})
        }
      )
  }

  firstPage() {
    this.setState({pageStart: 0}, () => {
      this.fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${this.state.pageStart}&_limit=5`)
    })
  }

  previousPage() {
    this.setState({pageStart: this.state.pageStart-5}, () => {
      this.fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${this.state.pageStart}&_limit=5`)
    })
  }

  nextPage() {
    this.setState({pageStart: this.state.pageStart+5}, () => {
      this.fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${this.state.pageStart}&_limit=5`)
    })
  }

  lastPage() {
    this.setState({pageStart: 30}, () => {
      this.fetchPhotos(`http://jsonplaceholder.typicode.com/photos?_start=${this.state.pageStart}&_limit=5`)
    })
  }

  isFirstPage () {
    return this.state.pageStart === 0
  }

  isLastPage () {
    return this.state.pageStart === 30
  }

  render() {
    return(
      <Fragment>
        <h1>This is my photo page</h1>
        <table>
          {
            this.state.photos.map((photo)=>(
              <tr key={photo.id}>
                <td>{photo.title}</td>
              </tr>
            ))
          }
        </table>
        <button onClick = {()=>this.firstPage()} disabled={this.isFirstPage()}>First</button>
        <button onClick={()=>this.previousPage()} disabled={this.isFirstPage()}>Previous</button>
        <button onClick={()=>this.nextPage()} disabled={this.isLastPage()}>Next</button>
        <button onClick = {()=>this.lastPage()} disabled={this.isLastPage()}>Last</button>
      </Fragment>

    )
  }
}

export default Photos
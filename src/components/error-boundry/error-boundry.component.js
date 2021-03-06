import React from 'react'
import './error-boundry.styles.scss'

class ErrorBoundary extends React.Component {
  constructor () {
    super()
    this.state = {
      hasErrored: false
    }
  }
  static getDerivedStateFromError(err) {
    return { hasErrored: true }
  }

  componentDidCatch(err, info) {
    // If hasErrored is set to true in getDerivedStateFromError
    // it goes through this lifecycle event and here we can
    // log the error
    console.log('>>>error', err, info)

  }

  render() {
    // we wrap all page components with this errorBoundry so it acts
    // like a middle ware it either shows the error page if hasErrored
    // has been set to true or the actual page
    if(this.state.hasErrored) {
      return (
        <div className='ErrorImageOverlay'>
          <div className='ErrorImageContainer'/>
          <h2 className='ErrorImageText'>Sorry page is broken</h2>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary

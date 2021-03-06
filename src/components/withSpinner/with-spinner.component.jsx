
import React from 'react'
import {Alert} from 'react-bootstrap';

import './with-spinner.styles.scss'

const WithSpinner = (WrappedComponent) => ({isLoading, error, ...otherProps})=> {
  return isLoading ? (
    <div className='SpinnerOverlay'>
      <div className='SpinnerContainer' />
    </div>
    ): (error ? <Alert variant="danger">
        There is something wrong with API
      </Alert> : <WrappedComponent {...{isLoading, ...otherProps}} />)
}

export default WithSpinner;

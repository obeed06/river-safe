import React from 'react'
import PropTypes from 'prop-types'

function PageHeader({pageHeading}) {
  return (
    <div id="banner">
        <div className="wrapper">
          <div className="content">
            <h1>{pageHeading}</h1>
          </div>
        </div>
      </div>
  )
}

PageHeader.propTypes = {
    pageHeading: PropTypes.string.isRequired,
}

export default PageHeader

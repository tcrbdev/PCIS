import React, { PropTypes } from 'react'
import { Link } from 'react-router'

const ShowPage = ({
  title,
  content
}) => {
  return (
    <article>
      <h1>{title}</h1>
      <p>
        {content}
      </p>
      <Link to={{ pathname: '/pages' }}>Back</Link>
    </article>
  )
}

ShowPage.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired
}

export default ShowPage
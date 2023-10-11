import React from 'react'

const ResourceListItem = ({resource}) => {
  return (
    <div>
        <p>{resource.title}</p>
        <p>{resource.description}</p>
    </div>
  )
}

export default ResourceListItem
import React from 'react'
import ResourceListItem from './ResourceListItem'

const ResourceList = ({data}) => {

  const resourceListItems = data.map((resource, index) => {
    return <ResourceListItem resource={resource} key={index}/>
  })

  return (
    <div>
      <ul>
      {resourceListItems}
      </ul>
    </div>
  )
}

export default ResourceList
import React from 'react'
import ResourceListItem from './ResourceListItem'

const ResourceList = ({data}) => {

  const resourceListItems = data.map((resource, index) => {
    return <ResourceListItem resource={resource} key={index}/>
  })

  return (
    <div className='p-2 md:p-10'>
      <ul>
      {resourceListItems}
      </ul>
    </div>
  )
}

export default ResourceList
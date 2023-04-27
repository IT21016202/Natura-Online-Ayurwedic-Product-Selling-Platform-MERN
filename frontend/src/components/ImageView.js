import React from 'react'

export const ImageView = ({image}) => {
  return (
    <div>
        {image && (<img src={`http://localhost:8002/public/uploads${image}`}/>)}
    </div>
  ) 
}

export default ImageView

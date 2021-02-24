import React from "react"

const Image = ({ src, title }) => (
  <div className='block my-8 text-center'>
    <img src={src} alt={title} className='mx-auto mb-4' />
    <small className="block mt-2 text-center">
      {title}
    </small>
  </div >

)

export default Image

import React from 'react'
import { useParams } from 'react-router-dom'

const ProductDetailPage = () => {
    const {uid} = useParams()
  return (
    <div>
        <h1>product detial page</h1>
        <h1>{uid}</h1>
    </div>
  )
}

export default ProductDetailPage;
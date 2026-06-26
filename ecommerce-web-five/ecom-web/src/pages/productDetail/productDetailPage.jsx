// import React from 'react'
// import { useParams,useNavigate } from 'react-router-dom'
// import allProduct from '../../webData/webData'

// const ProductDetailPage = () => {
//     const navigation = useNavigate()
//     const {uid} = useParams()
//     //required product geting
//     let requiredProduct = allProduct?.find((item)=>{
//         return(item.id == uid)
//     })
//     console.log(requiredProduct)
//   return (
//     <div>
//         <h1>product detial page</h1>
//         <h1>{uid}</h1>
//         <div>
//             <div>
//                 <img src={requiredProduct.image} alt="" />
//             </div>
//             <p> Catagory : {requiredProduct.category}</p>
//             <p> Brand : {requiredProduct.brand}</p>
//             <p>Lens : {requiredProduct.lens}</p>
//             <p>Resolution : {requiredProduct.resolution}</p>
//             <p>Price : {requiredProduct.price}</p>
//             <p>Rating : {requiredProduct.rating}</p>
//             <p>Title : {requiredProduct.title}</p>
//             <p>Type : {requiredProduct.type}</p>
//             <button onClick={()=>navigation('/')}>Go Home</button><br/>
//             <button>Add to Cart</button>
//         </div>
//     </div>
//   )
// }

// export default ProductDetailPage;


import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import allProduct from '../../webData/webData'
import './ProductDetailPage.css'

const ProductDetailPage = () => {
    const navigation = useNavigate()
    const { uid } = useParams()

    // required product geting
    let requiredProduct = allProduct?.find((item) => {
        return (item.id == uid)
    })
    console.log(requiredProduct)

    // safety check — agar product na mile (galat id), crash na ho
    if (!requiredProduct) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <button onClick={() => navigation('/')}>Go Home</button>
            </div>
        )
    }

    return (
        <div className="product-detail-page">
            <div className="product-detail-container">

                {/* Image section */}
                <div className="product-detail-img-wrapper">
                    <img src={requiredProduct.image} alt={requiredProduct.title} className="product-detail-img" />
                </div>

                {/* Info section */}
                <div className="product-detail-info">
                    <span className="product-detail-category">{requiredProduct.category}</span>
                    <h1 className="product-detail-title">{requiredProduct.title}</h1>
                    <p className="product-detail-brand">By {requiredProduct.brand}</p>

                    <div className="product-detail-rating">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-value">{requiredProduct.rating}</span>
                    </div>

                    <div className="product-detail-price">
                        Rs. {requiredProduct.price}
                    </div>

                    <div className="product-detail-specs">
                        <div className="spec-row">
                            <span className="spec-label">Type</span>
                            <span className="spec-value">{requiredProduct.type}</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">Lens</span>
                            <span className="spec-value">{requiredProduct.lens}</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">Resolution</span>
                            <span className="spec-value">{requiredProduct.resolution}</span>
                        </div>
                    </div>

                    <div className="product-detail-actions">
                        <button className="add-to-cart-btn">Add to Cart</button>
                        <button className="go-home-btn" onClick={() => navigation('/')}>
                            Go Home
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetailPage;
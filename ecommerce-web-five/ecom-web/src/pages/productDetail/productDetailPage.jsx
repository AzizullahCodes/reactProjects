import { React, useContext} from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import allProduct from '../../webData/webData'
import cartContext from '../../context/cartContext/cartContext'
import './ProductDetailPage.css'

const ProductDetailPage = () => {
    const navigation = useNavigate()
    const { uid } = useParams()
    const {cartFun} = useContext(cartContext)

    let requiredProduct = allProduct?.find((item) => {
        return (item.id == uid)
    })
    // console.log(requiredProduct)

    if (!requiredProduct) {
        return (
            <div className="product-not-found">
                <h2>Product not found</h2>
                <button onClick={() => navigation('/')}>Go Home</button>
            </div>
        )
    }
// console.log(requiredProduct)
    return (
        <div className="product-detail-page">
            <div className="product-detail-container">

                <div className="product-detail-img-wrapper">
                    <img src={requiredProduct.image} alt={requiredProduct.title} className="product-detail-img" />
                </div>

                <div className="product-detail-info">
                    <span className="product-detail-category">{requiredProduct.category}</span>
                    <h1 className="product-detail-title">{requiredProduct.title}</h1>
                    <p className="product-detail-brand">By {requiredProduct.brand}</p>

                    <div className="product-detail-rating">
                        <span className="stars">★★★★☆</span>
                        <span className="rating-value">{requiredProduct.rating || "N/A"}</span>
                    </div>

                    <div className="product-detail-price">
                        Rs. {requiredProduct.price}
                    </div>

                    <div className="product-detail-specs">
                        <div className="spec-row">
                            <span className="spec-label">Type</span>
                            <span className="spec-value">{requiredProduct.type || "N/A"}</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">Lens</span>
                            <span className="spec-value">{requiredProduct.lens || "N/A"}</span>
                        </div>
                        <div className="spec-row">
                            <span className="spec-label">Resolution</span>
                            <span className="spec-value">{requiredProduct.resolution || "N/A"}</span>
                        </div>
                    </div>

                    <div className="product-detail-actions">
                        <button className="add-to-cart-btn" onClick={()=>cartFun(requiredProduct)}>Add to Cart</button>
                        <button className="go-home-btn" onClick={() => navigation('/')}>
                            Continue Shopping
                        </button>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ProductDetailPage;
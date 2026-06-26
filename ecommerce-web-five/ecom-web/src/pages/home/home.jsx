import React, { useEffect, useState, useContext } from "react";
import mobileImage from './images/mobileImage.jfif';
import laptopImage from './images/laptopImage.jfif';
import smartwatchImage from './images/smartwatchImage.jfif';
import cameraImage from './images/cameraImage.jfif';
import keyboardImage from './images/keyboardImage.jfif';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import allProduct from "../../webData/webData";
import { useNavigate } from "react-router-dom";
import './Home.css';
import SearchContext from "../../context/searchContext/searchContext";


const Home = () => {
    const [data, setData] = useState(allProduct);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);
    const navigate = useNavigate();

    useEffect(() => {
        if (!searchTerm) {
            setData(allProduct);
            return;
        }

        const filtered = allProduct.filter((item) =>
            item.category.toLowerCase().includes(searchTerm.toLowerCase())
        );

        setData(filtered);
        if(filtered.length == 0){
           let filt =  setTimeout(() => {
                setSearchTerm('')
                
            }, 3000);
            //clear interval 
            return ()=> clearTimeout(filt)
        }
    }, [searchTerm]);
//viewUser Handler function
const viewUserHandler = (requiredItem)=>{
    console.log(requiredItem)
    navigate(`/productDetailPage/${requiredItem.id}`)

}
    return (
        <>
           {
            !searchTerm && ( <MDBCarousel showControls className="home-carousel">
                <MDBCarouselItem itemId={1}>
                    <img src={laptopImage} className='d-block w-100' alt='laptop banner' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={2}>
                    <img src={mobileImage} className='d-block w-100' alt='mobile banner' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={3}>
                    <img src={smartwatchImage} className='d-block w-100' alt='smartwatch banner' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={4}>
                    <img src={keyboardImage} className='d-block w-100' alt='keyboard banner' />
                </MDBCarouselItem>
                <MDBCarouselItem itemId={5}>
                    <img src={cameraImage} className='d-block w-100' alt='camera banner' />
                </MDBCarouselItem>
            </MDBCarousel>)
           }

            <div className="home-container">
                <h2 className="section-title">Trending Products</h2>

                {data?.length > 0 ? (
                    <div className="product-grid">
                        {data.map((item, index) => (
                            <div className="product-card" key={item.id || index}>
                                {item.discount && (
                                    <span className="product-badge">-{item.discount}%</span>
                                )}

                                <div className="product-img-wrapper">
                                    <img src={item.image} alt={item.title} className="product-img" />
                                </div>

                                <div className="product-info">
                                    <span className="product-category">{item.category}</span>
                                    <h3 className="product-title">{item.title}</h3>
                                    <p className="product-brand">By {item.brand}</p>

                                    <div className="product-rating">
                                        <span className="stars">★★★★☆</span>
                                        <span className="rating-count">(120)</span>
                                    </div>

                                    <div className="product-price-row">
                                        <span className="product-price">
                                            Rs. {item.price ? item.price : "N/A"}
                                        </span>
                                        {item.oldPrice && (
                                            <span className="product-old-price">
                                                Rs. {item.oldPrice}
                                            </span>
                                        )}
                                    </div>

                                    <button className="view-detail-btn" onClick={()=>viewUserHandler(item)}>View Detail</button>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="no-results-wrapper">
                        <div className="no-results">
                            <div className="no-results-icon">
                                <svg width="80" height="80" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                    <circle cx="11" cy="11" r="7" />
                                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                                    <line x1="8.5" y1="8.5" x2="13.5" y2="13.5" />
                                    <line x1="13.5" y1="8.5" x2="8.5" y2="13.5" />
                                </svg>
                            </div>
                            <h3 className="no-results-title">
                                No products found for "<span className="search-term">{searchTerm}</span>"
                            </h3>
                            <p className="no-results-hint">
                                Try checking your spelling, or search with a different keyword.
                            </p>
                            <button className="no-results-clear-btn" onClick={() => setSearchTerm("")}>
                                Clear Search
                            </button>
                        </div>
                    </div>
                )}
            </div>
        </>
    );
};

export default Home;
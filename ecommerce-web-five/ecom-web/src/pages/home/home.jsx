import React, { useEffect, useState, useContext } from "react";
import mobileImage from './images/mobileImage.jfif';
import laptopImage from './images/laptopImage.jfif';
import smartwatchImage from './images/smartwatchImage.jfif';
import cameraImage from './images/cameraImage.jfif';
import keyboardImage from './images/keyboardImage.jfif';
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
import allProduct from "../../webData/webData";
import './Home.css';
import SearchContext from "../../context/searchContext/searchContext";

const Home = () => {
    const [data, setData] = useState(allProduct);
    const { searchTerm, setSearchTerm } = useContext(SearchContext);

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
                
            }, 2000);
            //clear interval 
            return ()=> clearTimeout(filt)
        }
    }, [searchTerm]);

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

                <div className="product-grid">
                    {data?.length > 0 ? (
                        data.map((item, index) => (
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

                                    <button className="view-detail-btn">View Detail</button>
                                </div>
                            </div>
                        ))
                    ) : (
                        <div className="no-results">
                            <h3 className="no-results-title">
                                No products found for "{searchTerm}"
                            </h3>
                            <p className="no-results-hint">
                                Try checking your spelling, or search with a different keyword.
                            </p>
                           
                        </div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Home;
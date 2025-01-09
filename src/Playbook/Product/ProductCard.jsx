import React from 'react';
import ProductHeader from './ProductHeader';
import HoverGifImage from './HoverGifImage';
import DesignDetail from "./DesignDetail";
import "./ProductCard.css";

function ProductCard(props) {
    const { product, index } = props

    return (
        <div className='product-card'>
            <div className='product-content'>
            
                {/* Product Intro */}
                <div id={product.id} className="product-intro">
                    <ProductHeader
                        logo={product.logo}
                        name={product.name}
                        index={index}
                    />

                    {/* Loop through intro section */}
                    {product.introduction?.map(introSection => (
                        <div className="intro-section">
                            <div className='l1' style={{color: "#40483E"}}>{introSection.label}</div>
                            <div className='content'>{introSection.content}</div>
                        </div>
                    ))}
                </div>

                {/* Loop through the themes */}
                {product.themes?.map((theme) => (
                    <div key={theme.id} id={theme.id} className='product-intro'>

                        <div className='intro-section'>
                            <div className='theme-header'>
                                <img src="/playbook/Theme-Bullet-Active.svg" alt="bullet" width="24px" height="auto" />
                                <div className='h3'> {theme.title} </div>
                            </div>
                            {theme.content?.map(paragraph => (
                                <div className='content'> {paragraph} </div>
                            ))}
                        </div>

                        {/* Loop through the examples */}
                        {theme.examples?.map((example, index) => (
                            <div className='intro-section'>
                                <div className='l1' style={{color: "#40483E"}}> Example {example.letter} </div>
                                <div className='content'><b>{example.title}</b></div>
                                {example.content?.map(paragraph => (
                                    <div className='content'> {paragraph} </div>
                                ))}
                                {example.image?.type == "static" ?
                                    <DesignDetail
                                        image1={example.image.before}
                                        image2={example.image.after}
                                    />
                                : example.image?.type == "gif" ?
                                    <HoverGifImage
                                        staticImage={example.image.before}
                                        gifImage={example.image.after}
                                    />
                                : null}
                            </div>
                        ))}
                    </div>
                ))}

            </div>
        </div>        
    )
}

export default ProductCard
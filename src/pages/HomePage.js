import React from 'react';
import { Link } from 'react-router-dom';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'

function HomePage() {
        const slideImages = [
            {
            url: 'images/PartnerLife.jpg',
            caption: '舊鞋救命'
            },
            {
            url: 'images/PartnerCZ.png',
            caption: '慈濟'
            },
            {
            url: 'images/PartnerWorld.jpg',
            caption: '世界展望會'
            }
        ];
        return (
                <div className="HomePage">
                    <div className="slide-container">
                    <Slide>
                        {slideImages.map((slideImage, index)=> (
                            <div className="each-slide" key={index}>
                            <div style={{'backgroundImage': `url(${slideImage.url})`}}>
                                <span>{slideImage.caption}</span>
                            </div>
                            </div>
                        ))} 
                    </Slide>
                    </div>
                    <div className='block1' img src="sizePrice.png">
                        <Link to="/HomePage">關於我們</Link>
                    </div>
                    
                    <div className='block2' img src="form.jpg">
                        <Link to="/Form">衣物寄回</Link>
                    </div>

                    <div className='block3' >
                        <Link to="/Products" img src="show1.jpg">商品瀏覽</Link>
                    </div>
                    
                </div>
            )
        };
export default HomePage;
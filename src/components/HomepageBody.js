/** @jsx jsx */
import React, { memo }from 'react'
import { css, jsx } from '@emotion/core'
import FirstImage from '../img/ComponentTMP_0-image3.png'
import SecondImage from '../img/ComponentTMP_0-image4.png'
import ThirdImage from '../img/ComponentTMP_0-image5.png'
import FourthImage from '../img/ComponentTMP_0-image6.png'
import Facebook from '../img/facebook.png'
import Linkedin from '../img/linkedin.png'
import Twitter from '../img/twitter.png'
import Logo from '../img/ComponentTMP_0-image13.png'
import Slider from './CommentSlider'
import images from '../images';
import FeaturedProducts from './FeaturedProducts';
import firstPic from '../img/ComponentTMP_0-image7.jpg'
import secondPic from '../img/ComponentTMP_0-image8.jpg'
import imageIcon from '../img/image.png'



function HomepageBody() {


  return (
    <div>
        <div
            css={css`
            margin: 10px;
            text-align: center;
          `}
        ><span
            css={css`
            color: #0097f4;
            font-weight: bold;
          `}
        >A customer?</span> find merchants and products</div>
        <div
            css={css`
            display: flex;
            align-items: center;
            margin-left: auto;
            margin-right: auto;
            width: 50%;
          `}
        >
            <input
              css={css`
                border-radius: 10px;
                margin-right: 5px;
                height: 35px;
                width: 300px;
                border-style: solid;
                border-color: #A9A9A9;
                border-width: 0.5px;
              `}
            />
            {/* <input
              css={css`
                border-radius: 10px;
                margin-right: 10px;
                width: 120px;
                height: 35px;
                border-style: solid;
                border-color: #A9A9A9;
                border-width: 0.5px;
              `}
            /> */}
            <select
               css={css`
                border-radius: 10px;
                margin-right: 5px;
                width: 120px;
                height: 37px;
                border-style: solid;
                border-color: #A9A9A9;
                border-width: 0.5px;
              `} 
             name='category'>
                <option value='' disabled selected>Category</option>
                <option value='fashion'>Fashion</option>
                <option value='lifestyle'>Life Style</option>
                <option value='comedy'>Comedy</option>
            </select>
            <button
              css={css`
                border-radius: 10px;
                width: 120px;
                height: 40px;
                border-style: none;
                background-color: #0097f4;
                color: #ffffff;
                font-weight: bold;
              `}
            >Search</button>
        </div>
        <div
         css={css`
            display: flex;
        `}
        >
            <div
             css={css`
                height: 500px;
                width: 550px; 
            `}
            >
                <img
                css={css`
                    height: 450px;
                    width: 220px; 
                    padding-left: 200px;
                    padding-top: 50px;
                `}
                src={FirstImage}></img>
            </div>
            <div
                css={css`
                font-family: ArialMT, Arial;
            `}
            >
                <div
                    css={css`
                    font-size: 50px;
                    font-weight: bold;
                    margin-top: 100px;
                    color: #0097f4;
                `}
                >Your E-commerce store<br/>for business</div>
                <div
                     css={css`
                     font-size: 16px;
                     margin-top: 10px;
                     
                     line-height: 16pt;
                 `}
                >Now customers and fans could find you easily online, make transactions<br/>and view products or contents on your Shodrex store.</div>
                <button
                    css={css`
                        border-radius: 25px;
                        width: 200px;
                        height: 50px;
                        border-style: none;
                        background-color: #0097f4;
                        color: #ffffff;
                        font-weight: bold;
                        margin-top: 40px;
                    `}
                >Learn more</button>
            </div>
        </div>
        <div
         css={css`
            display: flex;
            margin-top: 10px;
            background-color: #f8f8f8;
            padding-left: 100px;
        `}
        >
            <div
                css={css`
                font-family: ArialMT, Arial;
            `}
            >
                <div
                    css={css`
                    font-size: 50px;
                    font-weight: bold;
                    margin-top: 100px;
                    color: #0097f4;
                `}
                >Manage your business<br/>anywhere
                </div>
                <div
                     css={css`
                     font-size: 16px;
                     margin-top: 10px;
                     
                     line-height: 16pt;
                 `}
                >You can manage your business anywhere anytime with<br/>just your mobile device or computer.</div>
                <button
                    css={css`
                        border-radius: 25px;
                        width: 200px;
                        height: 50px;
                        border-style: none;
                        background-color: #0097f4;
                        color: #ffffff;
                        font-weight: bold;
                        margin-top: 40px;
                    `}
                >Learn more</button>
            </div>
            <div
             css={css`
                height: 500px;
                width: 550px;
                background-color: 
            `}
            >
                <img
                    css={css`
                    height: 300px;
                    width: 450px; 
                    padding-left: 100px;
                    padding-top: 70px;
                `}
                src={SecondImage}
                ></img>
            </div>
        </div>
        <div
         css={css`
            display: flex;
            margin-top: 10px;
            padding-left: 80px;
        `}
        >
            <div
             css={css`
                height: 500px;
                width: 550px;
                background-color: 
            `}
            >
                <img
                    css={css`
                    height: 450px;
                    width: 220px; 
                    padding-left: 100px;
                    padding-top: 50px;
                `}
                src={ThirdImage}
                ></img>
            </div>
            <div
                css={css`
                font-family: ArialMT, Arial;
            `}
            >
                <div
                    css={css`
                    font-size: 50px;
                    font-weight: bold;
                    margin-top: 100px;
                    color: #0097f4;
                `}
                >Keep Inventory of orders<br/>and items
                </div>
                <div
                     css={css`
                     font-size: 16px;
                     margin-top: 10px;
                     
                     line-height: 16pt;
                 `}
                >You can manage, upload listings and keep track of payments and<br/>orders from customers anywhere anytime.</div>
                <button
                    css={css`
                        border-radius: 25px;
                        width: 200px;
                        height: 50px;
                        border-style: none;
                        background-color: #0097f4;
                        color: #ffffff;
                        font-weight: bold;
                        margin-top: 40px;
                    `}
                >Learn more</button>
            </div>
            
        </div>
        <div
         css={css`
            display: flex;
            margin-top: 10px;
            background-color: #f8f8f8;
            padding-left: 100px;
        `}
        >
            <div
                css={css`
                font-family: ArialMT, Arial;
            `}
            >
                <div
                    css={css`
                    font-size: 50px;
                    font-weight: bold;
                    margin-top: 100px;
                    color: #0097f4;
                `}
                >Send and receive payments<br/>securely
                </div>
                <div
                     css={css`
                     font-size: 16px;
                     margin-top: 10px;
                     
                     line-height: 16pt;
                 `}
                >Customers can now make transactions at ease whenever they<br/>shop online.</div>
                <button
                    css={css`
                        border-radius: 25px;
                        width: 200px;
                        height: 50px;
                        border-style: none;
                        background-color: #0097f4;
                        color: #ffffff;
                        font-weight: bold;
                        margin-top: 40px;
                    `}
                >Learn more</button>
            </div>
            <div
             css={css`
                height: 500px;
                width: 550px;
                background-color: 
            `}
            >
                <img
                    css={css`
                    height: 450px;
                    width: 240px; 
                    padding-left: 200px;
                    padding-top: 50px;
                `}
                src={FourthImage}
                ></img>
            </div>
        </div>
        <div
            css={css`
            height: 500px;
            font-family: ArialMT, Arial;
        `}
        >
            <div
                css={css`
                color: #0097f4;
                font-size: 42px;
                font-weight: bold;
                padding-top: 100px;
                margin-left: 100px;
            `}
            >
                Featured
            </div>
            <div
                css={
                    css`
                        display: flex;
                        margin-left: 120px;
                    `
                }
            >
                {FeaturedProducts.map((product)=>{
                    return(
                       <div
                        css={
                            css`
                                height: 185px;

                                margin-right: 20px;
                                margin-top: 20px;
                                font-size: 13px;
                                border: 1px solid rgba(34,36,38,.15);
                                box-shadow: 0 2px 3px 0 rgb(34 36 38 / 15%);
                            `
                        }
                       >
                            <img
                             css={
                                css`
                                    height: 120px;
                                    width: 155px;
                                `
                             }
                             src={product[0]}
                            ></img>
                            <div
                                css={
                                        css`
                                            margin-left: 10px;
                                        `
                                    }
                            >
                                <div
                                    css={
                                        css`
                                            margin-top: 10px;
                                        `
                                    }
                                >
                                    Blog Title is here
                                </div>
                                <div
                                    css={
                                        css`
                                            margin-top: 10px;
                                            font-weight: bold;
                                            color: #0097f4;
                                        `
                                    }
                                >
                                    {product[1]}
                                </div>
                            </div>
                       </div> 
                    )
                })}
            </div>
        </div>
        <div
         css={css`
            display: flex;
            margin-top: 10px;
            background-color: #f8f8f8;
            padding-left: 150px;
        `}
        >
            <div
                css={css`
                font-family: ArialMT, Arial;
            `}
            >
                <div
                    css={css`
                    font-size: 40px;
                    font-weight: bold;
                    margin-top: 100px;
                    color: #0097f4;
                `}
                >Meet the people behind<br/>our company
                </div>
                <div
                    css={css`
                   margin-top: 15px ;
                   line-height: 18pt;
                `}
                
                >
                 We are passionate veterans driven by care to meet people's needs<br/>and solve challenging problems in society to help build a better and<br/>safer community with lasting solutions.
                </div>
            </div>
            <div
             css={css`
                height: 500px;
                width: 700px;
                background-color: 
                margin-top: 80px;
            `}
            >
             <div
                css={css`
                    margin-top: 80px;
                    margin-left: 100px;
                    font-weight: bold;
                    font-family: ArialMT, Arial;
                    font-size: 14px; 
                `}
             >
              <div
                css={css`
                display: flex; 
                margin-bottom: 40px;
                `}
              >
                <div
                css={
                        css`
                        margin-right: 20px;
                        width: 180px;
                        `
                    }
                >
                    <img
                    css={
                        css`
                            height: 120px;
                            width: 120px;
                        `
                    }
                     src={imageIcon}
                    >
                    </img>
                    <div
                    css={
                        css`
                        margin-left: 20px;
                        margin-top: 20px;
                        `
                    }
                    >
                        Eva Benson
                    </div> 
                </div>
                <div
                    css={
                        css`
                        margin-right: 20px;
                        width: 180px;
                        `
                    }
                >
                    <img
                    css={
                        css`
                            height: 120px;
                            width: 120px;
                        `
                    }
                     src={imageIcon}
                    >
                    </img>
                    <div
                        css={
                        css`
                        margin-top: 20px;
                        margin-left: 20px;
                        `
                    }
                    >
                        Mike Lowry
                    </div>
                </div>
                <div
                    css={
                        css`
                        margin-right: 20px;
                        width: 180px;
                        `
                    }
                >
                    <img
                    css={
                        css`
                            height: 120px;
                            width: 120px;
                        `
                    }
                     src={imageIcon}
                    >
                    </img>
                    <div
                        css={
                        css`
                        margin-top: 20px;
                        margin-left: 20px;
                        `
                    }
                    >
                        Eva Benson
                    </div>
                </div>
              </div>
              <div
                css={css`
                display: flex; 
                `}
              >
                <div
                    css={
                        css`
                        margin-right: 20px;
                        width: 180px;
                        `
                    }
                >
                    <img
                    css={
                        css`
                            height: 120px;
                            width: 120px;
                        `
                    }
                     src={imageIcon}
                    >
                    </img>
                    <div
                        css={
                        css`
                        margin-top: 20px;
                        margin-left: 20px;
                        `
                    }
                    >
                        Mike Lowry
                    </div>
                </div>
                <div
                    css={
                        css`
                        margin-right: 20px;
                        width: 180px;
                        `
                    }
                >
                    <img
                    css={
                        css`
                            height: 120px;
                            width: 120px;
                        `
                    }
                     src={imageIcon}
                    >
                    </img>
                    <div
                        css={
                        css`
                        margin-top: 20px;
                        margin-left: 20px;
                        `
                    }
                    >
                        Eva Benson
                    </div>
                </div>
                <div
                    css={
                        css`
                        margin-right: 20px;
                        width: 180px;
                        `
                    }
                >
                    <img
                    css={
                        css`
                            height: 120px;
                            width: 120px;
                        `
                    }
                     src={imageIcon}
                    >
                    </img>
                    <div
                        css={
                        css`
                        margin-top: 20px;
                        margin-left: 20px;
                        `
                    }
                    >
                        Mike Lowry
                    </div>
                </div>
              </div>
              </div>    
            </div>
        </div>
        <div
         css={css`
            display: flex;
            margin-top: 10px;
            padding-left: 200px;
        `}
        >
            <div
                css={css`
                font-family: ArialMT, Arial;
            `}
            >
                <div
                    css={css`
                    font-size: 25px;
                    font-weight: bold;
                    margin-top: 150px;
                    width: 220px;
                `}
                >What our<br/>Customers Say
                </div>
                <div
                     css={css`
                     font-size: 16px;
                     margin-top: 10px;
                     
                     line-height: 16pt;
                 `}
                >FIll when ready</div>
            </div>
            <div
             css={css`
                height: 500px;
                width: 900px;
            `}
            >
              <Slider slides={images} autoPlay={3}/>  
            </div>
        </div>
        <div
         css={css`
            margin-top: 10px;
            background-color: #f8f8f8;
            padding-left: 80px;
            
        `}
        >
            <div
                css={css`
                font-family: ArialMT, Arial;
                display: flex;
                font-size: 11px;
                margin-left: 120px;
            `}
            >
                
                <div
                    css={css`
                    margin-top: 30px;
                    width: 300px;
                `}
                
                >
                    <div>
                        <img
                                css={css`
                                    height: 30px;
                                    margin-top: 12px;
                                `}
                                src={Logo}/>
                    </div>
                    <h2
                        css={css`
                        margin-top: 45px;
                    `}
                    >
                        Category
                    </h2>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                    <div
                    css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                </div>
                <div
                    css={css`
                    margin-top: 30px;
                    width: 300px;
                `}
                >
                    <h2
                        css={css`
                        margin-top: 90px;
                    `}
                    >
                        Category
                    </h2>
                    <div
                    css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Link
                    </div>
                </div>
                <div
                    css={css`
                    margin-top: 30px;
                `}
                >
                    <h3
                    css={css`
                        margin-top: 90px;
                    `}
                    >
                        Subscribe to Our Newsletter
                    </h3>
                    <div
                        css={css`
                        margin-top: 50px;
                    `}
                    >
                        Subscribe To Newsletter To Stay Up To Date On<br/>Our Latest News
                    </div>
                    <div
                        css={css`
                        margin-top: 50px;
                        display: flex;
                    `}
                    >
                        <input 
                            css={css`
                                height: 50px;
                                width: 300px;
                                padding-left: 20px;
                                border-color: #D3D3D3;
                                border-style: solid;
                                border-radius: 8px;
                                font-size: 12px;
                            `}
                            placeholder='Email'
                        />
                        <button
                             css={css`
                             height: 55px;
                             width: 150px;
                             border-style: none;
                             border-radius: 8px;
                             margin-left: 3px;
                             color: #ffffff;
                             background-color: #2e4cff;
                         `}
                        >Subscribe</button>
                    </div>
                </div>   
            </div>
              <div
                css={
                    css`
                        margin-top: 80px;
                        padding-bottom: 100px;
                        display: flex;
                        width: 100%;
                    ` 
                }
              >
                <div
                    css={
                        css`
                            margin-left: 105px;
                            font-size: 11px;
                            width: 620px;
                        ` 
                    }
                >
                    Copyright 2021 - All Rights Reserved
                </div>
                <div
                    css={
                        css`
                            float: right;
                            display: flex;
                            margin-top: -5px;
                        ` 
                    }
                >
                    <img 
                        css={
                            css`
                                height: 30px;
                                width: 30px;
                                float: right;
                                margin-right: 20px;
                            ` 
                        }
                        src={Linkedin}
                    ></img>
                    <img 
                        css={
                            css`
                                height: 30px;
                                width: 30px;
                                float: right;
                                margin-right: 20px;
                            ` 
                        }
                        src={Twitter}
                    ></img>
                    <img 
                        css={
                            css`
                                height: 28px;
                                width: 28px;
                                float: right;
                                margin-right: 20px;
                            ` 
                        }
                        src={Facebook}
                    ></img>
                </div>
              </div>
        </div>
    </div>
  );
}


export default HomepageBody



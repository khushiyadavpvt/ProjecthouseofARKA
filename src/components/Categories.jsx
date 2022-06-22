
import styled from 'styled-components'
import CategoryItem from "./CategoryItem";
import {categories} from "../data";
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrowC, PrevArrowC } from "./SliderArrows";

const Container=styled.div`
display: flex;
padding: 50px;
margin-top:60px;
justify-content:space-between;
align-items:center;
box-shadow: rgba(0, 0, 0, 0.15) 0px 5px 15px 0px;

`
const Title = styled.h2`

font-size:40px;
margin-top:100px;
text-align:center;
color:#792823;
position:relative;
    &::before{
        content:'';
        width:40px;
        height:5px;
        background-color:#792823;
        position:absolute;
        left:36.5%;
        bottom:0;
        top:0;
        margin:auto;
    }

    &::after{
        content:'';
        width:40px;
        height:5px;
        background-color:#792823;
        position:absolute;
        right:36.5%;
        bottom:0;
        top:0;
        margin:auto;
    }

`
;

const Wrapper = styled.div` 

display:flex;
padding: 0 15px;
`
const Categories = () => {

    const settings = {
        dots: false,
        arrows: true,
        infinite: true,
        autoplay:false,
        speed: 1000,
        slidesToShow: 3,
        centerMode: true,
        slidesToScroll: 1,
        nextArrow: <NextArrowC />,
        prevArrow: <PrevArrowC />
      };
    return (
<>
        <Title>Our Collection</Title>


        <HeroSlider {...settings}>
      

            
            {categories.map((item)=>(

                <Wrapper>

                <CategoryItem item={item} key={item.id}/>

                </Wrapper>
                
            ))}

            

            </HeroSlider>
        </>
         );
            } ;

export default Categories

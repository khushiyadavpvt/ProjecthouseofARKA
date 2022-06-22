// import { ArrowLeftOutlined, ArrowRightOutlined } from "@material-ui/icons"
import styled from "styled-components"
// import {useState}from "react"
import HeroSlider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from "./SliderArrows";


const Container=styled.div`
width:100%;
height:100vh;
display: flex;
position: relative;
overflow:hidden;
`
const Arrow=styled.div`
width:50px;
height:50px;
background-color: white;
border-radius: 50%;
display: flex;
align-items: center;
justify-content: center;
position:absolute;
left: ${(props) => props.direction === "left" && "10px"};
right: ${(props) => props.direction === "right" && "10px"};
cursor: pointer;
opacity:0.5;
top:0;
bottom: 0;
margin: auto;
z-index:2 ;
`


const Wrapper=styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.slideIndex * -100}vw);

margin-top:40px;
`

const Slide=styled.div`
display: flex;
align-items: center;
width:100vw;
height:60vh;
background: white;
/* background-color:#${props=>props.bg}; */
padding:50px 20px;
margin-bottom:40px;
box-shadow: rgba(0, 0, 0, 0.15) 0px 3px 3px 0px;
`;


const ImgContainer=styled.div`
flex:0.5;
height:100%;
margin: 30px;

padding:50px 0 50px 50px;

`

const Image=styled.img`
height:100%;
box-shadow: rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;
`

const InfoContainer =styled.div`
flex:1;
padding: 30px;

`

const Title =styled.h1`
font-size: 60px;


`
const Desc=styled.p`
margin:50px 0px;
font-size: 25px;
font-weight:500;
letter-spacing: 20px;
width:95%;

`
const Button=styled.button`
padding: 12px;
font-size: 18px;
background-color: transparent;
cursor: pointer;
border:none;
background-color:teal;
border-radius:5px;
color:white;
position: relative;
left:30%;
`

const silderImages = [
    {
        id: 1,
       src:"https://images.unsplash.com/photo-1617038220319-276d3cfab638?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=987&q=80",
      title:"Summer Collection",
        desc: "dont compromise on style! get flat 20 % off.",
        button: "Shop Now"
},
{
    id: 2,
   title:"Lovers Collection",
   src:"https://images.unsplash.com/photo-1596942515068-0daf9cc4fcac?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8amV3ZWxsZXJ5fGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    desc: "dont compromise on style! get flat 20 % off.",
    button: "Shop Now"
},
{
    id: 3,
   title:"Birthday Collection",
   src:"https://images.unsplash.com/photo-1607703829739-c05b7beddf60?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzB8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    desc: "dont compromise on style! get flat 20 % off.",
    button: "Shop Now"
},
{
    id: 4,
   title:"Spring Collection",
   src:"https://images.unsplash.com/photo-1611583027838-515a1087afdb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDF8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    desc: "dont compromise on style! get flat 20 % off.",
    button: "Shop Now"
},
{
    id: 5,
   title:"Wedding Collection",
   src:"https://images.unsplash.com/photo-1631341183338-0b6f5f9d0d99?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjV8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    desc: "dont compromise on style! get flat 20 % off.",
    button: "Shop Now"
},
{
    id: 6,
   title:"Anniversay Collection",
   src:"https://images.unsplash.com/flagged/photo-1551854716-8b811be39e7e?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGpld2VsbGVyeXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=60",
    desc: "dont compromise on style! get flat 20 % off.",
    button: "Shop Now"
},
]



const Slider = () => {
    // const [slideIndex, setSlideIndex]=useState(0);
    // const handleClick=(direction)=>{
    //     if(direction === "left"){
    //         setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 5);
    //     } else {
    //         setSlideIndex(slideIndex < 5 ? slideIndex + 1 : 0);
    //     }

    // };

    const settings = {
        dots: true,
        arrows: true,
        infinite: true,
        autoplay:true,
        speed: 1800,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <NextArrow />,
        prevArrow: <PrevArrow />
      };
    return (
//         <Container>
//             <Arrow direction="left" onClick={()=> handleClick("left")}>
//              <ArrowLeftOutlined/>
//             </Arrow>
//             <Wrapper slideIndex={slideIndex}>
//             {silderImages.map((item) =>(

//                 <Slide key={item.id}>
                
//                 <ImgContainer>
//                 <Image src={item.src} alt={item.title} />
//                 </ImgContainer>
//                 <InfoContainer>
//                     <Title>{item.title}</Title>
//                     <Desc>{item.desc}</Desc>
//                     <Button>{item.button}</Button>
//                 </InfoContainer>

// </Slide>

//             ))}
  
//             </Wrapper>

//             <Arrow direction="right" onClick={()=> handleClick("right")}>
//              <ArrowRightOutlined/>
//             </Arrow>

//         </Container>
            <HeroSlider {...settings}>
          
                {silderImages.map((item) =>(
                    <Wrapper>
                 <Slide key={item.id}>
                <ImgContainer>
                 <Image src={item.src} alt={item.title} />
                </ImgContainer>
                 <InfoContainer>
                   <Title>{item.title}</Title>
                    <Desc>{item.desc}</Desc>
                    <Button>{item.button}</Button>
                </InfoContainer>
                
 </Slide>
                </Wrapper>
             ))}
                   
            </HeroSlider>

    )
}

export default Slider

import { Link } from "react-router-dom";
import styled from "styled-components"

const Container=styled.div`
flex:1;
margin: 3px;
height:50vh;
width: 25vw;
position: relative;
cursor:pointer;
`

const Image=styled.img`
width: 95%;
height:80%;
object-fit: cover;
box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;
/* filter:blur(1px) ; */
`;

const Info=styled.div`
position:absolute;
bottom: -35%;

width: 100%;
height: 100%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`;

const Title=styled.h2`

margin-bottom: 20px;
color:#792823;
font-family: 'Port Lligat Sans', sans-serif;
`;

const Button=styled.button`
border:none;
padding: 10px;
background-color: white;
color: gray;
cursor: pointer;
border-radius:3px;
font-weight: 600;
`;


const CategoryItem = ({item}) => {
    return (
        <Container>
        <Link to= {`/products/${item.cat}`} >

            <Image src={item.img}/>
            <Info>
                <Title>{item.title}</Title>
                {/* <Button>SHOP NOW</Button> */}
            </Info>
        </Link>
        </Container>
    )
}

export default CategoryItem

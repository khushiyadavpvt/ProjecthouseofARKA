import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from "@material-ui/icons"
import { Link } from "react-router-dom";
import styled from "styled-components"



const Info=styled.div`
opacity: 0;
width: 100%;
height: 100%;
position:absolute;
top: 0;
left: 0;
background-color:rgba(0,0,0,0.2);
z-index: 3;
display: flex;
align-items: center;
justify-content: center;
transition: all 0.5s ease;
cursor: pointer;
`


const Container=styled.div`
flex:1;
margin: 5px;
min-width:280px;
height: 350px;
align-items: center;
justify-content: center;
display: flex;
background-color:#f5fbfd;
position: relative;
background-color : #F1E4D3;;

&:hover ${Info}{
opacity: 1;
}`;

const Circle=styled.div`
width: 200px;
height: 200px;
border-radius:50%;
background-color:white;
position:absolute;
background-color : #F1E4D3;;
`

const Image=styled.img`
height: 75%;
z-index: 2;
`

const Icon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: white;
display: flex;
align-items: center;
justify-content: center;
margin: 10px;
transition: all 0.5s ease;
 &:hover{
    background-color:#e9f5f5 ;
    transform: scale(1.1);
}
`

export const Product = ({item}) => {
    return (
        <Container>
           <Circle/>
           <Image src={item.image}/>
           <Info>
               <Icon>
                   <ShoppingCartOutlined/>
               </Icon>

               <Link to={`/product/${item._id}`}>
               <Icon>
              
                   <SearchOutlined/>
               </Icon>
               </Link>
               <Icon>
                   <FavoriteBorderOutlined/>
               </Icon>


               </Info> 
        </Container>
    )
}

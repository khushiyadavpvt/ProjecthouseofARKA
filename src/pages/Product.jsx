import {useState , useEffect} from 'react';
import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { Add, Remove } from "@material-ui/icons";
import {useLocation} from "react-router-dom"
// import axios from 'axios';
import {publicReq} from '../axiosRequest'
import {useDispatch} from 'react-redux'
import {addProduct} from '../Redux/CartReducer'
const Container=styled.div`
    
    background-color : #F1E4D3;;
`

const Wrapper=styled.div`
padding: 50px;
display: flex;`

const ImgContainer=styled.div`
flex: 1;
`

const InfoContainer=styled.div`
flex:1;
padding:0px 50px;`

const Image=styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
`

const Title=styled.h1`
font-weight: 200;`

const Desc=styled.p`
margin: 20px 0px ;`

const Price=styled.span`
font-weight: 100;
font-size: 40px;`

const FilterContainer=styled.div`
width: 30%;
margin: 30px 0px;
display: flex;
justify-content: space-between;
`


const FilterTitle=styled.span`
font-size: 20px;
font-weight: 200;
`


const Filter=styled.div`
display: flex;
align-items: center;
`

const AddContainer=styled.div`
display: flex;
align-items: center;
width: 50%;
justify-content: space-between ;
`


const AmountContainer=styled.div`
display: flex;
align-items: center;
font-weight: 700;

`


const Amount=styled.span`
width: 30px;
height: 30px;
border-radius: 10px;
border: 1px solid teal;
display: flex;
align-items: center;
justify-content:center;
margin: 0px 5px;
`



const Button=styled.button`
padding: 15px;
border:2px solid teal;
background-color: #fff;
cursor: pointer;
font-weight: 500;

&:hover{
    background-color: grey;
}
`


const Product = () => {

    const location = useLocation()
    const id = location.pathname.split("/")[2];

    const [product , setProduct] = useState([]);
    
    const [quantity, setQuantity] = useState(1);
    const dispatch = useDispatch();

    useEffect(() =>{

        const get_product = async() =>{
           try {
            const res = await publicReq.get(`/products/find/${id}`);
            setProduct(res.data)
        }
        catch(err){

        }
        }

        get_product();

    })

    const handlequantity = (type) =>{

        if(type === 'inc' ){

            setQuantity(quantity + 1)
        }
        else{
            quantity > 1 && setQuantity(quantity - 1)
        }
    }

    const handleClick = () =>{

        dispatch(addProduct({ ...product , quantity}))

    }

    return (
        <Container>
         <Announcements/>
            <Navbar/>
           
            
                <Wrapper>
                    <ImgContainer>
                    <Image src={product.image} />
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{product.title}</Title>
                        <Desc>{product.description}</Desc>
                        <Price>₹ {product.price}</Price>
                  
                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Type</FilterTitle>
                        </Filter>
                    </FilterContainer>
                    <AddContainer>
                        <AmountContainer>
                            <Remove onClick={() => handlequantity("desc")} />
                            <Amount>{quantity}</Amount>
                            <Add  onClick={() => handlequantity("inc")} />
                                
                        </AmountContainer>
                        <Button onClick = {handleClick}>ADD TO CART</Button>
                    </AddContainer>
                    </InfoContainer>
                </Wrapper>
            <Products/>
           <Newsletter/>
           <Footer/>
        </Container>
    )
}

export default Product

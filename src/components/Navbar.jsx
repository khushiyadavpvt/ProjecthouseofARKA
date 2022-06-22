import { Badge } from '@material-ui/core';
import { Search, ShoppingCartOutlined } from '@material-ui/icons';
import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import {useSelector, useDispatch} from 'react-redux' 


const Container = styled.div`
  height: 60px;

  `
  const Wrapper=styled.div`
     padding: 10px 20px;
     display: flex;
     align-items: center;
     justify-content:space-between ;

     `
     const Left = styled.div`
     flex:1;
     display: flex;
     align-items: center;
     `;


     const Language=styled.span`
     font-size: 14px;
     cursor: pointer;
     color: gray;
     `

     const SearchContainer = styled.div`
     border:1px solid lightgray;
     display: flex;
     align-items: center;
     margin-left:25px;
     padding:5px;
     border:none;
     border-bottom:1px solid lightgray;
     `


     const Input = styled.input`
     border:none;
     background-color : #F1E4D3;;
     Outline:none;
     `
     const Logo = styled.h1`
     font-weight: 700;
     font-family: 'Port Lligat Sans', sans-serif;
     color:#792823;
     font-size:35px;
     cursor: pointer;
   
     `
 const Center = styled.div`
     flex:1;
     text-align:center;
     
     `;


     const Right = styled.div`
     flex:1;
     display: flex;
     align-items: center;
     justify-content: flex-end;
     margin-left: 25px;
     `;

     const MenuItem = styled.div`
     font-size:14px;
     cursor: pointer;
     color: gray;
     margin:0 15px;

     &:hover{
         color:teal;
     }
     `


const Navbar = () => {

    const quantity = useSelector( state => state.cart.quantity)

// console.log(quantity)
    return (
        <Container>
            <Wrapper>
                <Left> 
                    <Language>ENGLISH</Language>
                    <SearchContainer>
                        <Input/>
                        <Search style={{color:"gray",fontSize:18}}/>
                        
                    </SearchContainer>
                </Left>
                <Center><Logo>House Of ARKA</Logo></Center>
                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN IN</MenuItem>
                    <Link to="/cart">
                    <MenuItem>
                    <Badge badgeContent={quantity} color="primary">
                        <ShoppingCartOutlined/>
                    
                    </Badge>
                    </MenuItem>
                    </Link>
                    </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar

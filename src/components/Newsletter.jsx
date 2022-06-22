import { Send } from "@material-ui/icons"
import styled from "styled-components"

const Container=styled.div`
height: 60vh;
background-color:#fcf5f5;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`

const Title=styled.h1`
font-size: 70px;
margin-bottom: 20px;`

const Description=styled.div`
font-size: 25px;
font-weight: 300;
margin-bottom: 20px;`

const InputContainer=styled.div`
width: 50%;
height: 40px;
background-color:white;
display: flex;
align-items: center;
justify-content: space-between;`

const Input=styled.input`
border:none;
flex:8;
padding-left: 20px;
Outline:none;
`

const Button=styled.button`
flex:1;
border:none;
background-color:teal;
color: white;
border-top-right-radius: 5px;
border-bottom-right-radius: 5px;
padding:3px;
cursor:pointer;
`


const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
                <Description>Get timely updates of your favourite products</Description>
                 <InputContainer>
                    <Input placeholder="Your email"/>
                    <Button>
                        <Send style={{marginTop :"5px"}} />
                    </Button>
                    </InputContainer>
                
        </Container>
    )
}

export default Newsletter

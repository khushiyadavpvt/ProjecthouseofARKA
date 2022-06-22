import styled from "styled-components"


const Container=styled.div`
height:30px;
background-color:teal ;
color:white;
display: flex;
align-items: center;
justify-content: center;
font-size: 14px;
font-weight: 500;
box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;
`


const Announcements = () => {
    return (
        <Container>
            Super deal!
        </Container>
    )
}

export default Announcements

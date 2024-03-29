import React from 'react'
import styled from 'styled-components'
import Animateds from './Animateds'


const Container  = styled.div`
height: calc(100vh - 50px);
display: flex;
padding: 20px;
`
const Left  = styled.div`
width: 60%;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`
const Title = styled.h1`
font-size: 60px;
width: 60%;
text-transform: capitalize;
`
const Dis = styled.p`
width: 60%;
font-size: 20px;
margin-top: 12px;
`
const Info = styled.div`
margin-top: 50px;
width: 60%;
display: flex;
justify-content: space-between;
align-items: center;
`

const Button = styled.button`
padding: 15px;
background-color: darkblue;
color: white;
border-radius: 10px;
font-weight: bold;
border: none;
letter-spacing: 2px;
cursor: pointer;
`
const Contact =styled.div`
display: flex;
flex-direction: column;
`
const Phone = styled.span`
color: #f0667d;
font-weight: bold;
`
const Contacttext = styled.span`
color:gray;
margin-top: 5px;
`
const Right  = styled.div`
width: 40%;

`
const Image = styled.img`
width: 100%;
`

function Intro() {
    return (
    <Container>
<Left>
<Title>
    adventure in creative age
</Title>
<Dis>
    we belive that designing products and services in close partnership with our clients is the only way to have a real impact on their bussiness. 
</Dis>
<Info>
<Button> START A PROJECT</Button>
<Contact>
    <Phone> call us on +91 9718720685</Phone>
    <Contacttext> for any question or concern</Contacttext>
</Contact>
</Info>
</Left>
<Right>
<Image  />
    
</Right>
<Animateds></Animateds>





    </Container>
    )
}

export default Intro

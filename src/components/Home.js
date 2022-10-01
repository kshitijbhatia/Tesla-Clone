import React from 'react'
import styled from "styled-components";
import Section from './Section';

function Home() {
  return (
    <Container>
        <Section 
        title= "Model S"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-s.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText= "Existing Inventory"
        />
        <Section 
        title= "Model 3"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-3.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText= "Existing Inventory"
        />
        <Section 
        title= "Model X"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-x.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText= "Existing Inventory"
        />
        <Section 
        title= "Model Y"
        description = "Order Online for touchless Delivery"
        backgroundImg = "model-y.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText= "Existing Inventory"
        />
        <Section 
        title= "Solar Panels"
        description = "Lowest Cost Solar Panels in America"
        backgroundImg = "solar-panel.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText= "Learn More"
        />
        <Section 
        title= "Solar Roof"
        description = "Produce Clean Energy From Your Roof"
        backgroundImg = "solar-roof.jpg"
        LeftBtnText = "Custom Order"
        RightBtnText= "Learn More"
        />
        <Section 
        title= "Accessories"
        description = ""
        backgroundImg = "accessories.jpg"
        LeftBtnText = "Shop Now"
        />

    </Container>
  )
}

export default Home

const Container = styled.div`
    height: 100vh;
    z-index :10;
`
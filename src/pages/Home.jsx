
import React from 'react'
import styled from 'styled-components'
import Announcements from '../components/Announcements'
import Categories from '../components/Categories'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Newsletter from '../components/Newsletter'
import Products from '../components/Products'
import Slider from '../components/Slider'



const HomePage = styled.div`
    
    background-color : #F1E4D3;;
`

const Home = () => {
    return (
        <HomePage>
        <Announcements/>
        <Navbar/>
        <Slider/>
        
        <Categories/>
        <Products/>
        <Newsletter/>
        <Footer/>
        </HomePage>
    )
}

export default Home

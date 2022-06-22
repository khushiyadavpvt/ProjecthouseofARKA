import styled from "styled-components"
import Navbar from "../components/Navbar"
import Announcements from "../components/Announcements"
import Products from "../components/Products"
import Newsletter from "../components/Newsletter"
import Footer from "../components/Footer"
import { useLocation } from "react-router"
import { useState } from "react"


const Container=styled.div`
  background-color : #F1E4D3;;
`

const Title=styled.h1`

margin: 20px;
`

const FilterContainer=styled.div`
display: flex;
justify-content: space-between;
`

const Filter=styled.div`
margin: 20px;

`

const FilterText=styled.span`

font-size: 20px;
font-weight: 600;
margin-right: 20px;

`
const Select=styled.select`
padding: 10px;
margin-right: 20px;
border:none;
background-color:white;
border-radius:2px;
`

const Option=styled.option`

`


const ProductList = () => {

    const location = useLocation();
    const category = location.pathname.split("/")[2];
    const [filters , setFilters] = useState({});
    const [sort , setSort] = useState("newest");

    const handleFilters = (event) => {

        const value = event.target.value;

        setFilters({
            ...filters,
           [event.target.name]: value.toLowerCase()
        })

    }
// console.log(filters);
    return (
        <Container>
        <Announcements/>
           <Navbar/>
           
           
            <Title>{category}</Title>
           <FilterContainer>
               
               <Filter><FilterText>Product Type:</FilterText>
               <Select name="j_type" onChange={handleFilters}>
               <Option disabled >Type</Option>
                   <Option>Gold Plated</Option>
                   <Option>Silver Plated</Option>
                   <Option>Oxidised </Option>
                   <Option>Kundan</Option>
                   <Option>Jhumki</Option>
               </Select>
               </Filter>
            <Filter
            ><FilterText>Sort Products:</FilterText>

            <Select onChange={event => setSort(event.target.value)}>
            <Option value="newest">Newest</Option>
            <Option value="asc">Price (asc)</Option>
            <Option value="desc">Price (desc)</Option>
          </Select>
          
          
          </Filter>
           </FilterContainer>
           <Products cat={category} filters={filters} sort={sort}   />
           <Newsletter/>
           <Footer/>
        </Container>
    )
}

export default ProductList


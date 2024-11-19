import React from 'react'
import { Banner } from './Banner'
import BookCards from '../shared/BookCards'
import FavoriteBook from './FavoriteBook'
import BestSeller from './BestSeller'
// import OtherBooks from './OtherBooks'
import PromoBanner from './PromoBanner'
import Review from './Review'
import Hero from './Hero'
import More from './More'
import Moa from './Moa'
import Section from './Section'
import HomeB from './HomeB'
// import Writers from './writers'
import Rev from './Rev'
export const Home = () => {
  return (
    <div>
      {/* <Banner/> */}
      <Hero/>
      <More/>
      <BestSeller/>
      <Moa/>
      <Section/>
      <HomeB/>
      {/* <Writers/> */}
      <Rev/>
      
      <PromoBanner/>
      <FavoriteBook/>
      {/* <OtherBooks/> */}
      <Review/>
    </div>
  )
}

import React from "react";
import Hero from './Hero.jsx'
import Values from './Values.jsx'
import Benefits from './Benefits.jsx'
import Footer from './Footer.jsx'
import {Box} from '@chakra-ui/react'

let Home = () => {
  return (
    <>
    <Box overflow="hidden">
      <Hero />
      <Values />
      <Benefits />
      <Footer />
      </Box>
    </>
  );
}

export default Home;

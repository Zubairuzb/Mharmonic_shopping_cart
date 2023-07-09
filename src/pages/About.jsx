import React from "react";
import { Text, Box, Flex } from "@chakra-ui/react";

let About = ()=> {
  return (
    <>
      <Text
        color="purple"
        pos="absolute"
        left={{base: '120px', md: '600px'}}
        top="100px"
        fontWeight="700"
        textTransform="upperCase"
        fontSize={{base: '1.5em', md: '4em', lg: '5.5em'}}
      >
        About Us
      </Text>
      <Flex
        w="100%"
        justify="center"
        align="center"
        h="100vh"
        pl={{base: '30px', md: '100px'}}
        pr={{base: '30px', md: '100px'}}
        gap={{base: '30px', md: '100px'}}
        flexWrap="wrap"
      >
        <Box w={{base: '80%', md: '40%'}} mt={{base: '100px', md: '0px'}}>
          <img src="about-3.jpg" />
        </Box>
        <Box w={{base: '100%', md: '50%'}} mt={{base: '10px', md: '200px'}} pb="20px">
          <Text fontSize={{base: '1em', md: '1.5em'}} textAlign="justify" position="relative">
            We are a company that inspires new ways to learn new skills by
            combining blockchain technology with an easy to use interface, We
            are a company that inspires new ways to learn new skills by
            combining blockchain technology with an easy to use interface We are
            a company that inspires new ways to learn new skills by combining
            blockchain technology with an easy to use interface.
          </Text>
          <br />
          <Text fontSize={{base: '1em', md: '1.5em'}} textAlign="justify">
            We are a company that inspires new ways to learn new skills by
            combining blockchain technology with an easy to use interface, We
            are a company that inspires new ways to learn new skills by
            combining blockchain technology with an easy to use interface We are
            a company that inspires new ways to learn new skills by combining
            blockchain technology with an easy to use interface.
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default About;

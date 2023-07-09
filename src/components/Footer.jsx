import React from "react";
import { Text, Flex, Box, Image, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let Footer = () => {
  return (
    <>
      <Box
        w={{ base: "90%", md: "70%" }}
        borderRadius="15px"
        p="30px"
        h="80px"
        backgroundColor="#8B1874"
        mt="10px"
        mb="-30px"
        position="relative"
        mr="auto"
        ml="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Text
          fontWeight="600"
          fontSize={{ base: "1em", md: "24px" }}
          color="#fff"
        >
          Ready to Get Started?
        </Text>
        <Button
          fontWeight="bold"
          background="#fff"
          color="#B71375"
          fontSize={{ base: "0.7em", md: "24px" }}
        >
          <Link to="/sample"> Order Your Free Sample</Link>
        </Button>
      </Box>
      <Box backgroundColor="#B71375">
        <Flex
          pt={{ base: "40px", md: "60px" }}
          justifyContent="center"
          w="100%"
          textAlign={{ base: "center", md: "left" }}
          align={{ base: "center", md: "start " }}
          flexDirection={{ base: "column", md: "row" }}
          flexWrap="wrap"
          gap={{ base: "10px", md: "40px" }}
        >
          <Box mb="20px" w={{ base: "80%", md: "20%" }}>
            <Text fontWeight="bold" fontSize="1.5rem" color="#fff">
              Micro Harmonic
            </Text>
            <Text mb="0px" color="#fff">
              No. 23/24 Kad ICT Hub, Kaduna <br /> Tel: +2348033697939 <br />{" "}
              info@microharmonic.com
            </Text>
          </Box>
          <Box w={{ base: "80%", md: "20%" }} mb="20px">
            <Text fontWeight="bold" fontSize="1em" color="#fff" mb="5px">
              Core Values
            </Text>
            <Text mb="2px" color="#fff">
              Innovation
            </Text>
            <Text mb="2px" color="#fff">
              Team Work
            </Text>
            <Text mb="2px" color="#fff">
              Creativity
            </Text>
          </Box>
          <Box w={{ base: "80%", md: "20%" }}>
            <Text fontWeight="bold" fontSize="1em" color="#fff" mb="5px">
              Our Services
            </Text>
            <Text mb="15px" color="#fff">
              We focus on bringing an innvative solutions to our customers
            </Text>
          </Box>
          <Box w={{ base: "80%", md: "20%" }} color="#fff" pb="20px">
            <Text fontWeight="bold" fontSize="1em" color="#fff" mb="10px">
              Other Links
            </Text>
            <Box display="flex" flexDirection="column">
              <Link to="/privacy">Privacy</Link>
              <Link to="/about">About</Link>
              <Link to="/courses">Course</Link>
            </Box>
          </Box>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;

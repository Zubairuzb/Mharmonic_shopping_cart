import "../App.css";
import { Text, Flex, Box, Button } from "@chakra-ui/react";
import heroImage from "../assets/hero_image.svg";
import { Link } from "react-router-dom";

let Hero = () => {
  return (
    <>
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        justifyContent={{ base: "start", sm: "start", md: "center" }}
        align="center"
        gap="100px"
        w="100%"
        h="100vh"
        pl={{ base: "10px", md: "40px" }}
        pr={{ base: "10px", md: "40px" }}
        mt={{ base: "50px", md: "0px" }}
        mb={{ base: "80px", md: "0px" }}
        background="white"
      >
        <Box w={{ base: "100%", sm: "100%", md: "70%", lg: "50%" }}>
          <Text
            fontSize="2.8em"
            fontWeight="bold"
            color="#B71375"
            lineHeight="65px"
            mb="15px"
          >
            Learning New Skills Redifined with Micro Harmonic
          </Text>
          <Text mb="15px" fontSize="20px">
            We are a company that inspires new ways to learn new skills by
            combining blockchain technology with an easy to use interface{" "}
          </Text>
          <Button background="#8B1874" color="#fff" mt="10px">
            <Link to="/sample">Order Your Free Sample</Link>
          </Button>
        </Box>
        <Box className="hero" w={{ base: "50%" }}>
          <img src={heroImage} alt="hero image" />
        </Box>
      </Flex>
    </>
  );
}

export default Hero;

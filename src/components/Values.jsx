import React from "react";
import { Text, Flex, Box, Image, Button } from "@chakra-ui/react";

let Values = () => {
  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        fontWeight="bold"
        backgroundColor="#B71375"
        color="#fff"
        w="300px"
        h="50px"
        borderRadius="30px"
        m="auto"
      >
        Our Core Values
      </Text>
      <Flex
        justify="center"
        backgroundColor="#f0e1fa"
        mb="40px"
        mt="20px"
        pb="30px"
        flexWrap="wrap"
      >
        <Box
          m="30px"
          w={{ base: "80%", sm: "80%", md: "20%" }}
          backgroundColor="#f6f5f7"
          p="30px"
        >
          <Image src="value_icon1.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="26px" color="#8B1874" mb="10px">
            Innovation
          </Text>
          <Text mb="15px">
            We focus on bringing an innvative solutions to our customers
          </Text>
        </Box>
        <Box
          m="30px"
          w={{ base: "80%", sm: "80%", md: "20%" }}
          backgroundColor="#f6f5f7"
          p="30px"
        >
          <Image src="value_icon2.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="26px" color="#8B1874" mb="10px">
            Team Work
          </Text>
          <Text mb="15px">
            We focus on bringing an innvative solutions to our customers
          </Text>
        </Box>
        <Box
          m="30px"
          w={{ base: "80%", sm: "80%", md: "20%" }}
          backgroundColor="#B71375"
          p="30px"
        >
          <Image src="value_icon3.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="26px" mb="10px" color="#fff">
            User Experience
          </Text>
          <Text mb="15px" color="#fff">
            We focus on bringing an innvative solutions to our customers
          </Text>
        </Box>
        <Box
          m="30px"
          w={{ base: "80%", sm: "80%", md: "20%" }}
          backgroundColor="#f6f5f7"
          p="30px"
        >
          <Image src="value_icon4.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="26px" color="#8B1874" mb="10px">
            Creativity
          </Text>
          <Text mb="15px">
            We focus on bringing an innvative solutions to our customers
          </Text>
        </Box>
      </Flex>
    </>
  );
}

export default Values;

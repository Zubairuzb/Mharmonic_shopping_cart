import React from "react";
import { Text, Flex, Box, Image, Button } from "@chakra-ui/react";

let Benefits = ()=> {
  return (
    <>
      <Text
        textAlign="center"
        fontSize="30px"
        fontWeight="bold"
        backgroundColor="#B71375"
        color="#fff"
        w="200px"
        h="50px"
        borderRadius="30px"
        m="auto"
      >
        Benefits
      </Text>
      <Flex justify="center" backgroundColor="#fff" flexWrap="wrap">
        <Box
          m="30px"
          w={{base: '80%', md: '20%'}}
          backgroundColor="#B71375"
          p="30px"
          borderRadius="15px"
        >
          <Image src="value_icon1.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="24px" color="#fff" mb="10px">
            Free Sample
          </Text>
          <Text mb="15px" color="#fff">
            We focus on bringing an innvative solutions to our customers
          </Text>
          <Button>READ MORE..</Button>
        </Box>
        <Box
          m="30px"
          w={{base: '80%', md: '20%'}}
          backgroundColor="#B71375"
          p="30px"
          borderRadius="15px"
        >
          <Image src="value_icon2.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="24px" color="#fff" mb="10px">
            Customer Support
          </Text>
          <Text mb="15px" color="#fff">
            We focus on bringing an innvative solutions to our customers
          </Text>
          <Button>READ MORE..</Button>
        </Box>
        <Box
          m="30px"
          w={{base: '80%', md: '20%'}}
          backgroundColor="#B71375"
          p="30px"
          borderRadius="15px"
        >
          <Image src="value_icon3.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="24px" mb="10px" color="#fff">
            Weekly Newslater
          </Text>
          <Text mb="15px" color="#fff">
            We focus on bringing an innvative solutions to our customers
          </Text>
          <Button>READ MORE..</Button>
        </Box>
        <Box
          m="30px"
          w={{base: '80%', md: '20%'}}
          backgroundColor="#B71375"
          p="30px"
          borderRadius="15px"
        >
          <Image src="value_icon4.svg" w="80px" mb="15px" />
          <Text fontWeight="bold" fontSize="24px" color="#fff" mb="10px">
            Free Trial
          </Text>
          <Text mb="15px" color="#fff">
            We focus on bringing an innvative solutions to our customers
          </Text>
          <Button>READ MORE..</Button>
        </Box>
      </Flex>
    </>
  );
}

export default Benefits;

import { React, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { list } from "../assets/data";
import { Flex, Text, Image, Box, Button } from "@chakra-ui/react";

let SingleProduct = ({ setCart, cart }) => {
  let { id } = useParams();
  let singleCourse = list.find((el) => {
    return el.id == id;
  });

  let addToCart = (e) => {
    setCart((prevCart) => [...prevCart, singleCourse]);
    e.currentTarget.disabled = true;
  };

  let { title, desc, icon, price } = singleCourse;
  return (
    <>
      <Flex
        justify="center"
        mt="30px"
        w="100%"
        gap={{ base: "20px", md: "50px" }}
        h="85vh"
        flexWrap="wrap"
      >
        <Box
          display={{ base: "flex", sm: "flex", md: "block" }}
          flexDirection="column"
        >
          <Image
            w={{ base: "200px", md: "300px" }}
            h={{ base: "300px", md: "400px" }}
            src={icon}
            order="2"
          />
          <Button backgroundColor="#8B1874" color="#fff" w="130px">
            <Link to={`/courses`}>Back to courses</Link>
          </Button>
        </Box>
        <Box
          pos="relative"
          display="flex"
          flexDirection="column"
          backgroundColor="#B71375"
          borderRadius="20px"
          p="3.4em 2.4em"
          w={{ base: "90%", md: "30%" }}
        >
          <Text fontWeight="bold" fontSize="24px" color="#fff">
            {title}
          </Text>
          <Text color="#fff" fontSize="1.1em">
            {desc}
          </Text>
          <Text mt="10px" fontWeight="bold" fontSize="1.5rem" color="#c7c6c5">
            N{price.toLocaleString()}
          </Text>
          <Button pos="absolute" bottom="10px" onClick={addToCart}>
            Add to Cart
          </Button>
        </Box>
      </Flex>
    </>
  );
}

export default SingleProduct;

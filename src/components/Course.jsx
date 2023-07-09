import React, { useState } from "react";
import { list } from "../assets/data.js";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let Course = () => {
  return (
    <>
      <Flex
        w="100%"
        flexDirection="row"
        h="100vh"
        justify="center"
        m="35px"
        flexWrap="wrap"
      >
        {list.map((course) => {
          const { id, title, desc } = course;
          const shortDesc = desc.substring(0, 122);
          return (
            <Box
              pos="relative"
              key={id}
              w={{ base: "100%", sm: "100%", md: "20%" }}
              ml="40px"
              borderRadius={15}
              boxShadow="-4px 6px 6px -1px rgba(0,0,0,0.75)"
              backgroundColor="#B71375"
              p="20px"
              mt="10px"
              mb="30px"
            >
              <Text fontWeight={700} fontSize="1.2rem" color="#fff">
                {title}
              </Text>
              <Text lineHeight="30px" color="#fff" fontSize="1em" pb="40px">
                {shortDesc}
              </Text>
              <Button pos="absolute" bottom="15px" mt="10px">
                <Link to={`/courses/${id}`}>View Course Detail</Link>
              </Button>
            </Box>
          );
        })}
      </Flex>
    </>
  );
};

export default Course;

import React from "react";
import {
  Box,
  Image,
  FormControl,
  FormLabel,
  Text,
  Button
} from "@chakra-ui/react";
import { Link } from "react-router-dom";

let Sample = () => {
  return (
    <Box
      h="100vh"
      backgroundColor="purple.700"
      display="flex"
      gap={{ base: "20px", md: "100px" }}
      justifyContent="center"
    >
      <Box boxSize="sm" mt={{ base: "20px", md: "130px" }}>
        <Text textAlign="center" mb="30px" color="#fff" fontWeight={500}>
          Order Free Sample in just minutes
        </Text>
        <Image src="order.svg" mb="50px" />
        <Link to="/">
          <Text color="black" fontWeight={500}>
            Back to homepage
          </Text>
        </Link>
      </Box>
      <Box mt={{ base: "20px", md: "80px" }}>
        <FormControl>
          <FormLabel color="#fff" fontSize="0.9em" mb="2px">What is your Email Address</FormLabel>
          <input type="email" />
          <FormLabel color="#fff" fontSize="0.9em" mb="2px" mt="10px">Firstname</FormLabel>
          <input type="text" />
          <FormLabel color="#fff" fontSize="0.9em" mb="2px" mt="10px">Lastname</FormLabel>
          <input type="text" />
          <FormLabel color="#fff" fontSize="0.9em" mb="2px" mt="10px">Company</FormLabel>
          <input type="text" />
          <FormLabel color="#fff" fontSize="0.9em" mb="2px" mt="10px">Phone Number</FormLabel>
          <input type="number" />
          <FormLabel color="#fff" fontSize="0.9em" mb="2px" mt="10px">Password</FormLabel>
          <input type="text" />
          <FormLabel></FormLabel>
          <Button type="submit" colorScheme="purple">Send</Button>
        </FormControl>
      </Box>
    </Box>
  );
}

export default Sample;

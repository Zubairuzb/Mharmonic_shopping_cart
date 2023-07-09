import { React, useState } from "react";
import { Box, Text, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";

let Cart = ({ cart, setCart }) => {

  let removeFromCart = (id) => {
    let newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const initialValue = 0;
  const total = cart.reduce(
    (accumulator, current) => accumulator + current.price,
    initialValue
  );
  console.log(total);

  return (
    <>
      <Box
        m="20px auto"
        borderRadius={15}
        w={{ base: "100%", md: "60%" }}
        color="#fff"
        backgroundColor="#8B1874"
        h="90vh"
        justifyContent="center"
      >
        {cart.map((cartItem) => {
          const { id, title, price } = cartItem;
          return (
            <>
              <Box
                key={id}
                display="flex"
                gap={{ base: "20px", md: "100px" }}
                ml="30px"
                fontSize={{ base: "0.9em", md: "1em" }}
              >
                <Text mt="20px" w={{ base: "40%", md: "25%" }}>
                  {title}
                </Text>
                <Text mt="20px">N{price.toLocaleString()}</Text>
                <Button
                  mt="20px"
                  colorScheme="purple"
                  onClick={() => {
                    removeFromCart(id);
                  }}
                >
                  Remove
                </Button>
              </Box>
            </>
          );
        })}
        <Box ml="30px" mt="30px">
          <Text>
            {total > 0
              ? `SubTotal: N${total.toLocaleString()}`
              : "Cart is empty"}
          </Text>
          <Text>
            {total > 0 && `VAT 5%: N${Number(0.05 * total).toLocaleString()}`}
          </Text>
          <Text fontWeight="bold">
            {total > 0 &&
              `Total: N${Number(total + 0.05 * total).toLocaleString()}`}
          </Text>
        </Box>
        <Button w="150px" ml="30px" mt="20px">
          <Link to="/courses">Continue Shopping</Link>
        </Button>
        {cart.length > 0 && (
          <Button w="150px" ml="30px" mt="20px" colorScheme="purple">
            <Link to="#">Pay Now</Link>
          </Button>
        )}
      </Box>
    </>
  );
};

export default Cart;

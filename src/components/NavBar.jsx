import React from "react";
import {
  Box,
  Flex,
  Text,
  Button,
  Drawer,
  DrawerBody,
  useDisclosure,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { ShoppingCart, List } from "phosphor-react";

const NavBar = ({ cart }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = React.useState("right");
  console.log(cart);
  return (
    <>
      <Flex
        display={{ base: "none", sm: "none", md: "flex" }}
        flexDirection="row"
        justify="space-between"
        pl="50px"
        pr="50px"
        align="center"
        w="100%"
        h="80px"
        backgroundColor="#8B1874"
        pos="sticky"
        top="0"
        zIndex="1"
      >
        <Box>
          <Text fontWeight="bold" fontSize="1.5rem" color="#fff">
            Micro Harmonic
          </Text>
        </Box>
        <Box display="flex" gap="30px" color="#fff">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/privacy">Privacy</Link>

          <Button>
            <Link to="/courses">OUR COURSES</Link>
          </Button>
          <Link to="/cart">
            <ShoppingCart size={32} pos="relative" />
            <Box
              fontSize=".7em"
              color="purple"
              pos="absolute"
              top="20px"
              right="40px"
              borderRadius="50%"
              backgroundColor="#fff"
              w="10px"
              h="15px"
              fontWeight="bold"
              textAlign="center"
            >
              {cart && Number(cart.length)}
            </Box>
          </Link>
        </Box>
        <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerHeader borderBottomWidth="1px">Micro Harmonic</DrawerHeader>
            <DrawerCloseButton />
            <DrawerBody>
              <Box
                display="flex"
                flexDirection="column"
                gap="10px"
                color="purple"
              >
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/privacy">Privacy</Link>

                <Button>
                  <Link to="/courses">OUR COURSES</Link>
                </Button>
              </Box>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Flex>

      <Box
        backgroundColor="purple"
        color="#fff"
        display={{ base: "flex", sm: "flex", md: "none" }}
        justifyContent="space-between"
        p="20px"
        h="70px"
        mb="0px"
      >
        <Text fontWeight="bold" fontSize="1.3em">
          Micro Harmonic
        </Text>
        <Link to="/cart">
          <ShoppingCart size={32} pos="relative" />
          <Box
            fontSize=".7em"
            color="purple"
            pos="absolute"
            top="20px"
            right="95px"
            borderRadius="50%"
            backgroundColor="#fff"
            w="10px"
            h="15px"
            fontWeight="bold"
            textAlign="center"
          >
            {cart && Number(cart.length)}
          </Box>
        </Link>
        {<List onClick={onOpen} size={32} />}
      </Box>
    </>
  );
};

export default NavBar;

import { Button, Container, Flex, HStack, Text, useColorMode } from '@chakra-ui/react';
import React from 'react'
import { Link } from 'react-router-dom';
import { PlusSquareIcon } from '@chakra-ui/icons'

const NavBar = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Container maxW={"1140px"} px={4}>
      <Flex
        h={16}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{ base: "column", sm: "row" }}
      >
        <Text
          fontSize={{ base: "22", sm: "28" }}
          fontWeight={"bold"}
          textAlign={"center"}
          bgGradient={"linear(to-r, cyan.300, blue.400)"}
          bgClip={"text"}
        >
        <Link to={"/"}>TIENDA MERN</Link>
        </Text>
        <HStack spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
            <Button>
              <PlusSquareIcon fontSize={20} />
            </Button>
          </Link>
          {/* <Link to={"/"}> */}
            <Button onClick={toggleColorMode}>
              {colorMode === "light" ? "Dark" : "Light"} Mode
            </Button>
          {/* </Link> */}
        </HStack>
      </Flex>
    </Container>
  );
}

export default NavBar;
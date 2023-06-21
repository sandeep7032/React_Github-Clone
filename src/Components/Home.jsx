import React from "react";
import Search from "./Search";
import Details from "./Details";
import { Box, Container, Flex } from "@chakra-ui/react";
import Profile from "./Profile";

const Home = () => {
  return (
    <Container boxShadow="dark-lg" mt="10px" maxW="1000px" p="30px">
      <Box mb="10px">
        <Search />
      </Box>

      <Flex>
        <Box w="35%" m="10px">
          <Profile />
        </Box>
        <Box w="65%" m="10px" color="white">
          <Details />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;

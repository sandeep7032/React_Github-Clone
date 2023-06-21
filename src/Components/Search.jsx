import { useState, useContext } from "react";
import { Input, Box, Button, Heading, Flex } from "@chakra-ui/react";
import getUserData from "./GithubAPI";
import githubContext from "./Context";

const Search = () => {
  const [username, setUsername] = useState();
  const { addData } = useContext(githubContext);
  const getData = () => {
    getUserData(username, addData);
  };
  return (
    <Box>
      <Box mb="15px">
        <Heading size="lg" color="green">
          GITHUB PROJECT
        </Heading>
      </Box>

      <Flex>
        <Input
          placeholder="Enter Github User Id"
          onChange={(e) => {
            setUsername(e.target.value);
          }}
        />
        <Button variant="outline" color="green" p="10px 70px" onClick={getData}>
          Search
        </Button>
      </Flex>
    </Box>
  );
};

export default Search;

import { useContext } from "react";
import { Box, Heading, Text, Button } from "@chakra-ui/react";
import githubContext from "./Context";

const Profile = () => {
  const { data } = useContext(githubContext);
  return (
    <Box p="10px" textAlign="center">
      <img
        src={data.avatar_url || "https://i.stack.imgur.com/frlIf.png"}
        className="img"
        alt=""
      />
      <Heading size="md" my={2}>
        {data.name || "No Name"}
      </Heading>

      <Text my={2}>
        {data.bio ||
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. A officia quis sunt in, voluptates perferendis"}
      </Text>

      <Button color="green">Profile</Button>
    </Box>
  );
};

export default Profile;

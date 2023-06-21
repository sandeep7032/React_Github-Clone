import { useContext } from "react";

import {
  Card,
  CardHeader,
  CardBody,
  Heading,
  Stack,
  StackDivider,
  Box,
  Text,
} from "@chakra-ui/react";
import githubContext from "./Context";

const Details = () => {
  const { data } = useContext(githubContext);
  return (
    <Card boxShadow="md">
      <CardHeader>
        <Heading size="md">Github User Details</Heading>
      </CardHeader>

      <CardBody>
        <Stack divider={<StackDivider />} spacing="4">
          <Box>
            <Heading size="xs" textTransform="uppercase">
              NAME
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.name}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              EMAIL
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.email}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Public Repositories
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.public_repos}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Followers
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.followers}
            </Text>
          </Box>
          <Box>
            <Heading size="xs" textTransform="uppercase">
              Following
            </Heading>
            <Text pt="2" fontSize="sm">
              {data.following}
            </Text>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
};

export default Details;

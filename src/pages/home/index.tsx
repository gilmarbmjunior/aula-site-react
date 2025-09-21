import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      bg={"blackAlpha.200"}
      height={"100vh"}
      position={"relative"}
      width={"100vw"}
    >
      <Box
        bg={"orange.500"}
        h={"56px"}
        position={"absolute"}
        w={"100%"}
      >
        <Box>Navbar</Box>
      </Box>

      <Box
        bottom={0}
        left={0}
        p={"16px"}
        position={"absolute"}
        top={"56px"}
        w={"350px"}
      >
        <Box>Sidebar</Box>
      </Box>

      <Box
        bottom={0}
        left={"350px"}
        p={"16px"}
        position={"absolute"}
        right={0}
        top={"56px"}
      >
        <Box>Body</Box>
      </Box>
    </Box>
  );
}

export default Home;

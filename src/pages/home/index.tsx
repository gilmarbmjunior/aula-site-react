import { Box } from "@chakra-ui/react";

function Home() {
  return (
    <Box
      bg={"natural.100"}
      height={"100vh"}
      overflow={"hidden"}
      position={"relative"}
      width={"100vw"}
    >
      <Box
        bg={"orange.500"}
        h={"56px"}
        position={"absolute"}
        w={"100%"}
      >
        <Box>navbar</Box>
      </Box>

      <Box
        bottom={0}
        left={0}
        overflowY={"auto"}
        p={"16px"}
        position={"absolute"}
        top={"56px"}
        w={"350px"}
      >
        <Box>sidebar</Box>
      </Box>

      <Box
        bottom={0}
        left={"350px"}
        overflowY={"auto"}
        p={"16px"}
        position={"absolute"}
        right={0}
        top={"56px"}
      >
        <Box
          bg={"natural.0"}
          borderRadius={"xl"}
          boxShadow={"md"}
          p={"16px"}
        >
          <Box>body</Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

import { Box, Button, HStack } from "@chakra-ui/react";
import Icon from "@mdi/react";
import { mdiMenu } from "@mdi/js";
import { useState } from "react";

function Home() {
  const [open, setOpen] = useState<boolean>(true);

  return (
    <Box
      bg={"natural.100"}
      height={"100vh"}
      overflow={"hidden"}
      position={"relative"}
      width={"100vw"}
    >
      <HStack
        bg={"orange.500"}
        h={"56px"}
        position={"absolute"}
        w={"100%"}
      >
        <Button
          _hover={{ bg: "orange.600" }}
          bg={"orange.500"}
          borderRadius={0}
          display={{ md: "block", lg: "none" }}
          h={"56px"}
          w={"56px"}
          onClick={() => setOpen(!open)}
        >
          <Icon
            path={mdiMenu}
            size={1}
          />
        </Button>
      </HStack>

      <Box
        bg={{ base: "natural.0", lg: "natural.100" }}
        bottom={0}
        boxShadow={{ base: "md", lg: "none" }}
        left={{ base: open ? "0" : "-350px", lg: "0px" }}
        overflowY={"auto"}
        p={"16px"}
        position={"absolute"}
        top={"56px"}
        transition={"left .5s ease"}
        w={"350px"}
        zIndex={9000}
      >
        <Box>sidebar</Box>
      </Box>

      <Box
        bg={"blackAlpha.500"}
        bottom={0}
        left={0}
        position={"absolute"}
        right={{ base: open ? 0 : "100vw", lg: "100vw" }}
        top={"56px"}
        zIndex={8999}
        onClick={() => setOpen(false)}
      />

      <Box
        bottom={0}
        left={{ base: "0px", lg: "350px" }}
        overflowY={"auto"}
        p={"16px"}
        position={"absolute"}
        right={0}
        top={"56px"}
        transition={"left .5s ease"}
      >
        <Box
          bg={"natural.0"}
          borderRadius={"xl"}
          boxShadow={"md"}
          p={"16px"}
        >
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam consequuntur nobis incidunt non corrupti,
            possimus suscipit rem illum autem molestias sequi dolores nesciunt molestiae temporibus vero debitis maiores
            nostrum minima?
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;

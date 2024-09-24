import { Stack, Image, Button, Icon } from "@chakra-ui/react";
import { FaCoffee } from "react-icons/fa";

export const DesktopNavbar = () => {
  return (
    <Stack
      borderBottomColor={"brand.white.5"}
      borderBottomWidth={"1px"}
      borderBottomStyle={"solid"}
      p={4}
      mt={4}
      w={"100%"}
      direction={"row"}
      justify={"space-between"}
      align={"center"}
    >
      <Image src="/logo.svg" alt="logo" height={"30px"} />
      <Button
        leftIcon={<Icon as={FaCoffee} />}
        borderRadius={8}
        color={"brand.white.100"}
        bgColor={"brand.green.100"}
        size={"sm"}
        w={"min-content"}
        _hover={{
          bgColor: "brand.green.100",
          transform: "scale(1.05)",
        }}
      >
        Buy me a coffee
      </Button>
    </Stack>
  );
};

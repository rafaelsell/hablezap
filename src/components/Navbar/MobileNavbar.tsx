import { Stack, Image, Icon, IconButton } from "@chakra-ui/react";
import { BiCoffee } from "react-icons/bi";

export const MobileNavbar = () => {
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
      <IconButton
        size={"sm"}
        borderRadius={6}
        color={"brand.white.100"}
        bgColor={"brand.green.100"}
        borderColor={"brand.white.5"}
        aria-label="copy"
        _hover={{
          bgColor: "brand.green.100",
        }}
        icon={
          <Icon h={"18px"} w={"18px"} color={"brand.white.100"} as={BiCoffee} />
        }
      />
    </Stack>
  );
};

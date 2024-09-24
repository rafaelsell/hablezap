import { Stack, Text } from "@chakra-ui/react";

export const Footer = () => {
  return (
    <Stack w={"100%"} justify={"center"} align={"center"} p={4}>
      <Text color={"brand.white.35"} fontSize={"sm"}>
        hablezap-preview.0.0.2
      </Text>
    </Stack>
  );
};

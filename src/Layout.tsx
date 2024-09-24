import { Stack } from "@chakra-ui/react";
import { ReactNode } from "react";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <Stack
      color={"brand.white.100"}
      minH={"100vh"}
      w={"100%"}
      bgColor={"brand.black.100"}
    >
      <Stack justify={"center"} align={"center"} minH={"100vh"} w={"100%"}>
        {children}
      </Stack>
    </Stack>
  );
};
